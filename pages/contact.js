import React from 'react';
import ShareButton from '../components/ShareButton';

export default function Contact() {
  return (
    <div className="wrapper">
      <div className="main" />
      <div className="content">
        <div id="section7" className="form-section">
          <div className="container">
            <div className="form-container">
              <form
                action="https://formsubmit.co/astojanovic1900@gmail.com"
                method="POST"
              >
                <div className="first-row-form">
                  <input
                    className="input-form"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <input
                    className="input-form"
                    name="phone"
                    placeholder="Number"
                  />
                </div>
                <input
                  className="input-form"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <textarea
                  className="input-form my-3"
                  type="text"
                  name="message"
                  placeholder="Write message"
                />
                <input type="hidden" name="_next" value="/thankyou" />
                <input type="hidden" name="_subject" value="New Email!" />
                <input type="hidden" name="_captcha" value="false" />
                <button className="submit-btn">Send</button>
              </form>
            </div>
          </div>
        </div>
        <div className="img">
          <div className="social">
            <ShareButton url="/contact" round={true} size={50} />
          </div>
          <img className="email-icon" src="email.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
