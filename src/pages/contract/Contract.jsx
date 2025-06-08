import React from 'react';
import '../contract/Contract.css';
import MainNavbar from '../../components/MainNavbar';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

const Contract = () => {
  const handleSubmit = () => {
    // You can collect and validate form data here
    alert('Form submitted!');
    // Or send the data to a backend/server
  };

  return (
    <>
      <MainNavbar />
      <div className="collab-containers">
        <div className="form-sections">
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
              placeholder="Enter your full name"
              className="input"
            />
          </div>

          <div className="form-groups">
            <label>
              <strong>
                Email address <span className="required">*</span>
              </strong>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input"
            />
          </div>

          <div className="form-groups">
            <label>
              <strong>
                Mobile number <span className="required">*</span>
              </strong>
            </label>
            <input
              type="text"
              placeholder="Enter your Mobile number"
              className="input"
            />
          </div>

          <div className="form-groups">
            <label>
              <strong>
                Message <span className="required">*</span>
              </strong>
            </label>
            <input type="text" placeholder="Message" className="input" />
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
