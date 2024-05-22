# DevCamp - Front Project
회원가입/로그인 페이지 개발 및 유효성 검증 사이트

## Tech Stack
1. React
2. TypeScript
3. React-hook-form
4. zod
5. framer-motion
6. lucide-react

## Site URL
http://signform.vercel.app

## 프로젝트 구조
`@/components/ui` : 이 디렉토리에는 카드, 버튼, 양식 및 기타 관련 UI 구성 요소가 포함되어 있습니다.<br/>
`@/lib` `cn` : (className) 함수와 같은 유틸리티 함수가 저장되는 곳입니다.<br/>
`@/validators` :이 디렉토리에는 인증(auth) 및 선택 옵션을 위한 유효성 검사 스키마가 있습니다.<br/>

## Importing Components
````js
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// ... other imports
````

## Form 설정
사전에 정의된 스키마에 대한 유효성 검사를 하기 위해 `react-hook-form`, `zodResolver`, `registerSchema`와 함께 `useForm`훅을 사용합니다.
````js
const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      // ... other default values
    },
});
````

## Preview
### Main
![image](https://github.com/hwangdae/SignIn-SignUp/assets/105066603/27737518-10c6-4abf-9717-1cd8285ff49f)
### Sign Up
![image](https://github.com/hwangdae/SignIn-SignUp/assets/105066603/d38f739e-a656-49df-aa33-eb8b3049ac1b)
### Sign In
![image](https://github.com/hwangdae/SignIn-SignUp/assets/105066603/d4cac889-a0a6-4b6e-bdba-0b2baf3d3b8c)


