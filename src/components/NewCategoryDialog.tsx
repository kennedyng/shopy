"use client";
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
import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSession } from "next-auth/react";
import { useSWRConfig } from "swr";

import useCreateCategory from "@/app/services/category/useCreateCategory";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useFormState } from "react-dom";
import { createCategory } from "@/lib/server/category/createCategory";
import { Loader2 } from "lucide-react";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const initialFormState = {
  ok: false,
};
const NewCategoryDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [state, formAction] = useFormState(createCategory, initialFormState);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit({ name }: z.infer<typeof FormSchema>) {
    const formData = new FormData();

    formData.append("name", name);

    startTransition(() => formAction(formData));

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" className="w-full " size={"sm"}>
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

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        <DialogFooter>
          <Button
            type="button"
            disabled={isPending}
            onClick={() => form.handleSubmit(onSubmit)()}
          >
            {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Save"}
          </Button>

          <DialogClose />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewCategoryDialog;
