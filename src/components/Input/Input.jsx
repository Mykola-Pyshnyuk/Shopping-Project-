import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputComponent = styled.input`
  border: none;
  border-bottom: 1px solid #3c4242;
  outline: none;
  font-family: "Causten", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #3c4242;
  padding-bottom: 4px;
  margin-bottom: 10px;
  width: 100%;
  ${({ $styles = "" }) => $styles};

  &::placeholder {
    color: #817277;
  }

  &:hover {
    border-bottom: 1px solid #5cabab;
  }

  &:focus {
    border-bottom: 1px solid #237c7c;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px 0 5px 2px;
  width: 100%;
`;

const Error = styled.div`
  color: red;
  font-size: 14px;
`;

export const InputName = styled.p`
  font-size: 14px;
  margin: 5px;
`;

function Input(props) {
  const {
    label = "",
    name = "",
    type = "text",
    $styles = "",
    isError,
    errorMessage,
    ...restProps
  } = props;

  return (
    <Label>
      <InputName>{label}</InputName>
      <InputComponent
        name={name}
        type={type}
        $styles={$styles}
        {...restProps}
      />
      {isError && <Error>{errorMessage}</Error>}
    </Label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  $styles: PropTypes.string,
};

export default Input;
