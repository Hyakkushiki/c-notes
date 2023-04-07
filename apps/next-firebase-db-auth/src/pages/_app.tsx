import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
// import { AuthUserProvider } from "../context/AuthUserProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <AuthUserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </AuthUserProvider>
  );
}
