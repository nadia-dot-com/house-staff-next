import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useClickOutside } from "./useClickOutside";

function TestComponent({ onClickOutside }: { onClickOutside: () => void }) {
  const refCallback = useClickOutside(onClickOutside);

  return (
    <div>
      <div
        ref={refCallback}
        data-testid="inside"
        style={{ width: "100px", height: "100px" }}
      >
        Inside
      </div>
      <button data-testid="outside">outside</button>
    </div>
  );
}

describe("useClickOutside", async () => {
  test("should call callback when clicked outside of the element", async () => {
    const callback = vi.fn();
    render(<TestComponent onClickOutside={callback} />);

    await userEvent.click(screen.getByTestId("inside"));
    expect(callback).not.toHaveBeenCalled();

    await userEvent.click(screen.getByTestId("outside"));
    await waitFor(() => expect(callback).toHaveBeenCalledTimes(1));
  });
});
