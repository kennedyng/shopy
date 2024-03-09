import React, { FC } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  open: boolean | true | false;
}

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { TextArea } from "./ui/text-area";
import { Button } from "./ui/button";
import NewCategoryInput from "./NewCategoryInput";
import { MdAdd } from "react-icons/md";
const FormSchema = z.object({
  name: z.string({ required_error: "name is required" }),
  note: z
    .string()
    .min(150, {
      message: "Username must be at least 8 characters.",
    })
    .optional(),
  image: z
    .string()
    .min(150, {
      message: "Username must be at least 8 characters.",
    })
    .optional(),

  category: z
    .string()
    .min(150, {
      message: "Username must be at least 8 characters.",
    })
    .optional(),
});
const NewItemSidebar: FC<Props> = ({ open }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      note: "",
      image: "",

      category: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(JSON.stringify(data));
  }
  return (
    <aside
      className={`${
        open ? "translate-x-0" : "translate-x-full"
      } fixed w-[calc(100%-61px)] bg-[#FAFAFE] h-screen overflow-y-auto  top-0 right-0 px-[40px] py-[34px] lg:w-[389px] duration-200`}
    >
      <h4 className="mb-[33px] text-lg font-medium">Add a new item</h4>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-[10px]"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-[6px] text-sm font-medium text-[#34333A]">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-[#BDBDBD] focus:border-primary-main text-sm h-[58px] px-[17px]"
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
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-[6px] text-sm font-medium text-[#34333A]">
                  Note (Optional)
                </FormLabel>
                <FormControl>
                  <TextArea
                    rows={8}
                    cols={8}
                    className="border-[#BDBDBD] focus:border-primary-main  text-sm  "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-[6px] text-sm font-medium text-[#34333A]">
                  Image url (Optional)
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-[#BDBDBD] focus:border-primary-main text-sm h-[58px] px-[17px]"
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
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-[6px] text-sm font-medium text-[#34333A]">
                  Category
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border-[#BDBDBD]  focus:border-primary-main text-sm h-[58px] px-[17px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                    <div className="text-center">
                      <Button variant={"outline"} size={"sm"}>
                        <MdAdd />
                        new category
                      </Button>
                    </div>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <div className="flex flex-row gap-[18px]">
              <button type="button">cancel</button>
              <button
                type="submit"
                className="bg-primary-main text-white rounded-xl font-bold h-[61px] w-[87px]"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </Form>
    </aside>
  );
};

export default NewItemSidebar;
