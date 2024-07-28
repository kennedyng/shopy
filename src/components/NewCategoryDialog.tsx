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
import React from "react";
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

import useCreateCategory from "@/app/services/useCreateCategory";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const NewCategoryDialog = () => {
  const { data: session } = useSession();

  const [open, setOpen] = React.useState(false);

  const { trigger } = useCreateCategory();
  const { mutate } = useSWRConfig();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit({ name }: z.infer<typeof FormSchema>) {
    trigger(
      { name: name, userId: session?.user.id },
      {
        onSuccess() {
          setOpen(false);
          mutate("user-categories");
        },
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" className="w-full bg-primary-main" size={"sm"}>
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
          <Button type="button" onClick={() => form.handleSubmit(onSubmit)()}>
            Save
          </Button>

          <DialogClose />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewCategoryDialog;
