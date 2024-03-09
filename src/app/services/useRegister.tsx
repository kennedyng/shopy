"use client";
import apiClient from "@/lib/axios";
import React from "react";
import useSWRMutation from "swr/mutation";
import { UserInfo } from "../@types";
import { AxiosError, AxiosResponse } from "axios";

const registerUser = (url: string, { arg }: { arg: UserInfo }) =>
  apiClient.post(url, arg).then((res: AxiosResponse) => res.data);

const useRegister = () => {
  return useSWRMutation("/api/auth/register", registerUser);
};

export default useRegister;
