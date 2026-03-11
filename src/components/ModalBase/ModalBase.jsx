import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: clamp(260px, 80vw, 360px);
  max-height: min(80vh, 600px);
  padding: clamp(8px, 4vw, 32px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 16px;
  overflow-y: auto;
`;

function ModalBase(props) {
  const {
    children,
    isOpen = false,
    isOutside = true,
    onClose,
    ...restProps
  } = props;

  if (!isOpen) return null;
  const handleClose = (event) => {
    if (event.target === event.currentTarget && isOutside) {
      onClose();
    }
  };

  return (
    <ModalWrapper onClick={handleClose} {...restProps}>
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>
  );
}

ModalBase.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  isOutside: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ModalBase;
