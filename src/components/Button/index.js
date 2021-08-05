import React from "react";
import PropTypes from "prop-types";
import renderStyle from "./styles";

const Button = ({ text, style, action }) => (
  <button type="button" className={renderStyle(style)} onClick={action}>
    {text}
  </button>
);

Button.propTypes = {
  style: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.func,
};

export default Button;
