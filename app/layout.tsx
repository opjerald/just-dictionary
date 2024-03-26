import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Just Dictionary",
  description: "Dictionary application made by OPJD",
  icons: [
    {
      url: "/svg/dark-icon.svg",
      media: "(prefers-color-scheme: light)",
    },
    {
      url: "/svg/light-icon.svg",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(lora.variable, inter.variable, "font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
