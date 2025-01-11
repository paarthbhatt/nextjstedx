import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const mobileLinkStyles =
    "text-white text-xl font-semibold py-3 px-6 w-full text-center hover:text-[#eb0028] transition duration-300";
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-black shadow-md">
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/images/logo-rights.png"
            alt="TedX Logo"
            className="w-auto h-8 cursor-pointer transition-transform duration-500 hover:scale-110"
          />
        </Link>
      </div>
      <nav className="flex-1 flex justify-center space-x-8 hidden md:flex">
        <Link
          href="/speakers"
          className="text-white hover:text-[#eb0028] transition duration-300"
        >
          Speakers
        </Link>
        <Link
          href="/sponsor"
          className="text-white hover:text-[#eb0028] transition duration-300"
        >
          Sponsors
        </Link>
        <Link
          href="/rewind"
          className="text-white hover:text-[#eb0028] transition duration-300"
        >
          Rewind
        </Link>
        <Link
          href="/about"
          className="text-white hover:text-[#eb0028] transition duration-300"
        >
          About
        </Link>
      </nav>
      <div className="flex items-center space-x-4 hidden md:flex">
        <Link
          href="/merchandise"
          className="text-white border-2 border-[#eb0028] px-4 py-2 rounded-md hover:bg-[#eb0028] hover:text-white transition duration-300"
        >
          Merchandise
        </Link>

        <Link
          href="/register"
          className="bg-[#eb0028] text-white px-4 py-2 rounded-md hover:bg-[#fc4f4f] transition-colors duration-300"
        >
          Tickets
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isMenuOpen ? (
            <XIcon className="w-8 h-8 text-white" />
          ) : (
            <MenuIcon className="w-8 h-8 text-white" />
          )}
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-between items-center transition-all duration-500`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white text-3xl focus:outline-none hover:text-[#eb0028]"
        >
          <XIcon className="w-8 h-8" />
        </button>
        <div className="flex flex-col space-y-4 flex-grow justify-center">
          <Link href="/" className={mobileLinkStyles}>
            Speakers
          </Link>
          <Link href="/sponsor" className={mobileLinkStyles}>
            Sponsors
          </Link>
          <Link href="/rewind" className={mobileLinkStyles}>
            Rewind
          </Link>
          <Link href="/about" className={mobileLinkStyles}>
            About
          </Link>
          <Link href="/merchandise" className={mobileLinkStyles}>
            Merchandise
          </Link>
        </div>
        <div className="mt-8 mb-36">
          <Link
            href="/register"
            className="bg-[#eb0028] text-white px-40 py-3 rounded-md text-2xl w-auto text-center hover:bg-[#fc4f4f] transition-colors duration-300"
          >
            Tickets
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;