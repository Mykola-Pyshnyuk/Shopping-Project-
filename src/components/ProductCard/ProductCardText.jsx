import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.p`
  font-family: "Causten", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #807d7e;
  margin: 0;
`;

function ProductCardText({ children }) {
  return <Text>{children}</Text>;
}

ProductCardText.propTypes = {
  children: PropTypes.node,
};

export default ProductCardText;
