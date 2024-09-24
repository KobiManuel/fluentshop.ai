import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Extralight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-ExtralightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-SemiboldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-general-sans",
});

const clashGrotesk = localFont({
  src: [
    {
      path: "./fonts/ClashGrotesk_Complete/Fonts/WEB/fonts/ClashGrotesk-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk_Complete/Fonts/WEB/fonts/ClashGrotesk-Extralight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk_Complete/Fonts/WEB/fonts/ClashGrotesk-Extralight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk_Complete/Fonts/WEB/fonts/ClashGrotesk-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk_Complete/Fonts/WEB/fonts/ClashGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk_Complete/Fonts/WEB/fonts/ClashGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk_Complete/Fonts/WEB/fonts/ClashGrotesk-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk_Complete/Fonts/WEB/fonts/ClashGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-grotesk",
});

export const metadata: Metadata = {
  title: "fluentshop.ai",
  description: "A creator powered marketplace for modern startup teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable} ${clashGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
