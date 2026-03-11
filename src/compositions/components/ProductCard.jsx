import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  ProductCardBase,
  ProductCardImage,
  ProductCardTitle,
  ProductCardPrice,
  ProductCardText,
} from "../../components/ProductCard/index.js";
import { Button, ButtonClose } from "../../components/Button/index.js";

import {
  actionAddProducts,
  actionDeleteProducts,
} from "../../store/slices/store.slice.js";

import { selectorFavorites } from "../../store/selectors.js";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px 10px 0 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Svg = styled.svg(
  ({ $isFavorites }) => `
stroke: ${$isFavorites ? "#d20909" : "#272a2a"};
fill: ${$isFavorites ? "#d20909" : "#fff"};

path {
    transition: 0.7s;
  }

&:hover path {
    transition: 0.5s;
    stroke: #d20909;
    fill: #d20909;
  }
`,
);

function ProductCard(props) {
  const {
    productInfo,
    showFavorites = false,
    showAddProduct = false,
    showDeleteProduct = false,
    onHandleAddModal,
    onHandleModalDelete,
  } = props;

  const dispatch = useDispatch();

  const cardFavorites = useSelector(selectorFavorites);

  const [isFavorites, setFavorites] = useState(false);

  useEffect(() => {
    const check = cardFavorites.find((item) => item.key === productInfo.key);
    if (check) {
      setFavorites(true);
    } else {
      setFavorites(false);
    }
  }, [cardFavorites, productInfo.key]);

  function addProductFavorites() {
    dispatch(
      actionAddProducts({ productInfo, storageName: "productFavorites" }),
    );
  }

  function deleteProductFavorites() {
    dispatch(
      actionDeleteProducts({
        productKey: productInfo.key,
        storageName: "productFavorites",
      }),
    );
  }

  function toggleFavoritesProduct() {
    if (isFavorites) {
      deleteProductFavorites();
    } else {
      addProductFavorites();
    }
  }

  return (
    <>
      <ProductCardBase
        $styles="position: relative;"
        productKey={productInfo.key}
      >
        {showDeleteProduct && <ButtonClose onClose={onHandleModalDelete} />}
        {showFavorites && (
          <Button
            $styles="border: none; border-radius: 100%;   width: 28px; height: 28px; position: absolute; top: 15px; right: 15px; border-radius: 100%; background-color: #fff; display: flex; justify-content: center; align-items: center;"
            onClick={toggleFavoritesProduct}
          >
            <Svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              $isFavorites={isFavorites}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.71977 2.71206C6.34495 1.10986 4.05234 0.678871 2.32979 2.14601C0.607228 3.61314 0.364716 6.06612 1.71745 7.80131C2.84216 9.244 6.24591 12.2867 7.36148 13.2716C7.48629 13.3817 7.54869 13.4368 7.62148 13.4585C7.68502 13.4774 7.75453 13.4774 7.81806 13.4585C7.89085 13.4368 7.95326 13.3817 8.07807 13.2716C9.19363 12.2867 12.5974 9.244 13.7221 7.80131C15.0748 6.06612 14.8619 3.59771 13.1098 2.14601C11.3576 0.694304 9.0946 1.10986 7.71977 2.71206Z"
                strokeWidth="1.26066"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </Button>
        )}
        <ProductCardImage
          src={`/ProductImages/${productInfo.image}`}
          alt={productInfo.name}
        />
        <Container>
          <Wrapper>
            <ProductCardTitle>{productInfo.name}</ProductCardTitle>
            <ProductCardText>{productInfo.brand}</ProductCardText>
          </Wrapper>
          <ProductCardPrice>${productInfo.price}</ProductCardPrice>
        </Container>

        {showAddProduct && (
          <Button
            $styles="background-color: #1653d7; color: #fff; padding: 12px 20px; border-radius: 10px; margin-right: 10px; border: none; margin-top: 10px; &:hover {background-color: #320dd6; color: #fff; } &:active {background-color: #260d94; color: #fff; }"
            onClick={onHandleAddModal}
          >
            Add to cart
          </Button>
        )}
      </ProductCardBase>
    </>
  );
}

ProductCard.propTypes = {
  productInfo: PropTypes.object,
  showAddProduct: PropTypes.bool,
  showDeleteProduct: PropTypes.bool,
  showFavorites: PropTypes.bool,
  onHandleAddModal: PropTypes.func,
  onHandleModalDelete: PropTypes.func,
};

export default ProductCard;
