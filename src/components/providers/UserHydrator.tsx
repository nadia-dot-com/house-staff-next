"use client";

import { setUser } from "@/store/slices/userSlice";
import { UserData } from "@/types/userTypes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function UserHydrator({ user }: { user: UserData | null }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

  return null;
}
