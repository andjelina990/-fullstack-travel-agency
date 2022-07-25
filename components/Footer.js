function Footer() {
  return (
    <div>
      <footer className="bg-dark py-5">
        <article className="container">
          <div className="row">
            <div className="col-md-3">
              <h4>Adress</h4>
              <ul className="list-unstyled">
                <li>Location: 1234 lock, Charlotte</li>
                <li>Phone: +123 456 789</li>
                <li>Email: info@gmail.com</li>
                <li>Fax: +123 456 789</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>About</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                similique blanditiis, facilis non omnis quas!
              </p>
              <ul className="list-unstyled d-flex socials">
                <li>
                  <img src="/facebook.png" alt="" />
                </li>
                <li>
                  <img src="/google.png" alt="" />
                </li>
                <li>
                  <img src="/linkedin.png" alt="" />
                </li>
                <li>
                  <img src="/youtube.png" alt="" />
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Travel places</h4>
              <ul className="list-unstyled">
                <li>Greece</li>
                <li>Malta</li>
                <li>Croatia</li>
                <li>Italy</li>
                <li>Bulgaria</li>
                <li>Montenegro</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Newsletter</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam, eligendi?
              </p>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>
        </article>
      </footer>
    </div>
  );
}

export default Footer;
