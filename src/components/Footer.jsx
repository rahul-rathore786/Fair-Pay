import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaGithub,
  FaDiscord,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top gradient border */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-1 md:col-span-1">
            <div className="font-display font-bold text-white text-2xl mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                FairPay
              </span>
            </div>
            <p className="text-sm mb-6">
              Secure blockchain-based platform for freelancers and clients.
              Connecting talent with opportunities through smart contracts.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://github.com"
                aria-label="GitHub"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://discord.com"
                aria-label="Discord"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaDiscord className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="font-medium text-white text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/post-job"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Post a Job
                </Link>
              </li>
              <li>
                <Link
                  to="/freelancers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Find Talent
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/docs"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/api"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  to="/guides"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {currentYear} FairPay. All rights reserved.
          </p>

          <div className="flex space-x-6 text-sm">
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-600">
          <p className="flex items-center justify-center">
            Built with <FaHeart className="text-red-500 mx-1" /> on the Ethereum
            blockchain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
