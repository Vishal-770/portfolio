"use client";
import { Geist, Geist_Mono, Edu_QLD_Beginner } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import SplashCursor from "@/blocks/Animations/SplashCursor/SplashCursor";
import Aurora from "@/blocks/Backgrounds/Aurora/Aurora";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased ${Edu.variable} `}
        >
          <div className="min-h-screen w-full">
            <NavBar />
            {children}
            <SplashCursor />
            <div className="absolute top-0 left-0 h-full w-full -z-50">
              <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
              />
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
