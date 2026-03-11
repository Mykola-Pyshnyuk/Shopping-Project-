import React, { useState, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import ModalAddProduct from "./ModalAddProduct.jsx";
import ModalDeleteProduct from "./ModalDeleteProduct.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  actionIsModalAddProduct,
  actionIsModalDeleteProduct,
} from "../../store/slices/store.slice.js";
import {
  selectorIsModalAddProduct,
  selectorIsModalDeleteProduct,
} from "../../store/selectors";
import { Context } from "../../context/index";

const ProductCardContainer = styled.div`
  display: ${({ $isCartListStyle }) => ($isCartListStyle ? "grid" : "flex")};

  ${({ $isCartListStyle }) =>
    $isCartListStyle
      ? `
    grid-template-columns: repeat(auto-fit, minmax(clamp(180px, 18vw, 280px), 1fr));
    gap: 24px;
    
  `
      : `
    flex-direction: column;
    gap: 16px;
  `}

  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
`;

function ProductCardList(props) {
  const { products, ...rest } = props;

  const [productInfo, setProductInfo] = useState(null);

  const isModalAddProduct = useSelector(selectorIsModalAddProduct);
  const isModalDeleteProduct = useSelector(selectorIsModalDeleteProduct);

  const dispatch = useDispatch();

  function handleAddModal(productInfo = null) {
    return () => {
      if (productInfo) {
        setProductInfo(productInfo);
        dispatch(actionIsModalAddProduct());
        document.body.style.overflow = "hidden";
      } else {
        dispatch(actionIsModalAddProduct());
        document.body.style.overflow = "unset";
      }
    };
  }

  function handleModalDelete(productInfo = null) {
    return () => {
      if (productInfo) {
        setProductInfo(productInfo);
        dispatch(actionIsModalDeleteProduct());
        document.body.style.overflow = "hidden";
      } else {
        dispatch(actionIsModalDeleteProduct());
        document.body.style.overflow = "unset";
      }
    };
  }

  const context = useContext(Context);

  const { isCartListStyle } = context;

  return (
    <>
      <ProductCardContainer $isCartListStyle={isCartListStyle}>
        {products.map((productInfo) => (
          <ProductCard
            key={productInfo.key}
            productInfo={productInfo}
            onHandleAddModal={handleAddModal(productInfo)}
            onHandleModalDelete={handleModalDelete(productInfo)}
            {...rest}
          />
        ))}
      </ProductCardContainer>

      {productInfo && (
        <>
          <ModalDeleteProduct
            isOpen={isModalDeleteProduct}
            onClose={handleModalDelete()}
            productInfo={productInfo}
          />

          <ModalAddProduct
            headerContent={"Add Product" + " " + productInfo.name}
            content={
              "Brand: " +
              productInfo.brand +
              " - " +
              "Price: $" +
              productInfo.price
            }
            isOpen={isModalAddProduct}
            onClose={handleAddModal()}
            productInfo={productInfo}
          />
        </>
      )}
    </>
  );
}

ProductCardList.propTypes = {
  products: PropTypes.array,
};

export default ProductCardList;
