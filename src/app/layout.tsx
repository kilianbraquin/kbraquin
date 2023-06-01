import "@/styles/globals.css";
import { FC, PropsWithChildren } from "react";
import { Metadata } from "next";
import { Fathom } from "@/components/Fathom";

export const metadata: Metadata = {
  title: "Kilian Braquin",
  description:
    "Hello, I'm a full-stack developer that mainly creates websites based on TypeScript, Next.js, React.",
  metadataBase: new URL("https://www.kbraquin.com"),
  themeColor: "#18181B",
  openGraph: {
    title: "Kilian Braquin",
    description:
      "Hello, I'm a full-stack developer that mainly creates websites based on TypeScript, Next.js, React.",
    url: "https://www.kbraquin.com",
    siteName: "Kilian Braquin",
    images: [
      {
        url: "https://www.kbraquin.com/images/logo.png",
        width: 1840,
        height: 1840,
        alt: "Kilian Braquin Logo",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en-US",
  },
  twitter: {
    site: "@kbraquin",
    card: "summary_large_image",
  },
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/nne1kqe.css" />
      </head>
      <body className="bg-side-bg">
        <Fathom />
        <div className="container pt-4 pb-3 md:border-x-container-border border-x bg-main-bg min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;