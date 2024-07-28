import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

const SuccessUserRegistered = () => {
  return (
    <Alert className="bg-green-100 text-green-900 border-green-400">
      <AlertTitle>Successfully Account Created</AlertTitle>
      <AlertDescription>
        account created.{" "}
        <b>
          <Link href={"/user/login"}>Login To Continue</Link>
        </b>
      </AlertDescription>
    </Alert>
  );
};

export default SuccessUserRegistered;
