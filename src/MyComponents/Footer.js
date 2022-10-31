import React from 'react'
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaPinterestP } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" full-footer">
      <div className="footer-call-to-action">
        <div className="footer-call-to-action-p1 footer-call-to-action-p">
          <h3>Want to see latest NFTs?</h3>
          <p>Lets move to the newsfeed section to see all the latest NFTs</p>
        </div>
        <div className="footer-call-to-action-p2 footer-call-to-action-p">

          <a className="btn btn-outline-light btn-lg " href="http://localhost:3000/explore">
            {/* <button className="btn btn-outline-light btn-lg " type="button"> */}
              Explore Now
            {/* </button> */}
          </a>
        </div>
      </div>
      <div className="above-footer">
        <div className="above-footer-p above-footer-p1">
          {/* <img src="" alt="" /> logo */}
          <h3 className="above-footer-p1-title">EmoPlace</h3>
          <p className="above-footer-p1-para">Emo Place mainly on emotional NFTs. Here you can mint and collect NFTs that you love.</p>
          <div className="above-footer-part1-2 ">
            <h3 className="above-footer-p2-title">Social Links</h3>
            <p className="above-footer-p2-para"><FaPinterestP className="footer-icons" />
              <FaFacebookF className="footer-icons" /><FaInstagram className="footer-icons" /><FaTiktok className="footer-icons" />
            </p>
          </div>
        </div>

        <div className="above-footer-p above-footer-p3">
          <h3 className="above-footer-p3-title">NFT Collections</h3>

          <ul>
            <li><a href="#">Sports NFTs</a></li>
            <li><a href="#">Gaming NFTs</a></li>
            <li><a href="#">Digital Arts</a></li>
            <li><a href="#">Photography</a></li>
          </ul>

        </div>
        <div className="above-footer-p above-footer-p4">
          <h3 className="above-footer-p4-title">Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

      </div>
      <hr />
      <div className="footer">
        Powered by EmoPlace
      </div>
    </footer>
  )
}

export default Footer
