import { useState } from "react"; 
import { Heart, Menu, X } from "lucide-react";
import logo from "../../assets/images/nestoraLogo.png";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-[#F8F7F3]/95 backdrop-blur-md dark:border-gray-800 dark:bg-[#111817]/95">

      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">

          <img
            src={logo}
            alt="Nestora"
            className="h-10 w-10 object-contain"
          />

          <span className="text-xl font-bold tracking-tight text-[#12372A] dark:text-white">
            NESTORA
          </span>

        </a>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#"
            className="text-[#1F2933] transition-colors hover:text-[#12372A] dark:text-gray-200 dark:hover:text-white font-bold"
          >
            Buy
          </a>

          <a
            href="#"
            className="text-[#1F2933] transition-colors hover:text-[#12372A] dark:text-gray-200 dark:hover:text-white font-bold"
          >
            Rent
          </a>

          <a
            href="#"
            className="text-[#1F2933] transition-colors hover:text-[#12372A] dark:text-gray-200 dark:hover:text-white font-bold"
          >
            Sell
          </a>

          <a
            href="#"
            className="text-[#1F2933] transition-colors hover:text-[#12372A] dark:text-gray-200 dark:hover:text-white font-bold"
          >
            Agents
          </a>

        </div>


        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 md:flex">
          
          <DarkModeToggle />
          <button className="flex items-center gap-2 text-sm font-medium text-[#1F2933] transition-colors hover:text-[#12372A] dark:text-gray-200 dark:hover:text-white">
            <Heart size={18} strokeWidth={1.8} />
              Saved
          </button>

          <button className="text-sm font-medium text-[#1F2933] transition-colors hover:text-[#12372A] dark:text-gray-200 dark:hover:text-white">
            Sign in
          </button>

          <button className="rounded-lg bg-[#12372A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#315C48]">
            List Property
          </button>

        </div>

        
        {/* Mobile Menu Button */}
        <div className=" flex items-center gap-3 md:hidden">

          <DarkModeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-[#12372A] dark:text-white">

            {isMenuOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>
        </div>
        
      </nav>

      {/* Mobile View */}
      <div
        className={`overflow-hidden border-t border-gray-200 bg-[#F8F7F3] dark:border-gray-800 dark:bg-[#111817] transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "max-h-125 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-6">

          {/* Navigation Links */}
          <div className="flex flex-col gap-5">

            <a
              href="#"
              className="text-base font-medium text-[#1F2933] transition-colors hover:text-[#12372A] dark:text-gray-200 dark:hover:text-white "
            >
              Buy
            </a>

            <a
              href="#"
              className="text-base font-medium text-[#1F2933] transition-colors hover:text-[#12372A] dark:text-gray-200 dark:hover:text-white "
            >
              Rent
            </a>

            <a
              href="#"
              className="text-base font-medium text-[#1F2933] transition-colors hover:text-[#12372A] dark:text-gray-200 dark:hover:text-white"
            >
              Sell
            </a>

            <a
              href="#"
              className="text-base font-medium text-[#1F2933] transition-colors hover:text-[#12372A] dark:text-gray-200 dark:hover:text-white"
            >
              Agents
            </a>

          </div>

          <div className="my-6 border-t border-gray-200" />

          {/* Actions */}
          <div className="flex flex-col gap-5">

            <button className="flex items-center gap-2 text-base font-medium text-[#1F2933] dark:text-gray-200 dark:hover:text-white">
              <Heart size={19} strokeWidth={1.8} />
              Saved Properties
            </button>

            <button className="text-left text-base font-medium text-[#1F2933] dark:text-gray-200 dark:hover:text-white">
              Sign in
            </button>

            <button className="w-full rounded-lg bg-[#12372A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#315C48]">
              List Property
            </button>

          </div>

        </div>
      </div>

    </header>
  )
}

export default Navbar;