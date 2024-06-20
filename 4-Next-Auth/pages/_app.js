import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Layout from "../components/layout/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
