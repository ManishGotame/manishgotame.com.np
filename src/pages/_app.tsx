import Layout from "@/components/Layout";
import { SidebarProvider } from "@/Providers";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
 return (
  <SidebarProvider>
   <Layout>
    <Component {...pageProps} />
   </Layout>
  </SidebarProvider>
 );
}
