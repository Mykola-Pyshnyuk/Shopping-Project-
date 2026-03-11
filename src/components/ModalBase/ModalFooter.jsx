import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ $styles = "" }) => $styles}
`;

function ModalFooter(props) {
  const { children, $styles = "", ...restProps } = props;
  return (
    <Footer $styles={$styles} {...restProps}>
      {children}
    </Footer>
  );
}

ModalFooter.propTypes = {
  children: PropTypes.node,
  $styles: PropTypes.string,
};

export default ModalFooter;
