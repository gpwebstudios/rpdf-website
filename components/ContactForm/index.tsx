import React, { useState } from "react"
import { FaFacebook, FaInstagram, FaRegEnvelope } from "react-icons/fa";

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [county, setCounty] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      county,
      city,
      email,
      phoneNumber,
      message
    };
    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    });
  }


  return (
    <div id="contactForm" className="container my-5 pt-5">
      <div className="row border rounded shadow-sm">
        <div className="col-md-4 p-4 contact-info">
          <div className="fw-bold mb-3 text-light-gray">Contact Us</div>
          <div className="pt-3">
            Thank you for your interest in the Raleigh Police Department
            Foundation. Please complete the form and we’ll be in touch shortly.
          </div>
          <div className="flex pt-3">
            <FaRegEnvelope />
            <span className="text-break ps-2">info@raleighpolicefoundation.org</span>
          </div>
          <div className="social-icons pt-5">
            <span><FaFacebook /></span>
            <span><FaInstagram /></span>
          </div>
        </div>
        <div className="col-md-8 p-4">
          <div className="fw-bold mb-3">Send Us a Message</div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="contactFirstName">First Name</label>
                <input
                  id="contactFirstName"
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  onChange={e => setFirstName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="contactLasttName">Last Name</label>
                <input
                  id="contactLastName"
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  onChange={e => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="contactCounty">County</label>
                <input
                  id="contactCounty"
                  type="text"
                  className="form-control"
                  placeholder="County"
                  onChange={e => setCounty(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="contactCity">City</label>
                <input
                  id="contactCity"
                  type="text"
                  className="form-control"
                  placeholder="City"
                  onChange={e => setCity(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="contactPhone">Phone</label>
                <input
                  id="contactPhone"
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  onChange={e => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="contactEmail">Email Address</label>
                <input
                  id="contactEmail"
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group pt-3">
              <label htmlFor="contactMessage">Message</label>
              <textarea
                className="form-control"
                id="contactMessage"
                rows={3}
                onChange={e => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="text-end pt-3">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ContactForm