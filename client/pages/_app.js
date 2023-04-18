import Layout from "@/Layout/Layout";
import "@/styles/globals.css";
import { Urbanist } from 'next/font/google'

export default function App({ Component, pageProps }) {
  return (
    <div data-theme="light">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
