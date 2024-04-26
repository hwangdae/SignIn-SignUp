import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import router from "next/router";

const Home = () => {
  return (
    <Card
      className={cn(
        "w-[350px] bg-gradient-to-b from-red-400 to-orange-400  absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      )}
    >
      <CardHeader>
        <CardTitle className={cn("text-white text-[38px] leading-tight")}>
          Welcome,
          <br />
          back :)
        </CardTitle>
        <CardDescription className={cn("pb-7 text-white")}>
          shadcn, React-hook-form, zod를 활용한
          <br />
          로그인/회원가입 폼 만들기
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => router.push("/signUp")}
            variant={"outline"}
            size={"lg"}
            className={"rounded-3xl"}
          >
            Sign Up
          </Button>
          <Button
            onClick={() => router.push("/signIn")}
            variant={"outline"}
            size={"lg"}
            className={cn("rounded-3xl")}
          >
            Sign In
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Home;
