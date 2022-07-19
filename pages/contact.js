import React from 'react';
import ShareButton from '../components/ShareButton';

export default function Contact() {
  return (
    <div className="wrapper">
      <div className="main"></div>
      <div className="content">
        <div id="section7" class="form-section">
          <div class="container">
            <h3 class="contact-header"></h3>
            <div class="form-container">
              <form
                action="https://formsubmit.co/astojanovic1900@gmail.com"
                method="POST"
              >
                <div class="first-row-form">
                  <input
                    class="input-form"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <input
                    class="input-form"
                    type="text"
                    name="phone"
                    placeholder="Number"
                  />
                </div>
                <input
                  class="input-form"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <textarea
                  class="input-form my-3"
                  type="text"
                  name="message"
                  placeholder="Write message"
                ></textarea>
                <input
                  type="hidden"
                  name="_next"
                  value="http://localhost:3000/thankyou"
                />
                <input type="hidden" name="_subject" value="New Email!" />
                <input type="hidden" name="_captcha" value="false" />
                <button type="submit" class="submit-btn">
                  Send
                </button>
              </form>
              {/* <div class="contact-paragraph">
                <div>
                  Vielen herzlichen Dank für Ihre Anfrage. Es freut uns ganz
                  besonders, dass Sie sich für unsere Leistungen interessieren.
                  Unser Team wird sich bei Ihnen so rasch wie möglich melden.
                  <br />
                  Bis dahin wünschen wir Ihnen alles, alles Gute!
                  <br />
                  Mit hochachtungsvollen Grüßen ITL Team
                </div>

                <ul class="ul-form-contanct">
                  <li class="form-contact-li">
                    <p class="contact-infos-a">
                      <i class="fas fa-map-marker style-fa"></i> Österreich,Wien
                    </p>
                    <p class="contact-infos-a">
                      <i class="fas fa-envelope style-fa"></i>
                      itl.transport24@gmail.com
                    </p>
                    <p class="contact-infos-a">
                      <i class="fas fa-phone style-fa"></i> +436608550424
                    </p>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <div className="img">
          <div className="social">
            <ShareButton
              url="http://localhost:3000/contact"
              round={true}
              size={50}
            />
            {/* <img className="pic" src="social-icon1.png"></img>
            <img className="pic" src="social-icon2.png"></img>
            <img className="pic" src="social-icon3.png"></img>
            <img className="pic" src="social-icon4.png"></img>
            <img className="pic" src="social-icon5.png"></img> */}
          </div>
          <img className="email-icon" src="email.svg"></img>
        </div>
      </div>
    </div>
  );
}
