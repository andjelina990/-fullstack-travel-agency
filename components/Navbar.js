import Link from 'next/link';

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid d-flex justify-content-between">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul clasName="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item bg-danger rounded-pill px-3 ">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/destinations/destinations">
                  <a className="nav-link list-unstyled">Destinations</a>
                </Link>
              </li>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-transparent dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pick a country
                </button>
                <ul className="dropdown-menu">
                  <Link href="/destinations/1">
                    <a className="dropdown-item">Thailand</a>
                  </Link>

                  <Link href="/destinations/2">
                    <a className="dropdown-item">Bali</a>
                  </Link>
                  <Link href="/destinations/3">
                    <a className="dropdown-item">Croatia</a>
                  </Link>
                  <Link href="/destinations/4">
                    <a className="dropdown-item">Maldivi</a>
                  </Link>
                </ul>
              </div>
              <li className="nav-item">
                <Link href="/destinations/wishListDestination">
                  <a className="nav-link">Wish list</a>
                </Link>
              </li>
            </ul>
            <li className="nav-item list-unstyled">
              {props.user && props.user.username}
            </li>

            <ul className="d-flex list-unstyled my-1">
              <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link">LOGIN</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/register">
                  <a className="nav-link">REGISTER</a>
                </Link>
              </li>
              <li className="nav-item">
                {' '}
                <Link href="/users/private-profile">
                  <a className="nav-link">PROFILE</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/logout">
                  <a className="nav-link">LOG OUT</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">CONTACT</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
