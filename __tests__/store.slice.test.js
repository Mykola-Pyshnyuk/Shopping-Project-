import { describe, expect, it, beforeEach } from "vitest";
import storeSlice, {
  initialState,
  actionIsModalAddProduct,
  actionIsModalDeleteProduct,
  actionGetProductsStorage,
  actionCheckProduct,
  actionAddProducts,
  actionDeleteProducts,
  actionResetLocalStorage,
} from "../src/store/slices/store.slice.js";

describe("test store.slice actions and reducers", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("initial state", () => {
    expect(storeSlice(undefined, { type: undefined })).toEqual(initialState);
  });

  it("test actionIsModalAddProduct", () => {
    const test = storeSlice(initialState, actionIsModalAddProduct());

    expect(test).toStrictEqual({
      ...initialState,
      isModalAddProduct: true,
    });
  });

  it("test actionIsModalDeleteProduct", () => {
    const test = storeSlice(initialState, actionIsModalDeleteProduct());

    expect(test).toStrictEqual({
      ...initialState,
      isModalDeleteProduct: true,
    });
  });

  it("test actionGetProductsStorage", () => {
    const test = storeSlice(
      initialState,
      actionGetProductsStorage("productFavorites")
    );

    expect(test).toStrictEqual({
      ...initialState,
      favorites: [],
      favoritesCount: 0,
    });
  });

  it("test actionGetProductsStorage перевірка на невірний storage", () => {
    const test = storeSlice(
      initialState,
      actionGetProductsStorage("productNotFound")
    );

    expect(test).toStrictEqual({
      ...initialState,
    });
  });

  it("test actionCheckProduct", () => {
    const testProduct = storeSlice(
      initialState,
      actionAddProducts({
        productInfo: { key: "1", name: "test" },
        storageName: "productFavorites",
      })
    );

    const test = storeSlice(
      testProduct,
      actionCheckProduct({
        productKey: "1",
        storageName: "productFavorites",
      })
    );

    expect(test).toStrictEqual({
      ...initialState,
      currentProduct: { key: "1", name: "test" },
      favorites: [{ key: "1", name: "test" }],
      favoritesCount: 1,
    });
  });

  it("test actionCheckProduct перевірка на невірний productKey", () => {
    const testProduct = storeSlice(
      initialState,
      actionAddProducts({
        productInfo: { key: "1", name: "test" },
        storageName: "productFavorites",
      })
    );

    const test = storeSlice(
      testProduct,
      actionCheckProduct({
        productKey: "qwerty",
        storageName: "productFavorites",
      })
    );

    expect(test).toStrictEqual({
      ...initialState,
      currentProduct: null || undefined,
      favorites: [{ key: "1", name: "test" }],
      favoritesCount: 1,
    });
  });

  it("test actionAddProducts", () => {
    const test = storeSlice(
      initialState,
      actionAddProducts({
        productInfo: { key: "1", name: "test" },
        storageName: "productFavorites",
      })
    );

    expect(test).toStrictEqual({
      ...initialState,
      favorites: [{ key: "1", name: "test" }],
      favoritesCount: 1,
    });
  });

  it("test actionAddProducts перевірка дублікату", () => {
    const testProduct = storeSlice(
      initialState,
      actionAddProducts({
        productInfo: { key: "1", name: "test" },
        storageName: "productFavorites",
      })
    );

    const test = storeSlice(
      testProduct,
      actionAddProducts({
        productInfo: { key: "1", name: "test" },
        storageName: "productFavorites",
      })
    );

    expect(test).toStrictEqual({
      ...initialState,
      favorites: [{ key: "1", name: "test" }],
      favoritesCount: 1,
    });
  });

  it("test actionAddProducts перевірка при надсилані обєкта не повирне пустий обєкт", () => {
    const test = storeSlice(
      initialState,
      actionAddProducts({
        productInfo: { key: "1", name: "test" },
        storageName: "productFavorites",
      })
    );

    expect(test).not.toEqual({});
  });

  it("test actionAddProducts перевірка на надсиління невірного storageName", () => {
    const test = storeSlice(
      initialState,
      actionAddProducts({
        productInfo: { key: "1", name: "test" },
        storageName: "productNotFound",
      })
    );

    expect(test).toStrictEqual({
      ...initialState,
    });
  });

  it("test actionAddProducts перевірка на null", () => {
    const test = storeSlice(
      initialState,
      actionAddProducts({
        productInfo: null,
        storageName: "productFavorites",
      })
    );

    expect(test).not.toBeNull();
  });

  it("test actionAddProducts перевірка на undefined", () => {
    const test = storeSlice(
      initialState,
      actionAddProducts({
        productInfo: undefined,
        storageName: "productFavorites",
      })
    );

    expect(test).not.toBeUndefined();
  });

  it("test actionDeleteProducts", () => {
    const testProduct = storeSlice(
      initialState,
      actionAddProducts({
        productInfo: { key: "1", name: "test" },
        storageName: "productFavorites",
      })
    );

    const test = storeSlice(
      testProduct,
      actionDeleteProducts({
        productKey: "1",
        storageName: "productFavorites",
      })
    );

    expect(test).toStrictEqual({
      ...initialState,
      favorites: [],
      favoritesCount: 0,
    });
  });

  it("test actionDeleteProducts перевірка на невірний productKey", () => {
    const testProduct = storeSlice(
      initialState,
      actionAddProducts({
        productInfo: { key: "1", name: "test" },
        storageName: "productFavorites",
      })
    );

    const test = storeSlice(
      testProduct,
      actionDeleteProducts({
        productKey: "qwerty",
        storageName: "productFavorites",
      })
    );

    expect(test).toStrictEqual({
      ...initialState,
      favorites: [{ key: "1", name: "test" }],
      favoritesCount: 1,
    });
  });

  it("test actionDeleteProducts перевірка на невірнний storage", () => {
    const testProduct = storeSlice(
      initialState,
      actionAddProducts({
        productInfo: { key: "1", name: "test" },
        storageName: "productFavorites",
      })
    );

    const test = storeSlice(
      testProduct,
      actionDeleteProducts({
        productKey: "1",
        storageName: "productNotFound",
      })
    );

    expect(test).toStrictEqual({
      ...initialState,
      favorites: [{ key: "1", name: "test" }],
      favoritesCount: 1,
    });
  });

  it("test actionResetLocalStorage", () => {
    const testProduct1 = storeSlice(
      initialState,
      actionAddProducts({
        productInfo: { key: "1", name: "test" },
        storageName: "productFavorites",
      })
    );

    const testProduct2 = storeSlice(
      testProduct1,
      actionAddProducts({
        productInfo: { key: "2", name: "test2" },
        storageName: "productFavorites",
      })
    );

    const test = storeSlice(
      testProduct2,
      actionResetLocalStorage("productFavorites")
    );

    expect(test).toStrictEqual({
      ...initialState,
      favorites: [],
      favoritesCount: 0,
    });
  });

  it("test actionResetLocalStorage перевірка на невірний storage", () => {
    const testProduct1 = storeSlice(
      initialState,
      actionAddProducts({
        productInfo: { key: "1", name: "test" },
        storageName: "productFavorites",
      })
    );

    const testProduct2 = storeSlice(
      testProduct1,
      actionAddProducts({
        productInfo: { key: "2", name: "test2" },
        storageName: "productFavorites",
      })
    );

    const test = storeSlice(
      testProduct2,
      actionResetLocalStorage("productNotFound")
    );

    expect(test).toStrictEqual({
      ...initialState,
      favorites: [
        { key: "1", name: "test" },
        { key: "2", name: "test2" },
      ],
      favoritesCount: 2,
    });
  });
});

//     isModalAddProduct: false,
//   isModalDeleteProduct: false,
//   products: [],
//   favorites: [],
//   shopping: [],
//   favoritesCount: 0,
//   shoppingCount: 0,
//   currentProduct: {},
