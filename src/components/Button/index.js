import React from "react";
import PropTypes from "prop-types";
import renderStyle from "./styles";

const Button = ({ text, variant, action }) => (
  <button type="button" className={renderStyle(variant)} onClick={action}>
    {text}
  </button>
);

Button.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.func,
};

export default Button;
