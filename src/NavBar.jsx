import React from "react";

function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-transparent fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style={{ color: "white" }}>
            {"<"}4RIAN {">"}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#me" style={{ color: "white" }}>
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contacts" style={{ color: "white" }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
