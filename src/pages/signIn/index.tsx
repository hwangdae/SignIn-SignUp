import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerSchema } from "@/validators/auth";
import Link from "next/link";
import { off } from "process";
import { zodResolver } from "@hookform/resolvers/zod";

type RegisterInput = z.infer<typeof registerSchema>;

const index = () => {
  const form = useForm<RegisterInput>({
    resolver:zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data:RegisterInput) => {
    alert(JSON.stringify(data,null,2))
  };

  return (
    <Card
      className={cn(
        "w-[350px] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      )}
    >
      <CardHeader>
        <CardTitle className={cn("text-3xl")}>Sign In</CardTitle>
        <CardDescription>어서오세요, 로그인 해주세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 mb-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="아이디" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="비밀번호" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" size={"lg"}>
                <Link href={"/"}>Home</Link>
              </Button>
              <Button type="submit" size={"lg"}>로그인</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default index;
