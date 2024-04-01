import "@/styles/globals.css";
import { FC, PropsWithChildren } from "react";
import { Metadata, Viewport } from "next";
import { Playpen_Sans } from "next/font/google";

const bodyFont = Playpen_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "600"],
});

const headingFont = Playpen_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["700"],
});

export const viewport: Viewport = {
  themeColor: "#18181B",
};

export const metadata: Metadata = {
  title: "Kilian Braquin",
  description:
    "Hello, I'm a full-stack developer that mainly creates websites based on TypeScript, Next.js, React.",
  metadataBase: new URL("https://www.kbraquin.com"),
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
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body className="bg-side-bg">
        <div className="container flex min-h-screen flex-col border-x bg-main-bg pb-3 pt-4 md:border-x-container-border">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
