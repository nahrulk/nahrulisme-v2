import React from "react";

import { navigation } from "@/app/constant/navigation.js";

const Header = () => {
  return (
    <>
      {/* <!--==================== HEADER ====================--> */}
      <header className="header" id="header">
        <nav className="nav container__custom">
          <a href="#" className="nav__logo">
            Nahrul K <i className="bx bxs-terminal"></i>
          </a>

          <div className="nav__menu">
            <ul className="nav__list">
              {navigation.map((item) => (
                <li className="nav__item" key={item.name}>
                  <a href={item.href} className="nav__link">
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a href="#" className="button nav__button">
            CONTACT ME
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
