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

## 회원가입 단계 설정
`useState`훅을 사용하여 회원가입 양식의 현재 단계를 관리합니다.(첫번째 단계 0, 두번째 단계 1)
````js
const [step, setStep] = useState<number>(0);
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

## 양식 렌더링
import한 components에서 반환되는 JSX 양식을 사용하여 카드 레이아웃을 구성합니다. 양식은 세부 정보와 비밀번호 설정 두 단계로 구분됩니다. `motion.div`의 요소는 단계를 나타내며 `framer-motion`은 단계 전환 애니메이션을 합니다.
````js
return (
      <Card className={cn("w-[350px] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2")}>
        // ... other JSX code
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 relative overflow-x-hidden"
            >
              // ... form fields for step 1 and step 2
              <div className={"flex gap-2"}>
                // ... navigation and submission buttons
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
);
````

## Form Field
제어 양식 필드를 작성하기 위한 구성요소 입니다.
````js
<FormField
  control={form.control}
  name="username"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl>
        <Input placeholder="shadcn" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
````


