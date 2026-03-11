import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  ${({ $styles = "" }) => $styles}
`;
function ButtonWrapper(props) {
  const { $styles = "", children, ...restProps } = props;
  return (
    <Wrapper $styles={$styles} {...restProps}>
      {children}
    </Wrapper>
  );
}

ButtonWrapper.propTypes = {
  $styles: PropTypes.string,
  children: PropTypes.node,
};

export default ButtonWrapper;
