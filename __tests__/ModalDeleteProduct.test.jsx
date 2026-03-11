import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalDeleteProduct from "../src/compositions/components/ModalDeleteProduct.jsx";
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

describe("test component ModalDeleteProduct", () => {
  beforeEach(() => {
    onClose.mockClear(); //  скидає перед кожним тестом
  });

  it("(snapshot)", () => {
    expect(
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalDeleteProduct
              onClose={onClose}
              isOutside={isOutside}
              productInfo={productInfo}
              isOpen={true}
            />
          </BrowserRouter>
        </Provider>
      )
    ).toMatchSnapshot();
  });

  it("Компонент ModalDeleteProduct повинен відображатися", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalDeleteProduct
            onClose={onClose}
            isOutside={isOutside}
            productInfo={productInfo}
            isOpen={true}
          />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Delete Product/i)).toBeInTheDocument();
  });

  it("перевірка пропс isOpen якщо true то ModalDeleteProduct повинен відображатися", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalDeleteProduct
            onClose={onClose}
            isOutside={isOutside}
            productInfo={productInfo}
            isOpen={true}
          />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Delete Product/i)).toBeInTheDocument();
  });

  it("перевірка пропс isOpen якщо false то ModalDeleteProduct не повинен відображатися", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalDeleteProduct
            onClose={onClose}
            isOutside={isOutside}
            productInfo={productInfo}
            isOpen={false}
          />
        </BrowserRouter>
      </Provider>
    );
    screen.debug();
    expect(screen.queryByText(/Delete Product/i)).not.toBeInTheDocument();
  });

  it("перевірка пропс onClose", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalDeleteProduct
            onClose={onClose}
            isOutside={isOutside}
            productInfo={productInfo}
            isOpen={true}
          />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(screen.getByTestId("button-close"));
    expect(onClose).toHaveBeenCalled();
  });

  it("перевірка кнопки Yes Delete ", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalDeleteProduct
            onClose={onClose}
            isOutside={isOutside}
            productInfo={productInfo}
            isOpen={true}
          />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(screen.getByText(/yes/i));
    expect(onClose).toHaveBeenCalled(1);
  });

  it("перевірка кнопки No Cancel", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalDeleteProduct
            onClose={onClose}
            isOutside={isOutside}
            productInfo={productInfo}
            isOpen={true}
          />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(screen.getByText(/No/i));
    expect(onClose).toHaveBeenCalled();
  });

  it("перевірка пропс isOutside", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalDeleteProduct
            onClose={onClose}
            isOutside={isOutside}
            productInfo={productInfo}
            isOpen={true}
          />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(screen.getByTestId("modal-delete-product"));
    expect(onClose).toHaveBeenCalled();
  });

  it("перевірка пропс productInfo", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalDeleteProduct
            onClose={onClose}
            isOutside={isOutside}
            productInfo={productInfo}
            isOpen={true}
          />
        </BrowserRouter>
      </Provider>
    );
    screen.debug();

    expect(screen.getByText(/Delete Product test/i)).toBeInTheDocument();
    expect(screen.getByText(/testBrand/i)).toBeInTheDocument();
    expect(screen.getByText(/testPrice/i)).toBeInTheDocument();
  });
});
