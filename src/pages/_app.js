import "@/styles/style.css";
import App from 'next/app'
import { getMenu } from "./api/menu";
import Layout from "@/components/layout";
import { SessionProvider } from "next-auth/react"

export default function MyApp({ Component, pageProps , data , session  }) {
  return <SessionProvider session={session}>
  <Layout data={data}>
    <Component {...pageProps} />
  </Layout>
  </SessionProvider>;
}
MyApp.getInitialProps = async (context) => {
  const menu = await getMenu();
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, data : menu }
}