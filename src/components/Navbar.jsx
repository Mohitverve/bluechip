import React, { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";
import "./../styles/navbar.css";
import logo from "../assets/bluechip.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { label: "Home", key: "home" },
    { label: "Products", key: "products" },
    
    { label: "Contact", key: "contact" },
  ];

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} role="banner">
      <nav className="navbar__inner" aria-label="Primary">
        {/* Logo (smaller + constrained) */}
        <a href="/" className="navbar__brand" aria-label="Bluechip Home">
          {/* width/height help CLS + performance */}
          <img
            src={logo}
            alt="Bluechip"
            className="navbar__logo"
            width="128"
            height="36"
            decoding="async"
          />
        </a>

        {/* Desktop menu + CTA */}
        <div className="navbar__right">
          <Menu
            mode="horizontal"
            items={menuItems}
            className="navbar__menu"
            selectable={false}
          />
          <Button
            type="primary"
            shape="round"
            className="navbar__cta"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
          >
            Get Started
          </Button>

          {/* Mobile trigger */}
          <Button
            type="text"
            className="navbar__hamburger"
            aria-label="Open Menu"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
          />
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="drawer__title">
            <img src={logo} alt="Bluechip" className="drawer__logo" width="110" height="30" />
          </div>
        }
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          onClick={() => setOpen(false)}
          className="drawer__menu"
        />
        <Button type="primary" shape="round" block className="drawer__cta" onClick={() => setOpen(false)}>
          Get Started
        </Button>
      </Drawer>
    </header>
  );
};

export default Navbar;
