import React from "react";
import useSWR, { useSWRConfig } from "swr";

const useGetCategories = () => {
  return useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/category`);
};

export default useGetCategories;
