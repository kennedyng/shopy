"use client";

import { logoIcon } from "@/assets";
import Input from "@/components/reusable/Input";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface IFormInputs {
  email: string;
  password: string;
}
const RegsiterForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    register,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: IFormInputs) => {
    alert(JSON.stringify(data));
  };
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

        <button
          type="submit"
          className="h-[45px] bg-primary-main text-white rounded-lg"
        >
          register
        </button>
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
