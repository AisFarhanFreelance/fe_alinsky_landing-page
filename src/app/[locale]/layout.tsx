import { helvetica, satoshi } from "@/lib/fonts/fonts";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";

// import Navbar from "@/components/navbar/navbar";

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
    icon: "assets/logo/alinsky-icon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${helvetica.variable} ${satoshi.variable} ${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NextIntlClientProvider messages={messages}>
          <div>
            <div className="fixed top-0 right-0 left-0 z-50">
              {/* <Navbar /> */}
            </div>
            <main className="overflow-hidden">{children}</main>
            {/* <div>
              <Footer />
            </div> */}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
