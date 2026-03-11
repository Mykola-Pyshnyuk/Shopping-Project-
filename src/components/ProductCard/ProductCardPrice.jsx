import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Price = styled.p`
  font-family: "Causten", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #3c4242;
  margin: 0;
  padding-bottom: 5px;
`;

function ProductCardPrice({ children }) {
  return <Price>{children}</Price>;
}

ProductCardPrice.propTypes = {
  children: PropTypes.node,
};

export default ProductCardPrice;
