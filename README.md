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

## Preview
### Main
![image](https://github.com/hwangdae/SignIn-SignUp/assets/105066603/27737518-10c6-4abf-9717-1cd8285ff49f)
### Sign Up
![image](https://github.com/hwangdae/SignIn-SignUp/assets/105066603/d38f739e-a656-49df-aa33-eb8b3049ac1b)
### Sign In
![image](https://github.com/hwangdae/SignIn-SignUp/assets/105066603/d4cac889-a0a6-4b6e-bdba-0b2baf3d3b8c)

##File Tree
📦src
 ┣ 📂components
 ┃ ┣ 📂ui
 ┃ ┃ ┣ 📜button.tsx
 ┃ ┃ ┣ 📜card.tsx
 ┃ ┃ ┣ 📜dropdown-menu.tsx
 ┃ ┃ ┣ 📜form.tsx
 ┃ ┃ ┣ 📜input.tsx
 ┃ ┃ ┣ 📜label.tsx
 ┃ ┃ ┗ 📜select.tsx
 ┃ ┣ 📜mode-toggle.tsx
 ┃ ┗ 📜theme-provider.tsx
 ┣ 📂lib
 ┃ ┗ 📜utils.ts
 ┣ 📂pages
 ┃ ┣ 📂signIn
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂signUp
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┗ 📜_document.tsx
 ┣ 📂styles
 ┃ ┗ 📜globals.css
 ┗ 📂validators
 ┃ ┗ 📜auth.ts
