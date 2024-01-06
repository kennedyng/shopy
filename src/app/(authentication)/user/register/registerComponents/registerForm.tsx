"use client";

import React from "react";
import { logoIcon } from "@/assets";
import Input from "@/components/ui/Input";
import Image from "next/image";
import Link from "next/link";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  email: string;
  password: string;
}
const RegsiterForm = () => {
  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

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
      <form className="flex flex-col gap-2">
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="text"
              placeholder="kennedyngosa@gmail.com"
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input type="password" placeholder="*****" {...field} />
          )}
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
