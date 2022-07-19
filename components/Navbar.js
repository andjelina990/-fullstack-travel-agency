import Link from 'next/link';
import React from 'react';

function Navbar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item bg-danger rounded-pill px-3 ">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li class="nav-item">
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

            <ul class="d-flex list-unstyled my-1">
              <li class="nav-item">
                <Link href="/login">
                  <a className="nav-link">LOGIN</a>
                </Link>
              </li>
              <li class="nav-item">
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
