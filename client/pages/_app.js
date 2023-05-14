import Layout from "@/Layout/Layout";
import ContextProvider, { UserContext } from "@/context/UserContext";
import "@/styles/globals.css";
// import { Urbanist } from "next/font/google";

export default function App({ Component, pageProps }) {
  return (
    <div data-theme="light">
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </div>
  );
}
