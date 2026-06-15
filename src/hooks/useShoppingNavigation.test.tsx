import { renderHook } from "@testing-library/react";
import { useShoppingNavigation } from "./useShoppingNavigation";
import { MemoryRouter } from "react-router-dom";
import { CategoryProvider } from "@/context/CategoryContext";
import { ReactNode } from "react";
import { getWrapper } from "@/tests/getWrapper";

const wrapper = ({ children }: { children: ReactNode }) => {
  const QueryWrapper = getWrapper();
  return (
    <MemoryRouter initialEntries={["/"]}>
      <QueryWrapper>
        <CategoryProvider>{children}</CategoryProvider>
      </QueryWrapper>
    </MemoryRouter>
  );
};
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("useShoppingNavigation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should navigate to category URL", () => {
    const { result } = renderHook(() => useShoppingNavigation(), { wrapper });

    result.current.navigateToCategory("Table");

    expect(mockNavigate).toHaveBeenCalledWith("/products/table");
  });

  it("should call navigate with correct slugified path for product", () => {
    const { result } = renderHook(() => useShoppingNavigation(), { wrapper });

    result.current.navigateToCategory("Home Decor", "Modern Lamp");

    expect(mockNavigate).toHaveBeenCalledWith("/products/home-decor/modern-lamp");
  });
});