import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const Navbar = () => {

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light" id="Navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#Header">
            <img width="85px" src="images/icon.jpeg" alt="" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#Header">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#LeftSide">Future</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#RightSide">Concept</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#Overview">Overview</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#Gallery">Gallery</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
