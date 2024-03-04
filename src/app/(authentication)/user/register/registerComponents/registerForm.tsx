"use client";

import { logoIcon } from "@/assets";
import Input from "@/components/reusable/Input";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import useRegister from "@/app/services/useRegister";
import { Loader2 } from "lucide-react";

const FormSchema = z.object({
  email: z.string({ required_error: "email is required" }).email(),
  password: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
});
const RegsiterForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { trigger, isMutating, data, error } = useRegister();

  function onSubmit({ email, password }: z.infer<typeof FormSchema>) {
    trigger({ email, password });
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
