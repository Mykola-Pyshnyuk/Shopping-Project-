import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { ButtonLink } from "../../components/Button";

import {
  selectorFavoritesCount,
  selectorShoppingCount,
} from "../../store/selectors";

import { actionGetProductsStorage } from "../../store/slices/store.slice";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-radius: 16px;
`;

const HeaderTitle = styled.p`
  font-family: "Mintaka", sans-serif;
  font-weight: 400;
  font-size: 32px;
  text-align: center;
  color: #3c4242;
  padding-left: 14px;
`;

const HeaderIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding-right: 14px;
`;

const SvgFavorites = styled.svg`
  path {
    transition: 1.5s;
  }
  &:hover path {
    transition: 0.7s;
    stroke: #d20909;
    fill: #d20909;
  }
`;

const SvgShopping = styled.svg`
  path {
    transition: 1s;
  }
  &:hover {
    path {
      transition: 0.5s;
      stroke: #00c8aa;
    }
  }
`;

function Header() {
  const dispatch = useDispatch();

  const favoritesCount = useSelector(selectorFavoritesCount);
  const shoppingCount = useSelector(selectorShoppingCount);

  useEffect(() => {
    dispatch(actionGetProductsStorage("productFavorites"));
    dispatch(actionGetProductsStorage("productShopping"));
  }, [dispatch]);

  return (
    <HeaderContainer>
      <ButtonLink to="/">
        <HeaderTitle>Euphoria</HeaderTitle>
      </ButtonLink>
      <HeaderIcons>
        <ButtonLink
          to="/favorites"
          $styles="border-radius: 8px; padding: 12px; width: 44px; height: 44px; background: #f6f6f6; border: none; display: grid; grid-template-columns: repeat(2, 1fr); justify-content: center; align-items: center; gap: 4px;"
        >
          <SvgFavorites
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.99486 2.93014C7.49535 1.18262 4.99481 0.712545 3.11602 2.31275C1.23723 3.91295 0.972726 6.5884 2.44815 8.48096C3.67486 10.0545 7.38733 13.3732 8.60407 14.4474C8.7402 14.5675 8.80827 14.6276 8.88766 14.6512C8.95695 14.6718 9.03277 14.6718 9.10207 14.6512C9.18146 14.6276 9.24952 14.5675 9.38565 14.4474C10.6024 13.3732 14.3149 10.0545 15.5416 8.48096C17.017 6.5884 16.7848 3.89611 14.8737 2.31275C12.9626 0.729378 10.4944 1.18262 8.99486 2.93014Z"
              stroke="#807D7E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </SvgFavorites>
          {favoritesCount}
        </ButtonLink>
        <ButtonLink
          to="/shopping"
          $styles="border-radius: 8px; padding: 12px; width: 44px; height: 44px; background: #f6f6f6; border: none; display: grid; grid-template-columns: repeat(2, 1fr); justify-content: center; align-items: center; gap: 4px;"
        >
          <SvgShopping
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1.33334H2.00526C2.85578 1.33334 3.56986 1.97376 3.6621 2.81926L4.3379 9.01409C4.43014 9.85959 5.14422 10.5 5.99474 10.5H13.205C13.9669 10.5 14.6317 9.98341 14.82 9.24519L15.9699 4.73593C16.2387 3.68213 15.4425 2.65742 14.355 2.65742H4.5M4.52063 13.5208H5.14563M4.52063 14.1458H5.14563M13.6873 13.5208H14.3123M13.6873 14.1458H14.3123M5.66667 13.8333C5.66667 14.2936 5.29357 14.6667 4.83333 14.6667C4.3731 14.6667 4 14.2936 4 13.8333C4 13.3731 4.3731 13 4.83333 13C5.29357 13 5.66667 13.3731 5.66667 13.8333ZM14.8333 13.8333C14.8333 14.2936 14.4602 14.6667 14 14.6667C13.5398 14.6667 13.1667 14.2936 13.1667 13.8333C13.1667 13.3731 13.5398 13 14 13C14.4602 13 14.8333 13.3731 14.8333 13.8333Z"
              stroke="#807D7E"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </SvgShopping>
          {shoppingCount}
        </ButtonLink>
      </HeaderIcons>
    </HeaderContainer>
  );
}

export default Header;
