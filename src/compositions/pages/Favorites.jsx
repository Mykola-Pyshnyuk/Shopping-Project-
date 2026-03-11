import React, { useEffect } from "react";
import styled from "styled-components";
import ProductCardList from "../components/ProductCardList.jsx";
import { useSelector, useDispatch } from "react-redux";
import { selectorFavorites } from "../../store/selectors.js";
import { actionGetProductsStorage } from "../../store/slices/store.slice.js";

const Title = styled.h2`
  font-family: "Mintaka", sans-serif;
  font-weight: 400;
  font-size: 28px;
  text-align: center;
  color: #3c4242;
`;

const Favorites = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectorFavorites);

  useEffect(() => {
    dispatch(actionGetProductsStorage("productFavorites"));
  }, [dispatch]);

  return (
    <>
      <Title>Кількість продуктів у закладках: {products.length}</Title>
      <ProductCardList products={products} showFavorites={true} />
    </>
  );
};

export default Favorites;
