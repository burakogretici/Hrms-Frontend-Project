import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <a href="/#" className="logo">
           <ins>Hrms by Burak Öğretici</ins>
          </a>
          <div className="footer-menu">
            <nav>
              <h5>Community</h5>
              <ul>
                <li>
                  <a href="/#">About</a>
                </li>
                <li>
                  <a href="https://github.com/burakogreticii">GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/burak-%C3%B6%C4%9Fretici-2a76481bb/">Linkedin</a>
                </li>
              </ul>
            </nav>
            <nav>
            <h5>Starting</h5>
              <ul>
                <li>
                  <a href="/#">Promotion</a>
                </li>
                <li>
                  <a href="/#">Contact</a>
                </li>
                <li>
                  <a href="/#">Career</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2021 <b>Burak Öğretici</b>. All rights reserved.
          </p>
          <nav className="footer-menu">
            <ul>
              <li>
                <a href="/#">Usage Terms</a>
              </li>
              <li>
                <a href="/#">Privacy Policy</a>
              </li>
              <li>
                <a href="/#">Security</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}