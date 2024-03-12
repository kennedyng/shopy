"use client";
import { CustomError } from "@/lib/exceptions";
import useSWRMutation from "swr/mutation";
import { UserInfo } from "../@types";

const registerUser = async (url: string, { arg }: { arg: UserInfo }) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  if (!res.ok) {
    throw new CustomError("Failed to register user", res.status);
  }

  return res.json();
};
const useRegister = () => {
  return useSWRMutation(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/register`,
    registerUser
  );
};

export default useRegister;
