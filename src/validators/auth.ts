import { z } from "zod";

const PHONE_REGEX = /^010\d{8}$/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

export const registerSchema = z.object({
  email: z.string().email("이메일 형식을 입력해주세요."),
  lastName: z.string().min(1, "성을 입력해주세요.").max(3),
  firstName: z.string().min(1, "이름을 입력해주세요.").max(5),
  phone: z
    .string()
    .min(11, "연락처는 11자리여야 합니다.")
    .max(11, "연락처는 11자리여야 합니다.")
    .refine(
      (value) => PHONE_REGEX.test(value),
      "010으로 시작하는 11자리 숫자를 입력해주세요."
    ),
  gender: z.string().min(2, { message: "성별을 선택해주세요." }),
  password: z
    .string()
    .min(8, { message: "8자리 이상 입력해주세요." })
    .max(15, { message: "15자리 이하로 입력해주세요." })
    .refine(
      (value) => PASSWORD_REGEX.test(value),
      "영문, 숫자, 특수문자를 포함해야 합니다."
    ),
    confirmPassword: z
    .string()
    .min(8, { message: "8자리 이상 입력해주세요." })
    .max(15, { message: "15자리 이하로 입력해주세요." })
    .refine(
      (value) => PASSWORD_REGEX.test(value),
      "영문, 숫자, 특수문자를 포함해야 합니다."
    ),
});
