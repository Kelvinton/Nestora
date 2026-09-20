import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#12372A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        {/* Footer Content */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold tracking-wide"
            >
              NESTORA
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
              Discover homes and properties that fit your lifestyle,
              budget, and future.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:bg-white hover:text-[#12372A]"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:bg-white hover:text-[#12372A]"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:bg-white hover:text-[#12372A]"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:bg-white hover:text-[#12372A]"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 font-semibold">
              Explore
            </h3>

            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/properties"
                  className="hover:text-white"
                >
                  Properties
                </Link>
              </li>

              <li>
                <Link
                  to="/agents"
                  className="hover:text-white"
                >
                  Agents
                </Link>
              </li>

              <li>
                <Link
                  to="/favorites"
                  className="hover:text-white"
                >
                  Favorites
                </Link>
              </li>
            </ul>
          </div>

          {/* Property */}
          <div>
            <h3 className="mb-5 font-semibold">
              Property
            </h3>

            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link
                  to="/properties"
                  className="hover:text-white"
                >
                  Apartments
                </Link>
              </li>

              <li>
                <Link
                  to="/properties"
                  className="hover:text-white"
                >
                  Houses
                </Link>
              </li>

              <li>
                <Link
                  to="/properties"
                  className="hover:text-white"
                >
                  Villas
                </Link>
              </li>

              <li>
                <Link
                  to="/properties"
                  className="hover:text-white"
                >
                  All Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-semibold">
              Contact
            </h3>

            <ul className="space-y-3 text-sm text-white/70">
              <li>Lagos, Nigeria</li>

              <li>
                <a
                  href="tel:+2348000000000"
                  className="hover:text-white"
                >
                  +234 800 000 0000
                </a>
              </li>

              <li>
                <a
                  href="mailto:hello@nestora.com"
                  className="hover:text-white"
                >
                  hello@nestora.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Nestora. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              to="/"
              className="hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="hover:text-white"
            >
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;