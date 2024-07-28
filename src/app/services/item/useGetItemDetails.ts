import { getItemDetails } from "@/lib/server/item/getItems";
import useSWR, { SWRResponse } from "swr";

const useGetItemDetails = (): SWRResponse => {
  return useSWR("item-details", getItemDetails);
};

export default useGetItemDetails;
