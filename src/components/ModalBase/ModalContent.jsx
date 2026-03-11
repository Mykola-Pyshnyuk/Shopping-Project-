import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ModalText = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #7f7f7f;
  margin: 0;
  ${({ $stylesContent = "" }) => $stylesContent}
`;

function ModalContent(props) {
  const { content, $stylesContent = "" } = props;
  return <ModalText $stylesContent={$stylesContent}>{content}</ModalText>;
}

ModalContent.propTypes = {
  children: PropTypes.node,
  $styles: PropTypes.string,
  $stylesContent: PropTypes.string,
  content: PropTypes.string,
};

export default ModalContent;
