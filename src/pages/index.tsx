import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Home = () => {
  const [step, setStep] = useState<number>(0);
  return (
    <div className="w-[350px] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[350px]  bg-gradient-to-b from-red-500 to-orange-500">
        <CardHeader>
          <CardTitle className="text-white text-[34px]">
            Welcome,
            <br />
            back
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
          <Button variant={"outline"}>계정 만들기</Button>
          <Button variant={"outline"}>로그인</Button>
          </div>
        </CardContent>
      </Card>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>계정 만들기</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="email" placeholder="이메일" />
                <Input id="lastName" placeholder="성" />
                <Input id="firstName" placeholder="이름" />
                <Input id="phone" placeholder="휴대폰 번호" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Home;
