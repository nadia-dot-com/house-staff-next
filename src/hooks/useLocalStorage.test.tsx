import { renderHook } from "@testing-library/react";
import { useLocalStorage } from "./useLocalStorage";
import { act } from "react";

const TEST_KEY = "test";

describe("useLocalStorage", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  test("shold return initial value when localStorage is empty", () => {
    const { result } = renderHook(() =>
      useLocalStorage<string>(TEST_KEY, "initial"),
    );
    expect(result.current[0]).toBe("initial");
  });

  test("shold get exiting data from localStorage", () => {
    window.localStorage.setItem(TEST_KEY, JSON.stringify("data"));
    const { result } = renderHook(() =>
      useLocalStorage<string>(TEST_KEY, "initial"),
    );
    expect(result.current[0]).toBe("data");
  });

  test("should update localStorage when setValue is called", () => {
    const { result } = renderHook(() =>
      useLocalStorage<string>(TEST_KEY, "initial")
    );
    const setValue = result.current[1];

    act(() => {
      setValue("new-value");
    });
    expect(result.current[0]).toBe("new-value");
    expect(window.localStorage.getItem(TEST_KEY)).toBe(
      JSON.stringify("new-value"),
    );
  });
  test("should remove item from localStorage if value is null", () => {
    window.localStorage.setItem(TEST_KEY, JSON.stringify("to-be-removed"));

    const { result } = renderHook(() =>
      useLocalStorage<string | null>(TEST_KEY, "to-be-removed"),
    );

    act(() => {
      result.current[1](null);
    });

    expect(window.localStorage.getItem(TEST_KEY)).toBeNull();
  });
});
