import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevAcademy",
  description: "Learn web development with DevAcademy",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `}
    >
      <main>
        <div className="sticky top-0 z-50 ">
          <Header />
          <Navbar />
        </div>
        <body className="min-h-full flex flex-col ">{children}</body>
      </main>
    </html>
  );
}
