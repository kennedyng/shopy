import { registerUser } from "@/lib/server/auth/registerUser";
import { UserCredentials } from "@/models";
import useSWRMutation from "swr/mutation";

const useRegister = () => {
  return useSWRMutation<any, Error, any>("register-user", registerUser);
};

export default useRegister;
