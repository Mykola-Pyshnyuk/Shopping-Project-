import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Title = styled.h3`
  font-family: "Causten", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #3c4242;
  margin: 0;
  padding-bottom: 5px;
`;

function ProductCardTitle({ children }) {
  return <Title>{children}</Title>;
}

ProductCardTitle.propTypes = {
  children: PropTypes.node,
};

export default ProductCardTitle;
