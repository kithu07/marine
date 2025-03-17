"use client";

import { PlayCircle, Apple } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white py-4 px-32 flex justify-between items-center">

      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="text-xl font-bold">Marine Radar</span>
      </Link>

    <div className="flex items-center gap-4">
        <div className="w-12 h-9 flex items-center justify-center bg-white rounded-2xl shadow-md">
            <img src="/android.png" alt="Play Store" className="w-6 h-6" />
        </div>
        <div className="w-12 h-9 flex items-center justify-center bg-white rounded-2xl shadow-md">
            <img src="/apple.png" alt="App Store" className="w-6 h-6" />
        </div>
    </div>

    </nav>
  );
}
