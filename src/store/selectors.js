export const selectorIsModalAddProduct = (store) =>
  store.storeHome.isModalAddProduct;
export const selectorIsModalDeleteProduct = (store) =>
  store.storeHome.isModalDeleteProduct;

export const selectorProducts = (store) => store.storeHome.products;

export const selectorFavoritesCount = (store) => store.storeHome.favoritesCount;
export const selectorShoppingCount = (store) => store.storeHome.shoppingCount;

export const selectorFavorites = (store) => store.storeHome.favorites;
export const selectorShopping = (store) => store.storeHome.shopping;

export const selectorCurrentProduct = (store) => store.storeHome.currentProduct;
