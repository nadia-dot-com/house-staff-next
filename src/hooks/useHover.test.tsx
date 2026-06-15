import { render, screen } from "@testing-library/react";
import { useHover } from "./useHover";
import userEvent from "@testing-library/user-event";

function TestComponent({
  onEnter,
  onLeave,
}: {
  onEnter: () => void;
  onLeave: () => void;
}) {
  const refCallback = useHover(onEnter, onLeave);

  return (
    <div>
      <div
        ref={refCallback}
        data-testid="hover"
        style={{ width: "100px", height: "100px" }}
      >
        Hover Me
      </div>
    </div>
  );
}

describe("useHover", () => {
  test("should call callbacks when mouse enters and leaves", async () => {
    const onEnter = vi.fn();
    const onLeave = vi.fn();

    render(<TestComponent onEnter={onEnter} onLeave={onLeave} />);

    await userEvent.hover(screen.getByTestId("hover"));
    expect(onEnter).toHaveBeenCalledTimes(1);

    await userEvent.unhover(screen.getByTestId("hover"));
    expect(onLeave).toHaveBeenCalledTimes(1);
  });
});