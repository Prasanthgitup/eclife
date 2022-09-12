import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold fs-4" href="#">
            ECFILE
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                GST Registration
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Company Registration
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Fssai
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Trademark Registration
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Software
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
