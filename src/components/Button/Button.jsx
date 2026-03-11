import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonElement = styled.button`
  cursor: pointer;
  ${({ $styles = "" }) => $styles}

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }

  &:active {
    transform: scale(0.95);
    transition: transform 0.3s;
  }
`;

function Button(props) {
  const { children, type = "button", $styles = "", ...restProps } = props;
  return (
    <ButtonElement type={type} $styles={$styles} {...restProps}>
      {children}
    </ButtonElement>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  $styles: PropTypes.string,
};

export default Button;
