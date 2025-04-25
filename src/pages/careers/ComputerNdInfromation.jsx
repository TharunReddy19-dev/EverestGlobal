import React, { useState } from "react";
import MainNavbar from "../../components/MainNavbar";

const ComputerNdInfromation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    resume: null,
  });
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Application submitted successfully!");
  };
  
  return (
   <>
   <MainNavbar/>
    <div className="collab-container">
      <div className="form-sections">
        <h2>APPLY TO COMPUTER AND INFORMATION SYSTEMS MANAGERS</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-groups-careers">
            <label>
              Full Name <span className="required-careers">*</span>
            </label>
            <input
              className="input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-groups-careers">
            <label>
              Email <span className="required-careers">*</span>
            </label>
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-groups-careers">
            <label>
              Contact Number <span className="required-careers">*</span>
            </label>
            <input
              className="input"
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-groups-careers">
            <label>Address</label>
            <textarea
              className="input address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>
  
          <div className="form-groups-careers">
            <label>
              Upload Resume <span className="required-careers">*</span>
            </label>
            <input
              className="input"
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
            />
          </div>
  
          <button className="submit" type="submit">
            Submit Application
          </button>
        </form>
      </div>
    </div>
    </>
  );
  };
  

export default ComputerNdInfromation