import "@/styles/globals.css"; // ✅ Absolute import from styles
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
