import { Dispatch } from "react";

export type UserData = {
  id: string;
  name?: string | null;
  email: string;
  phone?: string | null;
  address?: string | null;
  postalCode?: string | null;
  city?: string | null;
  country?: string | null;
};

export type UserContextProps = {
  user: UserData | null;
  token: string | null;
  isLoginModalOpen: boolean;

  updateToken: Dispatch<React.SetStateAction<string | null>>;
  updateUser: Dispatch<React.SetStateAction<UserData | null>>;
  toggleModalOpen: () => void;
  logout: () => void;

  isLoading: boolean;
  error: Error | null;
};
