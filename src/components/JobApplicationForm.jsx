import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import MainNavbar from "./MainNavbar";
import '../pages/careers/jobApplication.css'

const JobApplicationForm = ({ title = "Job Application" }) => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  /* const [resumeFile, setResumeFile] = useState(null); */

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume_file") {
      const file = files[0];
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a .pdf, .doc, or .docx file.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB.");
        return;
      }
      /* setResumeFile(file); */
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        "service_8adwtef",
        "template_xum3zss",
        formRef.current,
        "V5lGFSciW203Stbif"
      );
      alert("Application submitted successfully!");
      formRef.current.reset();
      setFormData({ name: "", email: "", contact: "", address: "" });
      /* setResumeFile(null); */
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    emailjs.init("V5lGFSciW203Stbif");
  }, []);

  return (
    <>
      <MainNavbar />
      <div className="form-container">
        <div className="form-wrapper">
          <h2 className="form-title">{title}</h2>
          <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-group">
              <label>
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                Contact Number <span className="required">*</span>
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* <div className="form-group">
              <label>
                Upload Resume <span className="required">*</span>
              </label>
              <input
                type="file"
                name="resume_file"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
              />
            </div> */}

            <button className="submit-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default JobApplicationForm;
