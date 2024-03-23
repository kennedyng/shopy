import { getItemDetails } from "@/lib/server/item";
import useSWR, { SWRResponse } from "swr";

const useGetItemDetails = (): SWRResponse => {
  return useSWR("item-details", getItemDetails);
};

export default useGetItemDetails;
