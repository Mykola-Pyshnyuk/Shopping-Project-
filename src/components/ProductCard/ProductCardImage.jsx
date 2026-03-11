import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 272px;
  object-fit: cover;
  border-radius: clamp(6px, 1.5vw, 12px);
  ${({ $styles = "" }) => $styles};
`;

function ProductCardImage(props) {
  const { $styles = "", src, alt, ...restProps } = props;
  return <Image $styles={$styles} {...restProps} src={src} alt={alt} />;
}

ProductCardImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  $styles: PropTypes.string,
};

export default ProductCardImage;
