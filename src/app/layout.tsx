"use client";
import { Geist, Geist_Mono, Edu_QLD_Beginner } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import SplashCursor from "@/blocks/Animations/SplashCursor/SplashCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const Edu = Edu_QLD_Beginner({
  variable: "--font-mainfont",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${Edu.variable} `}
      >
        <div className="min-h-screen w-full">
          <NavBar />
          {children}
          <SplashCursor />
        </div>
      </body>
    </html>
  );
}
