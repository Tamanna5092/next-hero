import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import NavbarPage from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "./services/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero",
  },
  description: "Super Power Next.js Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          // className={roboto.className}
        >
          <NavbarPage></NavbarPage>
          {children}
          <Footer></Footer>
        </body>
      </AuthProvider>
    </html>
  );
}
