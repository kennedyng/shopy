"use client";

import { logoIcon } from "@/assets";
import Input from "@/components/reusable/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import useRegister from "@/app/services/useRegister";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";

//validation schema
const FormSchema = z
  .object({
    email: z.string({ required_error: "email is required" }).email(),
    password: z
      .string()
      .min(8, "The password must be at least 8 characters long")
      .max(32, "The password must be a maximun 32 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
      ),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

//user registration form
const RegsiterForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { trigger, isMutating, data, error } = useRegister();

  function onSubmit({ email, password }: z.infer<typeof FormSchema>) {
    trigger({ email, password });
  }

  let alertContent: ReactNode | null = null;

  if (!data && error?.status === 409) {
    alertContent = (
      <Alert variant="destructive">
        <AlertTitle>Auth Failed</AlertTitle>
        <AlertDescription>
          Authentication failed. user account Already exists
        </AlertDescription>
      </Alert>
    );
  }

  if (data && !error) {
    alertContent = (
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
  }

  return (
    <div className=" flex  flex-col gap-2 bg-white shadow-lg w-full md:w-[450px] rounded-md top p-10">
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
      <p className="text-black  text-center ">Create new account</p>

      {alertContent}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="kennedyngosachanda@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="**********" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="**********" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isMutating}
            type="submit"
            className="h-[45px] bg-primary-main text-white rounded-lg"
          >
            register
            {isMutating ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
          </Button>
        </form>
      </Form>
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
