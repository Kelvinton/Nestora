import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import logo from "../../assets/images/nestoraLogo.png";
import { useFavorites } from "../../context/FavoritesContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { favorites } = useFavorites();
  const location = useLocation();

  const currentListing = new URLSearchParams(
    location.search
  ).get("listing");

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    {
      label: "Buy",
      to: "/properties?listing=sale",
      active: location.pathname === "/properties" &&
        currentListing === "sale",
    },
    {
      label: "Rent",
      to: "/properties?listing=rent",
      active: location.pathname === "/properties" &&
        currentListing === "rent",
    },
    {
      label: "Agents",
      to: "/agents",
      active: location.pathname === "/agents",
    },
    {
      label: "About",
      to: "/about",
      active: location.pathname === "/about",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-[#F8F7F3]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="Nestora"
            className="h-10 w-10 object-contain"
          />

          <span className="text-xl font-bold tracking-wide text-[#12372A]">
            NESTORA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={() =>
              `text-base font-medium transition-colors ${
                link.active
                  ? "text-[#D6A756]"
                  : "text-[#12372A] hover:text-[#D6A756]"
              }`
            }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 md:flex">
          <Link
            to="/favorites"
            className="relative flex items-center gap-2 text-sm font-medium text-[#12372A] transition-colors hover:text-[#D6A756]"
          >
            <Heart
              size={18}
              fill={favorites.length > 0 ? "currentColor" : "none"}
            />

            <span>Saved</span>

            {favorites.length > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D6A756] px-1.5 text-[10px] font-bold text-white">
                {favorites.length}
              </span>
            )}
          </Link>

          <Link
            to="/list-property"
            className="rounded-xl bg-[#12372A] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#315C48]"
          >
            List Property
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#12372A] transition hover:bg-gray-100 md:hidden"
          aria-label={
            isMenuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-gray-200 bg-[#F8F7F3] transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "max-h-150 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={closeMenu}
                className={() =>
                  `border-b border-gray-100 py-4 text-xl font-medium transition-colors ${
                    link.active
                      ? "text-[#D6A756]"
                      : "text-[#12372A]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/favorites"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-gray-100 py-4 text-sm font-medium text-[#12372A]"
            >
              <span className="flex items-center gap-2">
                <Heart
                  size={18}
                  fill={
                    favorites.length > 0
                      ? "currentColor"
                      : "none"
                  }
                />
                Saved
              </span>

              {favorites.length > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D6A756] px-1.5 text-[10px] font-bold text-white">
                  {favorites.length}
                </span>
              )}
            </Link>

            <Link
              to="/list-property"
              onClick={closeMenu}
              className="mt-5 rounded-xl bg-[#12372A] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#315C48]"
            >
              List Property
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;