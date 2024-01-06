import React from "react";
import { logoIcon } from "@/assets";
import Input from "@/components/ui/Input";
import Image from "next/image";
import Link from "next/link";

type FormInput = {
  email: string;
  password: string;
};
const RegsiterForm = () => {
  return (
    <form className=" flex  flex-col gap-2 bg-white shadow-lg w-full md:w-[450px] rounded-md top p-10">
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
        <Input type="text" placeholder="kennedyngosa@gmail.com" />
        <Input type="password" placeholder="password" />
        <button
          type="submit"
          className="h-[50px] bg-primary-main text-white rounded-xl"
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
    </form>
  );
};

export default RegsiterForm;
