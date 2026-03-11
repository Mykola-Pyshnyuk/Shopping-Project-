import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  ModalBase,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from "../../components/ModalBase/index.js";

import { Button, ButtonClose } from "../../components/Button/index.js";

import { actionAddProducts } from "../../store/slices/store.slice.js";

function ModalAddProduct(props) {
  const { isOpen, onClose, isOutside, productInfo } = props;

  const dispatch = useDispatch();

  function addProduct() {
    dispatch(
      actionAddProducts({
        productInfo: productInfo,
        storageName: "productShopping",
      }),
    );
    onClose();
  }

  return (
    <ModalBase
      data-testid="modal-add-product"
      isOpen={isOpen}
      onClose={onClose}
      isOutside={isOutside}
    >
      <ButtonClose onClose={onClose} />

      <ModalHeader
        headerContent={"Add Product" + " " + productInfo.name}
        $styles=""
        $stylesTitle="padding-bottom: 32px;"
      ></ModalHeader>
      <ModalContent
        content={
          "Brand: " + productInfo.brand + " - " + "Price: $" + productInfo.price
        }
        $styles=""
        $stylesContent="margin-bottom: 32px;"
      ></ModalContent>

      <ModalFooter $styles="display: flex; justify-content: center; width: auto;">
        <Button
          onClick={addProduct}
          $styles="background-color: #8A33FD; 
            font-family: 'Roboto', sans-serif; 
            font-weight: 500; 
            font-size: 16px; 
            text-align: center; 
            color: #fff; 
            padding: 16px 30px; 
            border-radius: 8px;
            border: none;"
        >
          ADD TO CART
        </Button>
      </ModalFooter>
    </ModalBase>
  );
}

ModalAddProduct.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  isOutside: PropTypes.bool,
  productInfo: PropTypes.object,
};

export default ModalAddProduct;
