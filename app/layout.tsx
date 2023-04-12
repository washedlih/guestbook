import "./globals.css";
import clsx from "clsx";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const erode = localFont({
  src: "../public/Erode-Medium.otf",
  variable: "--font-erode",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Guestbook by Lih",
  description: "A simple guestbook by washedlih",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx(erode.variable, inter.variable)}>
      <body className="mx-6 my-8 bg-black md:mt-20">{children}</body>
    </html>
  );
}
