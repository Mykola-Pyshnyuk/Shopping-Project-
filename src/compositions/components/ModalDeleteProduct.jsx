import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import {
  Button,
  ButtonClose,
  ButtonWrapper,
} from "../../components/Button/index.js";
import {
  ModalBase,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from "../../components/ModalBase/index.js";
import { ProductCardImage } from "../../components/ProductCard/index.js";

import { actionDeleteProducts } from "../../store/slices/store.slice.js";

function ModalDeleteProduct(props) {
  const { isOpen, onClose, isOutside, productInfo } = props;

  const dispatch = useDispatch();

  function deleteProduct() {
    dispatch(
      actionDeleteProducts({
        productKey: productInfo.key,
        storageName: "productShopping",
      }),
    );
    onClose();
  }

  return (
    <ModalBase
      data-testid="modal-delete-product"
      isOpen={isOpen}
      onClose={onClose}
      isOutside={isOutside}
    >
      <ButtonClose onClose={onClose} />
      <ProductCardImage
        src={`/ProductImages/${productInfo.image}`}
        alt={productInfo.name}
        $styles=" width: 50%;"
      />
      <ModalHeader
        headerContent={"Delete Product" + " " + productInfo.name}
        $styles=""
        $stylesTitle="padding-bottom: 24px;"
      ></ModalHeader>

      <ModalContent
        content={
          "Brand: " + productInfo.brand + " - " + "Price: $" + productInfo.price
        }
        $styles=""
        $stylesContent="margin-bottom: 24px"
      ></ModalContent>
      <ModalFooter $styles="display: flex; justify-content: space-between; width: 100%;">
        <ButtonWrapper $styles="">
          <Button
            onClick={onClose}
            $styles="background-color: #8A33FD; 
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 16px;
            text-align: center;
            color: #fff;
            padding: 8px 16px; 
            border-radius: 8px;
            border: none;"
          >
            NO, CANCEL
          </Button>

          <Button
            onClick={deleteProduct}
            $styles="background-color: #fff;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 16px;
            text-align: center;
            color: #8A33FD; 
            padding: 8px 16px; 
            border-radius: 8px; 
            border: 1px solid #3c4242"
          >
            YES, DELETE
          </Button>
        </ButtonWrapper>
      </ModalFooter>
    </ModalBase>
  );
}

ModalDeleteProduct.propTypes = {
  isOpen: PropTypes.bool,
  isOutside: PropTypes.bool,
  onClose: PropTypes.func,
  productInfo: PropTypes.object,
};

export default ModalDeleteProduct;
