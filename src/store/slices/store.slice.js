import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sendRequest from "../../helpers/sendRequest";

export const initialState = {
  isModalAddProduct: false,
  isModalDeleteProduct: false,
  products: [],
  favorites: [],
  shopping: [],
  favoritesCount: 0,
  shoppingCount: 0,
  currentProduct: {},
};

export const actionFetchStore = createAsyncThunk("products/fetch", async () => {
  const results = await sendRequest("/productsData.json");
  return results;
});

const getProducts = (storageName) => {
  const product = JSON.parse(localStorage.getItem(storageName)) || [];
  return product;
};

const setProducts = (products, storageName) => {
  localStorage.setItem(storageName, JSON.stringify(products));
};

const deleteProducts = (productKey, storageName) => {
  const product = getProducts(storageName);
  const deleteProduct = product.filter((product) => product.key !== productKey);
  setProducts(deleteProduct, storageName);
  return deleteProduct;
};

const storeSlice = createSlice({
  name: "storeHome",
  initialState,
  reducers: {
    actionIsModalAddProduct: (state) => {
      state.isModalAddProduct = !state.isModalAddProduct;
    },
    actionIsModalDeleteProduct: (state) => {
      state.isModalDeleteProduct = !state.isModalDeleteProduct;
    },
    actionGetProductsStorage: (state, { payload: storageName }) => {
      if (storageName === "productFavorites") {
        state.favorites = getProducts(storageName);
        state.favoritesCount = state.favorites.length;
      } else if (storageName === "productShopping") {
        state.shopping = getProducts(storageName);
        state.shoppingCount = state.shopping.length;
      }
      return;
    },
    actionCheckProduct: (state, { payload: { productKey, storageName } }) => {
      const products = getProducts(storageName);
      state.currentProduct = products.find(
        (product) => product.key === productKey
      );
    },
    actionAddProducts: (state, { payload: { productInfo, storageName } }) => {
      let products;
      if (storageName === "productFavorites") {
        products = getProducts(storageName);
        if (
          state.favorites.some((product) => product.key === productInfo.key)
        ) {
          return;
        }
        products.push(productInfo);
        setProducts(products, storageName);
        state.favorites.push(productInfo);
        state.favoritesCount = state.favorites.length;
      } else if (storageName === "productShopping") {
        products = getProducts(storageName);
        if (state.shopping.some((product) => product.key === productInfo.key)) {
          alert("Продукт уже додано в корзину");
          return;
        }
        products.push(productInfo);
        setProducts(products, storageName);
        state.shopping.push(productInfo);
        state.shoppingCount = state.shopping.length;
      }
      return;
    },
    actionDeleteProducts: (state, { payload: { productKey, storageName } }) => {
      let deleteProduct;
      if (storageName === "productFavorites") {
        deleteProduct = deleteProducts(productKey, storageName);
        state.favorites = deleteProduct;
        state.favoritesCount = state.favorites.length;
      } else if (storageName === "productShopping") {
        deleteProduct = deleteProducts(productKey, storageName);
        state.shopping = deleteProduct;
        state.shoppingCount = state.shopping.length;
      }
      return;
    },
    actionResetLocalStorage: (state, { payload: storageName }) => {
      if (storageName === "productShopping") {
        localStorage.removeItem(storageName);
        state.shopping = [];
        state.shoppingCount = 0;
      } else if (storageName === "productFavorites") {
        localStorage.removeItem(storageName);
        state.favorites = [];
        state.favoritesCount = 0;
      }
      return;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actionFetchStore.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
  },
});

export const {
  actionIsModalAddProduct,
  actionIsModalDeleteProduct,
  actionGetProductsStorage,
  actionCheckProduct,
  actionAddProducts,
  actionDeleteProducts,
  actionResetLocalStorage,
} = storeSlice.actions;

export default storeSlice.reducer;
