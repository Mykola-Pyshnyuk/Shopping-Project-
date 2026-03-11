import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  ${({ $styles = "" }) => $styles}
`;
const ModalTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  padding-inline: 10px;
  text-wrap: balance;
  color: #191919;
  margin: 0;
  ${({ $stylesTitle = "" }) => $stylesTitle}
`;

function ModalHeader(props) {
  const { children, headerContent, $stylesTitle = "", ...restProps } = props;
  return (
    <Header {...restProps}>
      <ModalTitle $stylesTitle={$stylesTitle}>{headerContent}</ModalTitle>
      {children}
    </Header>
  );
}

ModalHeader.propTypes = {
  children: PropTypes.node,
  $styles: PropTypes.string,
  headerContent: PropTypes.string,
};

export default ModalHeader;
