import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
import Banner from "@/components/legalBanner/Banner"
import "./globals.css";
import { FaFacebook, FaInstagramSquare, FaTiktok } from "react-icons/fa";

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
      <body className={inter.className}>
        {children}

        <div style={{height:'3vh', background:'#000'}}></div>
      
        <footer className="w-full border-t-foreground/10 p-8 flex justify-center text-center text-xs footer">
          <p>
            Made by: {" "}
            <Link
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
              style={{paddingRight:'20px'}} 
              >
              Mora Dev.
            </Link>
            {/* <span style={{paddingRight:'20px'}} >Siguenos:</span> */}
          </p>
          <br/>
          
          <Link style={{paddingRight:'20px'}} {...{href: '/'} }target="_blank" > 
              <i > <FaFacebook /></i>
          </Link >
          
          <Link style={{paddingRight:'20px'}}  {...{href: 'https://www.instagram.com/ultimochisme/'}} target="_blank"> 
          <i > <FaInstagramSquare /> </i>
          </Link>
          
          <Link style={{paddingRight:'20px'}}  {...{href: 'https://www.tiktok.com/search?lang=en&q=%40ultimochisme&t=1713234158046'}} target="_blank" > 
          <i > <FaTiktok /> </i>
          </Link>
        </footer>
      <Banner/>


      </body>
    </html>
  );
}
