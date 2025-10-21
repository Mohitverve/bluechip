import React from "react";
import "../styles/footer.css";

// Inline, lightweight social icons (no external libs)
const Icon = {
  X: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.2 3H21l-6.5 7.4L22 21h-5.8l-4.2-5-4.8 5H3l7-7.7L2.5 3H8l3.8 4.5L18.2 3z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5C0 2.12 1.12 1 2.5 1S4.98 2.12 4.98 3.5zM.22 8.1h4.56V24H.22V8.1zM8.66 8.1h4.37v2.16h.06c.61-1.16 2.11-2.39 4.34-2.39 4.64 0 5.5 3.05 5.5 7.02V24h-4.56v-7.54c0-1.8-.03-4.12-2.51-4.12-2.51 0-2.9 1.96-2.9 3.99V24H8.66V8.1z"/>
    </svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.3.5A3.1 3.1 0 0 0 .5 6.2C0 8.2 0 12 0 12s0 3.8.5 5.8a3.1 3.1 0 0 0 2.2 2.2c2 .5 9.3.5 9.3.5s7.3 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2c.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.6 15.5V8.5l6.2 3.5-6.2 3.5z"/>
    </svg>
  ),
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft">
      <div className="ft__container">
        {/* Brand / About */}
        <div className="ft__brand">
          <a className="ft__logo" href="/" aria-label="Bluechip home">
            {/* simple text mark; replace with <img src="..."> if needed */}
            <span className="ft__logoMark">B</span>
            <span className="ft__logoText">BLUECHIP</span>
          </a>
          <p className="ft__tagline">
            Reliable distribution of CyberPower solutions—expert support, fast delivery,
            and award-winning service across Australia.
          </p>

          <div className="ft__social" aria-label="Social links">
            <a href="https://x.com" aria-label="X (Twitter)">
              <Icon.X />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Icon.LinkedIn />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <Icon.YouTube />
            </a>
          </div>
        </div>

        {/* Product */}
        <nav className="ft__col" aria-label="Product">
          <h4>Product</h4>
          <ul>
            <li><a href="#pfc">PFC SineWave UPS</a></li>
            <li><a href="#pro">Professional Series</a></li>
            <li><a href="#pdu">PDU & ATS</a></li>
            <li><a href="#mgmt">Remote Management</a></li>
          </ul>
        </nav>

        {/* Solutions */}
        <nav className="ft__col" aria-label="Solutions">
          <h4>Solutions</h4>
          <ul>
            <li><a href="#msp">MSPs & Resellers</a></li>
            <li><a href="#schools">Education</a></li>
            <li><a href="#smb">SMB & Enterprise</a></li>
            <li><a href="#dc">Server Rooms & DC</a></li>
          </ul>
        </nav>

        {/* Company */}
        <nav className="ft__col" aria-label="Company">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#press">Press</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Newsletter */}
        <div className="ft__col ft__nl">
          <h4>Get updates</h4>
          <p className="ft__nlText">
            Join our newsletter for product news, pricing updates, and partner offers.
          </p>
          <form
            className="ft__form"
            onSubmit={(e) => {
              e.preventDefault();
              // Hook this to your backend / marketing list
              alert("Thanks! We’ll be in touch.");
            }}
          >
            <input
              type="email"
              className="ft__input"
              placeholder="your@email.com"
              aria-label="Email address"
              required
            />
            <button className="ft__btn" type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <hr className="ft__rule" />

      {/* Bottom bar */}
      <div className="ft__bottom">
        <p>© {year} Bluechip IT. All rights reserved.</p>
        <ul className="ft__legal">
          <li><a href="#privacy">Privacy</a></li>
          <li><a href="#terms">Terms</a></li>
          <li><a href="#cookies">Cookies</a></li>
        </ul>
      </div>

      {/* Back to top */}
      <a className="ft__backTop" href="#top" aria-label="Back to top">↑</a>
    </footer>
  );
}
