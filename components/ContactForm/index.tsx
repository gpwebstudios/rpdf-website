import { useForm, ValidationError } from "@formspree/react";
import {
  FaAmazon,
  FaCheck,
  FaFacebook,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("maykwabk");
  const altButtonStyle = {
    backgroundColor: 'white', // Change to any color you prefer
    color: '#23578e', // Change to the desired text color
  };

  return (
    <div id="contactForm" className="container my-5">
      <div className="row border rounded shadow-sm">
        <div className="col-md-4 p-4 contact-info">
          <div className="fw-bold mb-3 text-light-gray">Contact Us</div>
          <div className="pt-3">
            Thank you for your interest in the Raleigh Police Department
            Foundation. Please complete the form and we’ll be in touch shortly.
          </div>
          <div className="pt-3">
            Mailing Address: <br />
            (Donation checks can be mailed here) <br />
            P.O. Box 18283 <br />
            Raleigh, NC 27619 <br />
          </div>
          <div className="pt-3">
            <i>For tax purposes, our EIN # is 27-0326382</i>
          </div>
          <div className="flex pt-3">
            <FaRegEnvelope />
            <span className="text-break ps-2">
              <a href="mailto:info@raleighpolicefoundation.org">
                info@raleighpolicefoundation.org
              </a>
            </span>
          </div>
          <div className="flex pt-3">
            <label className="pb-2" htmlFor="joinMailList">Join Mailing List</label>
            <span className="text-break ps-2">
              <input
                id="mailingEmail"
                type="email"
                name="emailaddress"
                className="form-control"
                placeholder="Email"
                required={true}
              />
            </span>
            <button
              style={altButtonStyle}
              className="btn btn-primary mt-2"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </div>
          <div className="social-icons pt-5 d-flex">
            <div className="pe-3 d-flex align-items-center">
              <a
                target="_blank"
                href="https://www.facebook.com/RaleighPoliceFoundation"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
            <div className="pe-3 d-flex align-items-center">
              <a
                target="_blank"
                href="https://www.instagram.com/raleighpolicefoundation/"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="pe-3 d-flex align-items-center">
              <a
                target="_blank"
                href="https://smile.amazon.com/ch/27-0326382?ref_=pe_1723670_203812010"
                rel="noreferrer"
              >
                <FaAmazon />
              </a>
            </div>
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
                  name="First Name"
                  className="form-control"
                  placeholder="First name"
                  required={true}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="contactLasttName">Last Name</label>
                <input
                  id="contactLastName"
                  type="text"
                  name="Last Name"
                  className="form-control"
                  placeholder="Last name"
                  required={true}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="contactCounty">County</label>
                <input
                  id="contactCounty"
                  type="text"
                  name="County"
                  className="form-control"
                  placeholder="County"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="contactCity">City</label>
                <input
                  id="contactCity"
                  type="text"
                  name="City"
                  className="form-control"
                  placeholder="City"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="contactPhone">Phone</label>
                <input
                  id="contactPhone"
                  type="text"
                  name="Phone Number"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="Email"
                  className="form-control"
                  placeholder="Email"
                  required={true}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="form-group pt-3">
              <label htmlFor="contactMessage">Message</label>
              <textarea
                className="form-control"
                id="contactMessage"
                name="Message"
                rows={3}
              ></textarea>
            </div>
            <div
              className={`${state.succeeded
                ? "justify-content-between"
                : "justify-content-end"
                } d-flex  align-items-center pt-3`}
            >
              {state.succeeded && (
                <div
                  className="alert alert-success d-flex align-items-center my-2 me-2"
                  role="alert"
                >
                  <div className="d-flex align-items-center">
                    <FaCheck />
                  </div>
                  <div className="px-3">
                    Thank you for your message! We'll get back to you shortly.
                  </div>
                </div>
              )}

              <div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
