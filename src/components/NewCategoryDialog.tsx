import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import prisma from "@/lib/db";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const createCategory = async (formData: FormData) => {
  // const data = prisma.category.create({
  //   data: {
  //     name:
  //   }
  // })

  const categoryName = formData.get("categoryName");

  console.log;
};
const NewCategoryDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size={"sm"}>
          new category
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Category</DialogTitle>
          <DialogDescription>
            provide name of the new category
          </DialogDescription>
        </DialogHeader>

        <Input name="categoryName" />
        <DialogFooter>
          <DialogClose>
            <Button variant={"destructive"}>Cancel</Button>
          </DialogClose>
          <Button className="bg-primary-main font-bold">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewCategoryDialog;
