import type { Metadata } from "next";
import { Inter } from "next/font/google";

import LogoutButton from "@/components/logoutButton";
import { Navbar } from "@/components/Navbar";
import DashNav from "@/components/dashNav";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div >
        <DashNav/>
          <ul className="flex justify-center gap-0">
            <li>{children}</li>
            <li className="px-40"><LogoutButton/></li>
          </ul>
        </div>
        
        </body>
    </html>
  );
}
