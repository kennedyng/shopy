"use client";
import { FC } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import NewCategoryDialog from "./NewCategoryDialog";
import { Input } from "./ui/input";
import { TextArea } from "./ui/text-area";

import { Button } from "./ui/button";
import { toast } from "sonner";
import useCreateItem from "@/app/services/item/useCreateItem";
import useGetCategories from "@/app/services/category/useGetCategories";
import { Loader2 } from "lucide-react";

//form validation
const FormSchema = z.object({
  name: z.string({
    required_error: "name is required",
  }),
  note: z.string({
    required_error: "note is required",
  }),

  image: z.string({
    required_error: "image is required",
  }),

  categoryId: z.string({
    required_error: "category is required",
  }),
});
interface Props {
  open: boolean | true | false;
}

const NewItemSidebar: FC<Props> = ({ open }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { data: categories } = useGetCategories();

  const { trigger: triggerCreateItem, isMutating: isMutatingCreateItem } =
    useCreateItem();
  function onSubmit({
    categoryId,
    image,
    name,
    note,
  }: z.infer<typeof FormSchema>) {
    triggerCreateItem(
      {
        name,
        note,
        imageUrl: image,
        categoryId,
      },
      {
        onSuccess: () =>
          toast("successfully", {
            description: `item  is created`,
          }),
      }
    );
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
            name="categoryId"
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
                    {categories?.map(({ id, name }) => (
                      <SelectItem key={id} value={id}>
                        {name}
                      </SelectItem>
                    ))}
                    <NewCategoryDialog />
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <div className="flex flex-row gap-[18px]">
              <Button
                className=" text-white rounded-xl font-bold h-[61px] w-[87px]"
                type="button"
              >
                cancel
              </Button>
              <Button
                type="submit"
                className="bg-primary-main text-white rounded-xl font-bold h-[61px] w-[87px]"
              >
                {isMutatingCreateItem ? (
                  <Loader2 className="w-5 h-4 animate-spin" />
                ) : (
                  "Save"
                )}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </aside>
  );
};

export default NewItemSidebar;
