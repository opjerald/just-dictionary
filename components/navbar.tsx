"use client";

import { BookText } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <BookText strokeWidth={1} className="w-10 h-10 text-gray-400/90" />
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
