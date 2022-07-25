import 'animate.css';

function Header() {
  return (
    <div id="main-page">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/slide-woman.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="display-2">Book Your Flights</h5>
              <p className="lead">
                Some representative placeholder content for the first slide.
              </p>
              <button className="btn btn-lg btn-outline-primary">
                About us
              </button>

              <button
                className="btn btn-lg btn-outline-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
              >
                Register with us
              </button>

              <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabIndex="-1"
                id="offcanvasScrolling"
                aria-labelledby="offcanvasScrollingLabel"
              >
                <div className="offcanvas-header text-center">
                  <h5
                    className="offcanvas-title text-center p-2"
                    id="offcanvasScrollingLabel"
                  >
                    Register
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body">
                  <div>
                    <input
                      className="form-control mb-2"
                      placeholder="firstname"
                    />
                    <input
                      className="form-control mb-2"
                      placeholder="lastname"
                    />
                    <input
                      className="form-control mb-2"
                      type="email"
                      placeholder="email"
                    />
                    <input
                      className="form-control mb-2"
                      placeholder="address"
                    />
                    <input className="form-control mb-2" placeholder="city" />
                    <input
                      className="form-control mb-2"
                      placeholder="postal code"
                    />
                    <input
                      className="form-control mb-2"
                      placeholder="country"
                    />

                    <button className="btn btn-danger px-3 mt-3">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/slide-cocktail.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="display-2">Discounted flight deals</h5>
              <p className="lead">
                Some representative placeholder content for the second slide.
              </p>
              <button className="btn btn-lg btn-outline-primary">
                About us
              </button>
              <button className="btn btn-lg btn-outline-primary">
                Book a tour
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="intro container py-2">
        <article className="row align-items-center">
          <div className="col-md-7">
            <h2 className="mb-3">
              We Will Take You To The Top Destination In The World,{' '}
              <span className="bg-light">Explore With Us!</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              aperiam ab explicabo deleniti. Velit recusandae tenetur non in
              labore dicta quisquam ad at. Veritatis atque repudiandae
              voluptatem doloribus eos! At reiciendis soluta voluptates nisi
              tenetur quos minima obcaecati harum deserunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              porro itaque magni odit dignissimos accusamus maiores ipsam sequi,
              commodi dolor? Odio ut quo ullam velit ab delectus dolore. Dolor,
              nobis!
            </p>
          </div>
          <div className="col-md-5">
            <img className="img-thumbnail" src="/intro.jpg" alt="" />
          </div>
        </article>
      </section>

      <section className="counter container text-center py-5">
        <article className="row">
          <div className="col-md-3 col-sm-6  animate__animated animate__fadeInLeft animate__delay-2s">
            <i className="teme far fa-smile" />
            <h2>1000+</h2>
            <h4>Happy customers</h4>
          </div>
          <div className="col-md-3 col-sm-6  animate__animated animate__fadeInLeft animate__delay-3s">
            <i className=" teme fas fa-plane" />
            <h2>2901</h2>
            <h4>Tours and travellers</h4>
          </div>
          <div className="col-md-3 col-sm-6  animate__animated animate__fadeInLeft animate__delay-4s">
            <i className=" teme fas fa-globe-americas" />
            <h2>271</h2>
            <h4>Destinations</h4>
          </div>
          <div className="col-md-3 col-sm-6  animate__animated animate__fadeInLeft animate__delay-5s">
            <i className=" teme fas fa-clock" />
            <h2>
              15+ <small>years</small>
            </h2>
            <h4>Experience</h4>
          </div>
        </article>
      </section>

      <section className="plan py-5 bg-light text-white text-center">
        <article className="container">
          <h2 className="display-3 mb-3">How To Plan Your Trip</h2>
          <div className="row">
            <div className="col-md-4 ">
              <i className=" fas fa-map-marker-alt" />
              <h3 className="my-3">Pick destinations</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias ab labore quae molestiae! Recusandae officiis quia
                voluptatibus dolor explicabo, eligendi excepturi obcaecati
                inventore ex quod dignissimos aperiam? Officiis fuga aliquid
                veniam neque? Provident, soluta enim?
              </p>
            </div>
            <div className="col-md-4 teme">
              <i className="fas fa-calendar-alt" />
              <h3 className="my-3">Select date</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias ab labore quae molestiae! Recusandae officiis quia
                voluptatibus dolor explicabo, eligendi excepturi obcaecati
                inventore ex quod dignissimos aperiam? Officiis fuga aliquid
                veniam neque? Provident, soluta enim?
              </p>
            </div>
            <div className="col-md-4 teme">
              <i className="fas fa-gift" />
              <h3 className="my-3">Enjoy the trip</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias ab labore quae molestiae! Recusandae officiis quia
                voluptatibus dolor explicabo, eligendi excepturi obcaecati
                inventore ex quod dignissimos aperiam? Officiis fuga aliquid
                veniam neque? Provident, soluta enim?
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="packages container py-5">
        <article className="row">
          <div className="col-md-3 col-sm-6">
            <div className="card">
              <div className="price">
                <img className="card-img-top" src="/1.jpg" alt="" />
                <p>
                  <i className="fas fa-tags" />
                  &nbsp;240$
                </p>
              </div>
              <div className="card-body">
                <p className="lead">
                  <i className="fas fa-map-marker-alt" />
                  &nbsp;Destinations
                </p>
                <h3 className="card-title">Thailand</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  velit?
                </p>
                <p>
                  <i className="fas fa-clock" />
                  &nbsp;Duration{' '}
                  <span className="font-weight-bold">7 days</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card">
              <div className="price">
                <img className="card-img-top" src="/2.jpg" alt="" />
                <p>
                  <i className="fas fa-tags" />
                  &nbsp;240$
                </p>
              </div>
              <div className="card-body">
                <p className="lead">
                  <i className="fas fa-map-marker-alt" />
                  &nbsp;Destinations
                </p>
                <h3 className="card-title">Bali</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  velit?
                </p>
                <p>
                  <i className="fas fa-clock" />
                  &nbsp;Duration{' '}
                  <span className="font-weight-bold">7 days</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card">
              <div className="price">
                <img className="card-img-top" src="/venice.jpg" alt="" />
                <p>
                  <i className="fas fa-tags" />
                  &nbsp;240$
                </p>
              </div>
              <div className="card-body">
                <p className="lead">
                  <i className="fas fa-map-marker-alt" />
                  &nbsp;Destinations
                </p>
                <h3 className="card-title">Croatia</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  velit?
                </p>
                <p>
                  <i className="fas fa-clock" />
                  &nbsp;Duration{' '}
                  <span className="font-weight-bold">7 days</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card">
              <div className="price">
                <img className="card-img-top" src="/4.jpg" alt="" />
                <p>
                  <i className="fas fa-tags" />
                  &nbsp;240$
                </p>
              </div>
              <div className="card-body">
                <p className="lead">
                  <i className="fas fa-map-marker-alt" />
                  &nbsp;Destinations
                </p>
                <h3 className="card-title">Maldivi</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  velit?
                </p>
                <p>
                  <i className="fas fa-clock" />
                  &nbsp;Duration{' '}
                  <span className="font-weight-bold">7 days</span>
                </p>
              </div>
            </div>
          </div>
          {/* <button className="btn btn-danger btn-lg mx-auto mt-4">
            View all packages
          </button>{' '} */}
        </article>
        <button
          type="button"
          className="btn btn-danger view mt-5 text-align-center"
        >
          View all packages
        </button>
      </section>

      <section className="destinations container py-5 text-center">
        <span className="display-4 bg-light p-1 px-3 ">
          Popular destinations
        </span>
        <p className="lead m-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          obcaecati laborum laboriosam vero quasi aut illum magni dolores ea
          blanditiis!
        </p>
        <article className="row">
          <div className="col-md-3 col-sm-6">
            <h4>Italy</h4>
            <img className="img-fluid" src="/italy.jpg" alt="" />
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Malta</h4>
            <img className="img-fluid" src="/malta.jpg" alt="" />
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Greece</h4>
            <img className="img-fluid" src="/greece.jpg" alt="" />
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Croatia</h4>
            <img className="img-fluid" src="/malta.jpg" alt="" />
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Header;
