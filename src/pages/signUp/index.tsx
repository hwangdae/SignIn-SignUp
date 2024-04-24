import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/validators/auth";
import { motion } from "framer-motion";

type RegisterInput = z.infer<typeof registerSchema>;

const index = () => {
  const [step, setStep] = useState<number>(0);

  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      lastName: "",
      firstName: "",
      phone: "",
      gender: "",
    },
  });
  const validateAndMoveToNextStep = () => {
    //trigger는 React Hook Form에서 제공하는 함수 중 하나. 이 함수를 사용하면, 특정 필드나 전체 폼에 대한 유효성 검사를 수행할 수 있다.
    form.trigger(["email", "lastName", "firstName", "phone", "gender"]);
    //getFieldState는 현재의 인풋의 상태를 가져올 수 있다.
    const emailState = form.getFieldState("email");
    const lastNameState = form.getFieldState("lastName");
    const firstNameState = form.getFieldState("firstName");
    const phoneState = form.getFieldState("phone");
    const genderState = form.getFieldState("gender");
    //isDirty는 인풋필드에 값이 있을 때를 나타냄 즉, clean한 상태의 반대
    //invalid는 유효성 체크
    if (!emailState.isDirty || emailState.invalid) return;
    if (!lastNameState.isDirty || lastNameState.invalid) return;
    if (!firstNameState.isDirty || firstNameState.invalid) return;
    if (!phoneState.isDirty || phoneState.invalid) return;
    if (!genderState.isDirty || genderState.invalid) return;

    setStep(1);
  };
  const onSubmit = (data:RegisterInput) => {
    const {password,confirmPassword} = data;
    if(password !== confirmPassword){
      return alert("비밀번호가 일치하지 않습니다.")
    }
    alert(JSON.stringify(data,null,2))
  };

  return (
    <Card
      className={cn(
        "w-[350px] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      )}
    >
      <CardHeader>
        <CardTitle className={cn("text-3xl")}>Sign Up</CardTitle>
        <CardDescription>필수 정보를 입력해주세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 relative overflow-x-hidden"
          >
            <motion.div
              className={cn("space-y-2  p-1")}
              animate={{ translateX: `${step * -100}%` }}
              style={{ translateX: `${step * -100}%` }}
              transition={{
                ease: "easeInOut",
              }}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="이메일" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-1">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="성" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="이름" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="휴대폰 번호( - 제외)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[100%]">
                          <SelectValue placeholder="성별" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">male</SelectItem>
                          <SelectItem value="female">female</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
            <motion.div
              className={cn("space-y-2 absolute top-0 left-0 right-0  p-1")}
              style={{ translateX: `${(1 - step) * 100}%` }}
              animate={{ translateX: `${(1 - step) * 100}%` }}
              transition={{
                ease: "easeInOut",
              }}
            >
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="password" placeholder="비밀번호 확인" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                className={cn({ hidden: step === 1 })}
              >
                <Link href={"/"} className="">
                  Home
                </Link>
              </Button>
              <Button
                type="button"
                className={cn({ hidden: step === 1 })}
                onClick={validateAndMoveToNextStep}
              >
                Next
              </Button>
              <div className="flex justify-end gap-2">
                <Button type="submit" className={cn({ hidden: step === 0 })}>
                  계정 등록하기
                </Button>
                <Button
                  type="button"
                  className={cn({ hidden: step === 0 })}
                  onClick={() => setStep(0)}
                >
                  Prev
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default index;
