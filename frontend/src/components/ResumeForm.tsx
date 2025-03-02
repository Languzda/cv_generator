import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Lastname must be at least 2 characters.",
  }),
  skills: z.array(z.string()).nonempty({
    message: "You must have at least one skill.",
  }),
});

function SkillInput({ index, form }: { index: number; form: any }) {
  return (
    <FormField
      name={`skills.${index}`}
      control={form.control}
      defaultValue=""
      render={({ field }) => (
        <>
          <FormItem>
            <FormLabel>{`Skill number ${index}`}</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display skill.
            </FormDescription>
            <FormMessage />
          </FormItem>
        </>
      )}
    />
  );
}

export function ResumeForm() {
  const [skillInputs, setSkillInputs] = useState(1);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      lastname: "",
      skills: [""],
    },
  });

  const addInput = () => {
    setSkillInputs((prev) => {
      console.log(prev);
      return prev + 1;
    });
  };

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>lastName</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display lastname.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {Array.from({ length: skillInputs }).map((_, index) => (
          <SkillInput key={index} index={index} form={form.control} />
        ))}

        <Button type="submit">Submit</Button>
        <Button type="button" onClick={addInput}>
          {" "}
          Click me{" "}
        </Button>
      </form>
    </Form>
  );
}
