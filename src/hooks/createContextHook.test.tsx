import { createContext, ReactNode } from "react";
import { createContextHook } from "./createContextHook";
import { render, screen } from "@testing-library/react";

type TestValue = {
  test: string;
};

const TestContext = createContext<TestValue | null>(null);

function TestProvider({ children }: { children: ReactNode }) {
  const test: TestValue = { test: "test" };
  return <TestContext.Provider value={test}>{children}</TestContext.Provider>;
}

const useTestContext = createContextHook(TestContext, TestProvider);

function TestComponent() {
  const { test } = useTestContext();

  return (
    <>
      <div>{test}</div>
    </>
  );
}

describe("createContextHook", () => {
  test("should throw Error if used withod Provider", () => {
    expect(() => render(<TestComponent />)).toThrow();
  });
  test("should throw Error if used withod Provider", () => {
    render(
      <TestProvider>
        <TestComponent />
      </TestProvider>,
    );

    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
