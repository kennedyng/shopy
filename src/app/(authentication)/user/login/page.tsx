"use client";
import { logoIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
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

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
          />

          <Button
            type="submit"
            className="bg-primary-main rounded-md text-white py-2 px-8 font-bold w-full"
          >
            Login
          </Button>

          <div className="flex flex-row items-center gap-4 my-4">
            <hr className="w-full" />
            or
            <hr className="w-full" />
          </div>

          <div className="flex flex-row justify-center gap-4 ">
            <button
              type="button"
              className="bg-black py-2 px-8 w-full rounded-md text-white font-bold"
            >
              Test
            </button>
          </div>
        </form>

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
