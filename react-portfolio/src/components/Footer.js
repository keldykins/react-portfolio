import React from "react";
import "./Footer.css";
// import { Button } from "./Button";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Links</h2>
            <a
              href="https://postimg.cc/2Vv64vPg"
              rel="noreferrer"
              target="_blank"
            >
              Resume
            </a>
            <a
              href="https://www.github.com/keldykins"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/keldan-cundy-501b71a1/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/mgc.wnd"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">Copyright ©2020 Keldan Cundy</small>
          <div class="social-icons">
            <a
              href="https://www.github.com/keldykins"
              rel="noreferrer"
              target="_blank"
              class="social-icon-link github"
              aria-label="GitHub"
            >
              <i class="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/keldan-cundy-501b71a1/"
              rel="noreferrer"
              target="_blank"
              class="social-icon-link linkedin"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
            <a
              href="https://www.instagram.com/mgc.wnd"
              rel="noreferrer"
              target="_blank"
              class="social-icon-link instagram"
              to="https://www.instagram.com/mgc.wnd"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
