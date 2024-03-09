import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const NewCategoryInput = () => {
  return (
    <div className="px-4">
      <form action="">
        <div className="flex flex-row w-full gap-2">
          <Input className="py-5 w-[50px]" />
          <Button className="w-[50px]">Add New</Button>
        </div>
      </form>
    </div>
  );
};

export default NewCategoryInput;
