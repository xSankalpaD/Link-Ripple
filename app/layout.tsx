import type { Metadata } from "next";
import "./globals.css";
import 'react-toastify/ReactToastify.css';
import NavBar from "@/components/parts/NavBar";
import { UserProvider } from "@/contexts/userContext";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Link Ripple",
  description: "Share everything in one place and grow your digital footprint effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="flex flex-col min-h-screen">
          <NavBar />
          {children}
          <ToastContainer />
        </body>
      </UserProvider>
    </html>
  );
}
