import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marine Radar - Track Any Vessel, Anywhere',
  description: 'Stay ahead of the waves with Marine Radar - the ultimate vessel tracking solution',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <div className="relative">
      {/* Navbar at the top */}
      <Navbar />

      {/* Content Section */}
      <div className="flex mx-32">
        {/* Vertical Line as Left Margin */}
        <div className="w-[2px] mt-72 ml-10 border-r-4 border-[#0A84FF] bg-[#0A84FF] shadow-[0_0_20px_#0A84FF]"></div>

        <div className="flex-1 pl-10">
          <main>{children}</main>
        </div>
      </div>
    </div>
    </html>
  );
}

