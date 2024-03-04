import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import { ThemeProvider } from "next-themes";


import { ToastContainer } from "react-toastify";
//import { useLanguage } from "../../hooks/useLanguage";
import NextNProgress from "nextjs-progressbar";
import store from "@/lib/store";
import Header from "@/components/header";
import Footer from "@/components/layout/Layout.footer";


const RootLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { locale } = { locale: "en" };
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Head>
          <title>Code Vui Vẻ</title>
        </Head>
        <div className="flex flex-col min-h-[100vh]">
          <NextNProgress height={7} />
          <Header />
          <main className="flex-grow  md:mt-40">{children}</main>
          <Footer />
        </div>
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          rtl={locale === "en" ? false : true}
          position={locale === "en" ? "top-right" : "top-left"}
        />
      </ThemeProvider>
    </Provider>
  );
};

export default RootLayout;