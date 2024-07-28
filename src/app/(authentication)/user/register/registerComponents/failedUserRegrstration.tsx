import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FC } from "react";

interface FailedUserRegrstrationProps {
  message: string;
}
const FailedUserRegrstration: FC<FailedUserRegrstrationProps> = ({
  message,
}) => {
  return (
    <Alert variant="destructive">
      <AlertTitle>Registration Failed</AlertTitle>
      <AlertDescription>{message} </AlertDescription>
    </Alert>
  );
};

export default FailedUserRegrstration;
