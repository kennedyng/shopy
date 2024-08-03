"use client";

import { logoIcon } from "@/assets";
import Input from "@/components/reusable/Input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { registerUser } from "@/lib/server/auth/registerUser";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: "",
  ok: false,
  errors: {
    email: [],
    password: [],
  },
};
const RegsiterForm = () => {
  const [state, formAction] = useFormState(registerUser, initialState);

  return (
    <div className="flex flex-col gap-2 bg-white shadow-lg w-full md:w-[450px] rounded-md top p-10">
      <div className="flex flex-row justify-center gap-[2px] items-baseline">
        <div className="font-bold text-center">Register</div>
        <Image
          height={40}
          width={40}
          src={logoIcon}
          alt="band"
          className="w-[40px] h-[40px]"
        />
      </div>
      <p className="text-black text-center">Create new account</p>

      {state.message && (
        <Alert className="my-4" variant={state.ok ? "default" : "destructive"}>
          <AlertTitle>{state.message}</AlertTitle>
        </Alert>
      )}

      <form action={formAction} className="flex flex-col gap-4">
        <div className="grid">
          <label htmlFor="email">Email</label>
          <Input id="email" name="email" placeholder="email" />
          <div className="text-sm text-red-500">
            {state.errors?.email?.map((error) => (
              <small>{error}</small>
            ))}
          </div>
        </div>

        <div className="grid">
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="password"
          />

          <div className="text-sm text-red-500">
            {state.errors?.password?.map((error) => (
              <small>{error}</small>
            ))}
          </div>
        </div>
        <RegisterBtn />
      </form>

      <p>
        Already have an account?{" "}
        <Link href="/user/login">
          <span className="text-yellow font-bold">Login</span>
        </Link>
      </p>
    </div>
  );
};

export default RegsiterForm;

const RegisterBtn = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      className="h-[45px]  text-white rounded-lg"
    >
      {pending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Register"}
    </Button>
  );
};
