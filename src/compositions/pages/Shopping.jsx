import React, { useEffect } from "react";
import styled from "styled-components";
import ProductCardList from "../components/ProductCardList.jsx";
import ShoppingForm from "../components/ShoppingForm/ShoppingForm.jsx";
import { useSelector, useDispatch } from "react-redux";
import { selectorShopping } from "../../store/selectors.js";
import { actionGetProductsStorage } from "../../store/slices/store.slice.js";

const Title = styled.h2`
  font-family: "Mintaka", sans-serif;
  font-weight: 400;
  font-size: 28px;
  text-align: center;
  color: #3c4242;
`;
const Shopping = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectorShopping);

  useEffect(() => {
    dispatch(actionGetProductsStorage("productShopping"));
  }, [dispatch]);

  return (
    <>
      <Title>
        Кількість продуктів в корзині: {products.length}, на суму $
        {products.reduce((acc, product) => acc + product.price, 0)}
      </Title>
      <ShoppingForm />
      <ProductCardList products={products} showDeleteProduct={true} />
    </>
  );
};

export default Shopping;
