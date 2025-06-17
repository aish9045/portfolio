/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">&lt;Aishwary Jain/&gt;</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#work" className="footer__link">Projects</a>
                </li>

                
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/aishwary__jain__/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://x.com/Aishwar71726460?t=D4pD4ksXWVN6uQKIUhJvpw&s=08" className="footer__social-link" target="_blank">
                    <i className="bx bxl-twitter"></i>
                </a>

                <a href="https://github.com/aish9045" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Aishwary Jain. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer