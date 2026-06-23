import type { Metadata } from "next";
import "./globals.scss";
import classes from "./layout.module.scss";
import { siteConfig } from "../config/metadata";
import { Providers } from "@/components/providers/Providers";
import Footer from "@/components/loyouts/mainlayout/Footer/Footer";
import { Header } from "@/components/loyouts/mainlayout/Header/Header";
import { ClientLayout } from "@/components/loyouts/mainlayout/ClientLayout/ClientLayout";
import { ToastContainer } from "react-toastify";
import { UserLoader } from "@/components/providers/UserLoader";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/logo/favicon.svg",
  },

  openGraph: {
    title: siteConfig.fullName,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <UserLoader />

          <Header />

          <ClientLayout>{children}</ClientLayout>

          <Footer />

          <ToastContainer
            role="alert"
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
            theme="light"
            className={classes.toastContainer}
          />
        </Providers>
      </body>
    </html>
  );
}
