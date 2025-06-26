import React from "react";
import { Link } from "react-router";
import plantImg from "../../assets/extra-section/leaf animation.gif";
import { FaLinkedin, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content px-6 py-8 md:py-12 rounded-2xl mb-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Social */}
        <aside className="flex flex-col items-center sm:items-start gap-4">
          <div className="flex items-center gap-3">
            <img src={plantImg} alt="Plant Logo" className="w-18 h-18" />
            <div>
              <p className="text-2xl font-bold">
                Plant<span className="text-primary">Book</span>
              </p>
              <p className="text-sm">Tips & care since 1972</p>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 text-2xl mt-2">
            <a
              href="https://www.linkedin.com/in/tajuddin80"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/TajuddinCSE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://tajuddin80.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FaMedium />
            </a>
          </div>
        </aside>

        {/* Explore */}
       <nav className="flex flex-col text-center sm:text-left">
          <h6 className="footer-title">Explore</h6>
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/browsetips" className="link link-hover">Browse Tips</Link>
          <Link to="/sharetip" className="link link-hover">Share a Tip</Link>
        </nav>

        {/* Company */}
        <nav className="flex flex-col text-center sm:text-left">
          <h6 className="footer-title">Company</h6>
          <Link to="/aboutus" className="link link-hover">About Us</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press Kit</a>
        </nav>

        {/* Legal */}
     <nav className="flex flex-col text-center sm:text-left">
  <h6 className="footer-title">Legal</h6>
  <a className="link link-hover">Terms of Use</a>
  <a className="link link-hover">Privacy Policy</a>
  <a className="link link-hover">Cookie Policy</a>
</nav>

      </div>
    </footer>
  );
};

export default Footer;
