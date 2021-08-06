import React from "react";
import PropTypes from "prop-types";
import renderStyle from "./styles";
import { Link } from "react-router-dom";

const Anchor = ({ text, variant, route }) => (
  <Link className={renderStyle(variant)} to={route}>
    {text}
  </Link>
);

Anchor.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  route: PropTypes.string,
};

export default Anchor;
