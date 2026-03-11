import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkElement = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  ${({ $styles = "" }) => $styles}
`;

function ButtonLink(props) {
  const { children, to, $styles = "", ...restProps } = props;
  return (
    <LinkElement to={to} $styles={$styles} {...restProps}>
      {children}
    </LinkElement>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  $styles: PropTypes.string,
};

export default ButtonLink;
