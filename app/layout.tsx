import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House Staff – Home & Living Store",
  description:
    "House Staff Store - the best accessories and furnishings for your home. Check out our selection!",
  icons: {
    icon: "/logo/favicon.svg",
  },
  openGraph: {
    title: "House Staff – Home & Living Store",
    description:
      "House Staff Store - the best accessories and furnishings for your home. Check out our selection!",
    type: "website",
    url: "https://house-staff.onrender.com",
    images: "/logo/logo-share.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "House Staff – Home & Living Store",
    description:
      "House Staff Store - the best accessories and furnishings for your home. Check out our selection!",
    images: "/logo/logo-share.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
