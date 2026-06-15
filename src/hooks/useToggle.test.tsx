import { renderHook, waitFor } from "@testing-library/react";
import { useToggle } from "./useToggle";
import { act } from "react";

describe("useToggle", () => {
  test("should to toggle", async () => {
    const { result } = renderHook(() => useToggle(false));
    expect(result.current[0]).toBe(false);

    act(() => result.current[1]());
    await waitFor(() => expect(result.current[0]).toBe(true));

    act(() => result.current[1]());
    expect(result.current[0]).toBe(false);
  });
});
