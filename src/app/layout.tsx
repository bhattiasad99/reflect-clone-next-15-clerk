import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import "./ckeditor.css";
import ImageComponent from "@/components/custom/ImageComponent";
import HeaderComponent from "@/components/usecase/HeaderComponent";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { pageSpace } from "@/constants";


const inter = Inter({ subsets: ['latin'] })

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
    <ClerkProvider>
      <TooltipProvider>
        <html lang="en" >
          <body
            className={`${inter.className} antialiased`}
          >
            <div className="opacity-50 fixed -z-10 inset-0">
              <ImageComponent source={'/global-assets/bg.jpg'} objectFit="cover" alt="background" />
            </div>
            <HeaderComponent />
            <main className={`min-h-screen ${pageSpace}`}>
              {children}
            </main>
            <footer className={`bg-orange-300 py-12 bg-opacity-10 w-full mt-4`}>
              <div className="mx-auto px-4 text-center text-gray-900">
                <p>Made with ❤️ by Asad Zubair Bhatti</p>
              </div>
            </footer>
          </body>
        </html>
      </TooltipProvider>
    </ClerkProvider>

  );
}
