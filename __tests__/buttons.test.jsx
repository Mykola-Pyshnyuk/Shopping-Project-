import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../src/components/Button/index.js";
import { BrowserRouter } from "react-router-dom";

const handleClick = vi.fn();

describe("test component Button", () => {
  it("(snapshot)", () => {
    expect(
      render(
        <BrowserRouter>
          <Button>Test</Button>
        </BrowserRouter>
      )
    ).toMatchSnapshot();
  });

  it("Компонент кнопки повинен відображатися", () => {
    render(
      <BrowserRouter>
        <Button>Test</Button>
      </BrowserRouter>
    );

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });

  it("Компонент кнопки повинен відображатися з класом та стилем", () => {
    render(
      <BrowserRouter>
        <Button $styles="background-color: red;">Test</Button>
      </BrowserRouter>
    );

    expect(screen.getByText(/Test/i)).toHaveAttribute("class");
    expect(screen.getByText(/Test/i).className).toMatch(/sc-/i);
  });

  it("повинен викликатися onClick", () => {
    render(
      <BrowserRouter>
        <Button onClick={handleClick}>Test</Button>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText(/Test/i));
    expect(handleClick).toHaveBeenCalled();
  });

  it("перевірка пропс type кнопки", () => {
    render(
      <BrowserRouter>
        <Button type="submit">Test</Button>
      </BrowserRouter>
    );
    expect(screen.getByText(/Test/i)).toHaveAttribute("type", "submit");
  });

  it("перевірка пропс disabled кнопки", () => {
    render(
      <BrowserRouter>
        <Button disabled>Test</Button>
      </BrowserRouter>
    );
    expect(screen.getByText(/Test/i)).toHaveAttribute("disabled");
  });
});
