import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function ButtonClose(props) {
  const { onClose, ...restProps } = props;
  return (
    <Button
      data-testid="button-close"
      onClick={onClose}
      {...restProps}
      $styles="position: absolute; top: 20px; right: 20px; border: none; background-color: transparent;"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.75 0.75L0.75 14.75M14.75 14.75L0.750001 0.750013"
          stroke="#3C4242"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </Button>
  );
}

ButtonClose.propTypes = {
  onClose: PropTypes.func,
};

export default ButtonClose;
