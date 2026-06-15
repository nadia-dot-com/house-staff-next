import { fireEvent, render, screen } from "@testing-library/react";
import { HorizontalScrollButton } from "./HorizontalScrollButton";

describe("HorizontalScrollButton", () => {
  test("should render left arrow and correct label", () => {
    const handleClick = vi.fn();
    render(<HorizontalScrollButton onClick={handleClick} direction="left" />);

    const button = screen.getByLabelText("Scroll left");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("should be disabled when disabled prop is true", () => {
    render(
      <HorizontalScrollButton
        onClick={() => {}}
        disabled={true}
        direction="left"
      />,
    );

    const button = screen.getByLabelText("Scroll left");
    expect(button).toBeDisabled();
  });
});
