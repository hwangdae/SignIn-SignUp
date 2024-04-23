import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div>
        <Component {...pageProps} />
      </div>
      <ModeToggle className={"absolute top-6 right-6"} />
    </ThemeProvider>
  );
}
