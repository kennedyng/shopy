"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { createCategory } from "@/app/services/actions";
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
import { toast } from "sonner";
const initialState = {
  categoryName: "",
};
const NewCategoryDialog = () => {
  const [categoryName, setCategoryName] = useState<string>("");
  const handleCreateCategory = async () => {
    const form = new FormData();
    form.append("categoryName", categoryName);
    const response = await createCategory(form);
    setOpen(false);
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-primary-main" size={"sm"}>
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
        <Input onChange={handleOnChange} name="categoryName" />
        <DialogFooter>
          <DialogClose>
            <Button variant={"destructive"}>Cancel</Button>
          </DialogClose>
          <Button
            disabled={categoryName.length < 2}
            onClick={handleCreateCategory}
            className="bg-primary-main font-bold"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewCategoryDialog;
