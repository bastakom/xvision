"use client";

import { MoreHorizontal, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigate({ props }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const {
    story: {
      content: { logo },
    },
  } = props;

  return (
    <header className="bg-transparent py-4 px-10 flex items-center justify-between fixed header top-0 z-50 w-full">
      <Link className="flex items-center" href="/" >
        <Image src={logo.filename} width={150} height={50} alt={logo.alt} />
      </Link>
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/ogonlaser" className="text-black hover:text-gray-900">
          Ögonlaser
        </Link>
        <Link
          href="/linsoperation"
          className="text-black hover:text-gray-900"
        >
          Linsoperation
        </Link>
        <Link
          href="/modern-teknologi"
          className="text-black hover:text-gray-900"
        >
          Modern teknologi
        </Link>
        <Link
          href="/modern-teknologi"
          className="text-white button bg-[#1D383F]"
        >
          Boka konsultation
        </Link>
        <button className="text-black hover:text-gray-900">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </nav>
      <button
        className="md:hidden text-black hover:text-gray-900"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-gray-200 w-64 p-6 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-black hover:text-gray-900"
          onClick={toggleMenu}
        >
          <X className="w-6 h-6" />
        </button>
        <nav className="flex flex-col space-y-4 mt-12">
          <Link
            href="/ogonlaser"
            className="text-black hover:text-gray-900"
            onClick={toggleMenu}
          >
            Ögonlaser
          </Link>
          <Link
            href="/linsoperation"
            className="text-black hover:text-gray-900"
            onClick={toggleMenu}
          >
            Linsoperation
          </Link>
          <Link
            href="/modern-teknologi"
            className="text-black hover:text-gray-900"
            onClick={toggleMenu}
          >
            Modern teknologi
          </Link>
          <button className="text-black hover:text-gray-900 flex items-center">
            <MoreHorizontal className="w-6 h-6 mr-2" /> More options
          </button>
        </nav>
      </div>
    </header>
  );
}
