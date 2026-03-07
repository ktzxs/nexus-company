import type { Metadata } from "next";
import { Unbounded } from 'next/font/google';
import './globals.css';
import MiddleNav from "@/components/NavBar/MiddleNav";

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  weight: '400',
  style: 'normal',
})

export const metadata: Metadata = {
  title: "nexus-company",
  description: "Loja de roupas femininas e masculinas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${unbounded.variable}`}
      >
        <MiddleNav />
        {children}
      </body>
    </html>
  );
}
