import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalAddProduct from "../src/compositions/components/ModalAddProduct.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/index.js";

const onClose = vi.fn();
const isOutside = true;
const productInfo = {
  key: "1",
  name: "test",
  brand: "testBrand",
  price: "testPrice",
};

describe("test component ModalAddProduct", () => {
  beforeEach(() => {
    onClose.mockClear(); //  скидає перед кожним тестом
  });

  it("(snapshot)", () => {
    expect(
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalAddProduct
              onClose={onClose}
              isOutside={isOutside}
              productInfo={productInfo}
              isOpen={true}
            />
          </BrowserRouter>
        </Provider>
      )
    ).toMatchSnapshot();
    screen.debug();
  });

  it("Компонент ModalAddProduct повинен відображатися", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalAddProduct
            onClose={onClose}
            isOutside={isOutside}
            productInfo={productInfo}
            isOpen={true}
          />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByTestId("modal-add-product")).toBeInTheDocument();
  });

  it("перевірка пропс isOpen якщо true то ModalAddProduct повинен відображатися", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalAddProduct
            onClose={onClose}
            isOutside={isOutside}
            productInfo={productInfo}
            isOpen={true}
          />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Add Product/i)).toBeInTheDocument();
  });

  it("перевірка пропс isOpen якщо false то ModalAddProduct не повинен відображатися", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalAddProduct
            onClose={onClose}
            isOutside={isOutside}
            productInfo={productInfo}
            isOpen={false}
          />
        </BrowserRouter>
      </Provider>
    );
    screen.debug();
    expect(screen.queryByText(/Add Product/i)).not.toBeInTheDocument();
  });

  it("перевірка пропс onClose", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalAddProduct
            onClose={onClose}
            isOutside={isOutside}
            productInfo={productInfo}
            isOpen={true}
          />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByTestId("button-close"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("перевірка кнопки Add Product", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalAddProduct
            onClose={onClose}
            isOutside={isOutside}
            productInfo={productInfo}
            isOpen={true}
          />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText(/ADD TO CART/i));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("перевірка пропс isOutside", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalAddProduct
            onClose={onClose}
            isOutside={isOutside}
            productInfo={productInfo}
            isOpen={true}
          />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByTestId("modal-add-product"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("перевірка пропс productInfo", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalAddProduct
            onClose={onClose}
            isOutside={isOutside}
            productInfo={productInfo}
            isOpen={true}
          />
        </BrowserRouter>
      </Provider>
    );
    screen.debug();

    expect(screen.getByText(/Add Product test/i)).toBeInTheDocument();
    expect(screen.getByText(/testBrand/i)).toBeInTheDocument();
    expect(screen.getByText(/testPrice/i)).toBeInTheDocument();
  });
});
