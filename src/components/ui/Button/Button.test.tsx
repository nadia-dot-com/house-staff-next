import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("click handler should be called on click", () => {
    const handleClick = vi.fn();
    render(
      <Button
        text="Click me"
        bgColor="red"
        textColor="white"
        onClick={handleClick}
      />,
    );

    const button = screen.getByLabelText("button");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(button).toHaveTextContent("Click me");
  });

  test("should be disabled when disabled prop is true", () => {
    render(
      <Button
        text="Click me"
        bgColor="red"
        textColor="white"
        onClick={() => {}}
        disabled={true}
      />,
    );

    const button = screen.getByLabelText("button");

    expect(button).toBeDisabled();
  });
});
