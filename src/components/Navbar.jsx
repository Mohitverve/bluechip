import React, { useEffect, useState } from "react";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../assets/bluechip.avif";
import "../styles/navbar.css";

const items = [
  {
    key: "home",
    label: "CyberPower Home",
  },
  {
    key: "products",
    label: "CyberPower Products",
    children: [
      { key: "prod-ups", label: <a href="#ups">PFC Sinewave UPS</a> },
      { key: "prod-pdu", label: <a href="#pdu">PDU & ATS</a> },
      { key: "prod-access", label: <a href="#accessories">Professional</a> },
    ],
  },
];

export default function NavbarCyber() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`cpnav ${scrolled ? "cpnav--scrolled" : ""}`} role="banner">
      <nav className="cpnav__inner" aria-label="Primary">
        <a href="/" className="cpnav__brand" aria-label="Bluechip Home">
          <img src={logo} alt="Bluechip" className="cpnav__logo" width="128" height="36" />
        </a>

        <div className="cpnav__right">
          <Menu
            className="cpnav__menu"
            mode="horizontal"
            selectable={false}
            items={items}
            triggerSubMenuAction="hover"
            overflowedIndicator={null}
            disabledOverflow
          />
          <Button
            type="primary"
            shape="round"
            className="cpnav__cta"
            onClick={() =>
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
            }
          >
            Become a Partner
          </Button>

          <Button
            type="text"
            className="cpnav__hamburger"
            aria-label="Open Menu"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
          />
        </div>
      </nav>

      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        title={
          <div className="cpnav__drawerHead">
            <img src={logo} alt="Bluechip" className="cpnav__drawerLogo" width="110" height="30" />
          </div>
        }
      >
        <Menu
          mode="inline"
          items={items}
          selectable={false}
          className="cpnav__drawerMenu"
          onClick={() => setOpen(false)}
        />
        <Button
          type="primary"
          shape="round"
          block
          className="cpnav__drawerCta"
          onClick={() => setOpen(false)}
        >
          Become a Partner
        </Button>
      </Drawer>
    </header>
  );
}

