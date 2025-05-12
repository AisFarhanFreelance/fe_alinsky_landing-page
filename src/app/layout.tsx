import { helvetica, satoshi } from "@/lib/fonts/fonts";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import CallToAction from "@/components/call-to-action/call-to-action";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alinsky",
  description:
    "provide tailored digital solutions that respect the unique challenges and aspirations of SMEs. By focusing on cost-effective strategies, personalized service, and cutting-edge technology, we empower businesses to thrive in the digital landscape",
  icons: {
    icon: "assets/logo/alinsky-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helvetica.variable} ${satoshi.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-alinsky-seasalt`}
      >
        <div>
          <div>
            <Navbar />
          </div>
          <main className="mt-2.5">{children}</main>
          <div>
            <CallToAction />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
