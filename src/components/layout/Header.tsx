"use client";

import { Handshake } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        {/* LOGO + TITLE */}
        <div className="flex items-center gap-4">
          
          {/* LOGO */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/20">
            <Handshake
              size={24}
              className="text-white"
            />
          </div>

          {/* TEXT */}
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Legal Dashboard
            </h1>

            <p className="text-sm text-gray-500">
              Workflow & case management
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}