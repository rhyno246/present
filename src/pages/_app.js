import "@/styles/style.css";
import App from 'next/app'
import { getMenu } from "./api/menu";
import Layout from "@/components/layout";

export default function MyApp({ Component, pageProps , data  }) {
  return <>
  <Layout data={data}>
    <Component {...pageProps} />
  </Layout>
  </>;
}
MyApp.getInitialProps = async (context) => {
  const menu = await getMenu();
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, data : menu }
}