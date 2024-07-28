"use client";
import { logoIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
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
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { ReactNode, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";

//Form validation schema
const FormSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .email({ message: "valid email is required" }),
  password: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
});

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  let alertContent: ReactNode | null = null;

  const onSubmit = async ({ email, password }: z.infer<typeof FormSchema>) => {
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.refresh();
      router.push("/");
    } else {
      toast.error(res?.error || "Something Went Wrong try again");
      setLoading(false);
    }
  };

  const handlTestLogin = async () => {
    setLoading(true);
    const response = await signIn("credentials", {
      email: process.env.NEXT_PUBLIC_TEST_EMAIL as string,
      password: process.env.NEXT_PUBLIC_TEST_PASSWORD,
      redirect: false,
    });

    if (!response?.error) {
      router.push("/");
      router.refresh();
    } else {
      throw new Error("failed to login");
    }
  };
  return (
    <main className="flex items-center justify-center min-h-screen bg-yellow bg-opacity-20 p-4">
      <div className=" flex  flex-col gap-2 bg-white shadow-lg w-full md:w-[450px] rounded-md top p-10">
        <div className="flex flex-row justify-center gap-[2px] items-baseline">
          <div className="font-bold text-center">Login</div>
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
                    <Input
                      placeholder="**********"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={loading}
              type="submit"
              className="bg-primary-main rounded-md text-white py-2 px-8 font-bold w-full"
            >
              Login{" "}
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
            </Button>

            <div className="flex flex-row items-center gap-4 my-4">
              <hr className="w-full" />
              or
              <hr className="w-full" />
            </div>

            <div className="flex flex-row justify-center gap-4 ">
              <Button
                onClick={handlTestLogin}
                type="button"
                className="bg-black py-2 px-8 w-full rounded-md text-white font-bold"
              >
                Test
              </Button>
            </div>
          </form>
        </Form>
        <p>
          Already have an account?{" "}
          <Link href="/user/register">
            <span className="text-yellow font-bold">Register</span>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Page;
