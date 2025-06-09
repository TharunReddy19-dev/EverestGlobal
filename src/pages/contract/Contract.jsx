import React, { useState ,useEffect } from 'react';
import '../contract/Contract.css';
import MainNavbar from '../../components/MainNavbar';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

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
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\+?\d{10,15}$/.test(formData.mobile.replace(/\s/g, ''))) {
      newErrors.mobile = 'Invalid mobile number';
    }
    
   /*  if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } */
    
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission
      setShowSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        message: ''
      });
      setErrors({});
      // You can add API call here to send form data
    } else {
      setErrors(validationErrors);
      setShowSuccess(false);
    }
  };
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // Hide popup after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
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
    <div 
              className="success-message" 
              style={{ 
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
              }}
            >
              We have received your message, we will contact you very soon
            </div>
          )}
          <h1>CONTACT US</h1>
          <p>
            It would be great to hear from you! Just drop us a line and ask for anything
            with which you think we could be helpful. We are looking forward to hearing
            from you!
          </p>

          <div className="form-groups">
            <label>
              <strong>
                Full name <span className="required">*</span>
              </strong>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="input"
            />
            {errors.fullName && <span className="error" style={{ color: 'red' }}>{errors.fullName}</span>}
          </div>

          <div className="form-groups">
            <label>
              <strong>
                Email address <span className="required">*</span>
              </strong>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input"
            />
            {errors.email && <span className="error" style={{ color: 'red' }}>{errors.email}</span>}
          </div>

          <div className="form-groups">
            <label>
              <strong>
                Mobile number <span className="required">*</span>
              </strong>
            </label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your Mobile number"
              className="input"
            />
            {errors.mobile && <span className="error" style={{ color: 'red' }}>{errors.mobile}</span>}
          </div>

          <div className="form-groups">
            <label>
              <strong>
                Message <span className="required"></span>
              </strong>
            </label>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="input"
            />
            {errors.message && <span className="error" style={{ color: 'red' }}>{errors.message}</span>}
          </div>

          <div>
            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>

        <div className="info-section">
          <div className="address">
            <h2>US Office</h2>
            <hr />
            <p>
              <FaMapMarkerAlt style={{ marginRight: '8px' }} />
              8200 NW 41st Street, Suite 200, Miami, FL - 33166
            </p>
            <p>
              <FiPhone style={{ marginRight: '8px' }} />
              <a href="tel:+(305)563-3277">+ (305) 563 - 3277</a>
            </p>
            <h3>
              <MdEmail style={{ marginRight: '8px' }} />
              Email us
            </h3>
            <a href="mailto:info@everestglobalsolutionsinc.com">
              info@everestglobalsolutionsinc.com
            </a>
          </div>

          <div className="india-address">
            <h2>India Office</h2>
            <hr />
            <p>
              <FaMapMarkerAlt style={{ marginRight: '8px' }} />
              8-39-4-102, J.B.S Towers, 01, Bachupally Village, Kukatpally,
              Hyderabad, Telangana - 500090.
            </p>
            <p>GST: 36AAGCE7685J1Z1</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contract;