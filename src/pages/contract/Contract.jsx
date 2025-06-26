import React, { useState, useEffect } from 'react';
import '../contract/Contract.css';
import MainNavbar from '../../components/MainNavbar';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';

const Contract = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
   if (!formData.mobile.trim()) {
  newErrors.mobile = 'Mobile number is required';
} else if (!/^\+?\d{10,15}$/.test(formData.mobile.trim())) {
  newErrors.mobile = 'Mobile number must contain only digits and be 10 to 15 characters long';
}

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_fpnhh0h';
    const TEMPLATE_ID = 'template_7laa9bj';
    const USER_ID = 'RG-7rX1g7mMloJv3k';

    const templateParams = {
      from_name: formData.fullName,
      email: formData.email,
      phone: formData.mobile,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(() => {
        setShowSuccess(true);
        setFormData({ fullName: '', email: '', mobile: '', message: '' });
        setErrors({});
      })
      .catch((err) => {
        alert("Failed to send message. Try again later.");
        console.error('EmailJS Error:', err);
      });
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <MainNavbar />
      <div className="collab-containers">
        <div className="form-sections">
          {showSuccess && (
            <div className="success-message" style={{
              position: 'absolute',
              top: '100px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0, 128, 0, 0.9)',
              color: 'white',
              padding: '15px 25px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              animation: 'fadeInOut 3s ease-in-out',
              zIndex: 1000
            }}>
              We have received your message, we will contact you very soon
            </div>
          )}

          <h1>CONTACT US</h1>
          <p>
            It would be great to hear from you! Just drop us a line and ask for anything
            with which you think we could be helpful. We are looking forward to hearing
            from you!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-groups">
              <label><strong>Full name <span className="required">*</span></strong></label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="field"
              />
              {errors.fullName && <span style={{ color: 'red' }}>{errors.fullName}</span>}
            </div>

            <div className="form-groups">
              <label><strong>Email address <span className="required">*</span></strong></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="field"
              />
              {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>

            <div className="form-groups">
              <label><strong>Mobile number <span className="required">*</span></strong></label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your Mobile number"
                className="field"
              />
              {errors.mobile && <span style={{ color: 'red' }}>{errors.mobile}</span>}
            </div>

            <div className="form-groups">
              <label><strong>Message</strong></label>
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="field"
              />
            </div>

            <div>
              <button className="submit" type="submit">Submit</button>
            </div>
          </form>
        </div>

        <div className="info-section">
          <div className="address">
            <h2>US Office</h2>
            <hr />
            <p><FaMapMarkerAlt /> 8200 NW 41st Street, Suite 200, Miami, FL - 33166</p>
            <p><FiPhone /> <a href="tel:+3055633277">+ (305) 563 - 3277</a></p>
            <h3><MdEmail /> Email us</h3>
            <a href="mailto:info@everestglobalsolutionsinc.com">info@everestglobalsolutionsinc.com</a>
          </div>

          <div className="india-address">
            <h2>India Office</h2>
            <hr />
            <p><FaMapMarkerAlt /> 8-39-4-102, J.B.S Towers, Bachupally, Hyderabad, Telangana - 500090.</p>
            <p>GST: 36AAGCE7685J1Z1</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contract;
