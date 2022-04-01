import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";


const Footer = () => {
  return (
    <>
        <div className="container-fluid" id="Footer">
            <div className="row">
                <div className="col-md-12 text-center mt-5">
                    <img src="images/37296cc26cc11a0fe94853b94e0ea48f.png" alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ul className='text-primary mt-5 mb-5'>
                        <li><BsFacebook /></li>
                        <li><AiFillInstagram /></li>
                        <li><AiFillTwitterCircle /></li>
                        <li><BsLinkedin /></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
