import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: auto;
  max-width: 272px;
  margin-inline: 20px;
  ${({ $styles = "" }) => $styles}
`;

function ProductCardBase({ children, productKey, $styles = "", ...restProps }) {
  return (
    <ProductCardContainer id={productKey} $styles={$styles} {...restProps}>
      {children}
    </ProductCardContainer>
  );
}

ProductCardBase.propTypes = {
  children: PropTypes.node,
  productKey: PropTypes.string,
  $styles: PropTypes.string,
};

export default ProductCardBase;
