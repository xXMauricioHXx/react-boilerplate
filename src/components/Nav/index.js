import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { renderStyle, burgerIcon } from "./styles";

const renderItems = (items) => {
  return items.map(({ text, icon, route }) => (
    <NavLink
      className="hover:bg-gray-200 hover:text-gray-700 flex items-center px-8 py-5 text-gray-700 border-gray-700"
      to={route}
      activeClassName="bg-gray-200"
    >
      {icon}
      <span className="mx-4 font-medium">{text}</span>
    </NavLink>
  ));
};

const Nav = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`sm:flex-row md:inset-0 only-transition ${
          isOpen ? "in" : "out"
        } absolute flex flex-col w-full transition`}
      >
        <div className={renderStyle(isOpen)} onClick={() => setIsOpen(!isOpen)}>
          {burgerIcon}
        </div>
        <div className="md:w-64 w-full h-screen pt-5 bg-gray-900">
          <nav className="mt-10">{renderItems(items)}</nav>
        </div>
      </div>
    </>
  );
};

Nav.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Nav;
