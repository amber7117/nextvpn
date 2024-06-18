import React from "react";
import PropTypes from "prop-types";

const ButtonOutline = ({ children, href, target, rel }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange"
    >
      {children}
    </a>
  );
};

ButtonOutline.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
};

ButtonOutline.defaultProps = {
  target: "_self",
  rel: "",
};

export default ButtonOutline;
