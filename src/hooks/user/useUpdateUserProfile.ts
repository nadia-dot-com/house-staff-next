import { useMutation } from "@tanstack/react-query";
import { updateUserProfile } from "@/api/user.api";
import { useUserContext } from "@/context/UserContext";
import { toast } from "react-toastify";
import { UserData } from "@/types/userTypes";

export const useUpdateUserProfile = () => {
  const { token, updateUser } = useUserContext();

  return useMutation({
    mutationFn: async (data: Partial<UserData>) => {
      if (!token) {
        throw new Error("No token");
      }
      return updateUserProfile(token, data);
    },
    onSuccess: (updatedUser) => {
      updateUser(updatedUser);
      toast.success("Profile saved!");
    },
    onError: () => {
      toast.error("Failed to save profile");
    },
  });
};
