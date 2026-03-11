import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Input from "../src/components/Input/input.jsx";
import { BrowserRouter } from "react-router-dom";

const handleChange = vi.fn();

describe("test component Input", () => {
  it("(snapshot)", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
        />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
