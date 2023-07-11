/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({ property1, className }) => {
  return (
    <div className={`component ${className}`}>
      <p className={`web-development ${property1}`}>
        Web Development
        <br />
        digital Marketing
        <br />
        re-branding
        <br />
        social Media Management
        <br />
        graphic Designing
      </p>
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["frame-1", "frame-5", "frame-2", "frame-3", "frame-4"]),
};
