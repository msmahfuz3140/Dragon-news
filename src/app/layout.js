import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"])

import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Dragon News",
  description: "Best News portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} w-[97%] mx-auto md:w-[90%] mx-auto flex flex-col`}>

        {children}
      </body>
    </html>
  );
}
