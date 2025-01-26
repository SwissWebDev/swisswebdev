import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./animations.css";
import Navbar from "@/components/Navbar";
import CursorFollower from "@/components/cursor/Cursor";
import TransitionLayout from "@/components/hooks/TransitionLayout";
import Footer from "@/components/footer";

import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Swiss Web Development",
  description: "Swiss Web Development, Design and Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="title"
          content="Swiss Web Development - High-Quality Web Development Services"
        />
        <meta
          name="description"
          content="Swiss Web Development offers top-notch web development services to help businesses grow online. Contact us today to elevate your digital presence!"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.swisswebdev.ch/" />
        <meta
          property="og:title"
          content="Swiss Web Development - High-Quality Web Development Services"
        />
        <meta
          property="og:description"
          content="Swiss Web Development offers top-notch web development services to help businesses grow online. Contact us today to elevate your digital presence!"
        />
        {/* <meta
          property="og:image"
          content="https://www.swisswebdev.ch/meta-image.jpg"
        /> */}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.swisswebdev.ch/" />
        <meta
          property="twitter:title"
          content="Swiss Web Development - High-Quality Web Development Services"
        />
        <meta
          property="twitter:description"
          content="Swiss Web Development offers top-notch web development services to help businesses grow online. Contact us today to elevate your digital presence!"
        />
        {/* <meta
          property="twitter:image"
          content="https://www.swisswebdev.ch/meta-image.jpg"
        /> */}

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Swiss Web Development" />
        <meta name="theme-color" content="#007ACC" />
        <link rel="canonical" href="https://www.swisswebdev.ch/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-auto`}
      >
        {/* <CursorFollower /> */}{" "}
        <TransitionLayout>
          <Navbar />
          {children}
        </TransitionLayout>
        <Toaster />
      </body>
    </html>
  );
}
