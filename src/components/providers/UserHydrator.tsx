"use client";

import { setUserClient } from "@/store/slices/userSlice";
import { UserData } from "@/types/userTypes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function UserHydrator({ user }: { user: UserData | null }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserClient(user));
  }, [dispatch, user]);

  return null;
}
