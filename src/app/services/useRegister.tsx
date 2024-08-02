import { registerUser } from "@/lib/server/auth/registerUser";
import useSWRMutation from "swr/mutation";

const useRegister = () => {
  return useSWRMutation("register-user", () => {});
};

export default useRegister;
