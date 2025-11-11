import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClientProvider } from "./ClientProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sufiyan's Portfolio",
  description: "Simple Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ubuntu.variable} ${roboto.variable} antialiased relative`}
      >
        <ThemeProvider>
          <ClientProvider>{children}</ClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
