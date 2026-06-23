import { fireEvent, render, screen } from "@testing-library/react";
import { AccountIcon } from "./AccountIcon";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { routes } from "@/constants/navigation/routes";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
  usePathname: vi.fn(),
}));

vi.mock("react-redux", () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn(),
}));

describe("AccountIcon", () => {
  const mockDispatch = vi.fn();
  const mockPush = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useDispatch).mockReturnValue(mockDispatch);
    vi.mocked(useRouter).mockReturnValue({
      push: mockPush,
    } as any);

    vi.mocked(usePathname).mockReturnValue("/");
    vi.mocked(useSelector).mockImplementation((selector: any) => selector({ userUi: false }));
  });

  test("opens login modal when user is not logged in", () => {
    render(<AccountIcon user={null} />);

    fireEvent.click(screen.getByLabelText("Login"));

    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

  test("navigates to account page when user exists", () => {
    render(<AccountIcon user={{ id: "1" } as any} />);

    fireEvent.click(screen.getByLabelText("My Account"));

    expect(mockPush).toHaveBeenCalledWith(routes.userAccount);
  });
});
