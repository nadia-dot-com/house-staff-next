import { fireEvent, render, screen } from "@testing-library/react";
import { test, describe } from "vitest";
import { QuantityInput } from "./QuantityInput";

describe("QuantityInput", () => {
  test("should render with correct initial value, min and max attributes", () => {
    render(<QuantityInput stock={100} quantity={10} onChange={() => {}} />);

    const input = screen.getByLabelText("Change quantity");

    expect(input).toHaveValue(10);
    expect(input).toHaveAttribute("min", "1");
    expect(input).toHaveAttribute("max", "100");
  });

  test("should call onChange when value changes", () => {
    const handleChange = vi.fn();
    render(<QuantityInput stock={100} quantity={10} onChange={handleChange} />);

    const input = screen.getByDisplayValue("10");
    fireEvent.change(input, { target: { value: "11" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
