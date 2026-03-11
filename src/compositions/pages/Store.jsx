import React, { useEffect, useContext } from "react";
import ProductCardList from "../components/ProductCardList.jsx";
import { useSelector, useDispatch } from "react-redux";
import { actionFetchStore } from "../../store/slices/store.slice.js";
import { selectorProducts } from "../../store/selectors.js";
import { Button } from "../../components/Button/index.js";
import { Context } from "../../context/index.jsx";

function Store() {
  const dispatch = useDispatch();
  const products = useSelector(selectorProducts);

  useEffect(() => {
    dispatch(actionFetchStore());
  }, [dispatch]);

  const context = useContext(Context);

  function changeStyle() {
    context.changeStyle();
  }

  return (
    <>
      <Button
        $styles=" display: block; margin: 15px auto; border-radius: 10px; padding: 10px 20px; border: none; box-shadow: 0px 4px 10px rgba(5, 35, 187, 0.699); background-color: #3045e5; color: #fff; font-size: 16px;"
        onClick={changeStyle}
      >
        Зміненти стиль
      </Button>
      <ProductCardList
        products={products}
        showFavorites={true}
        showAddProduct={true}
        buttonCardListStyle={true}
      />
    </>
  );
}

export default Store;
