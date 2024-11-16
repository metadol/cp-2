"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ActionButton from "./Button";
import { navItems } from "../data/Sections";
import Image from "next/image";

interface NavItemProps {
  name: string;
  href: string;
  isScrolled: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ name, href, isScrolled }) => (
  <a
    href={href}
    className={`text-primary hover:bg-primary/90 hover:text-primary-foreground px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
      ${isScrolled ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
  >
    {name}
  </a>
);

const DesktopMenu: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => (
  <div className="hidden items-baseline space-x-4 md:flex">
    {navItems.map((item) => (
      <NavItem key={item.name} {...item} isScrolled={isScrolled} />
    ))}
  </div>
);

const MobileMenu: React.FC<{ isMenuOpen: boolean }> = ({ isMenuOpen }) => (
  <div
    className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden`}
    id="mobile-menu"
  >
    <div className="flex flex-col space-y-1 px-2 pb-3 pt-2 sm:px-3">
      {navItems.map((item) => (
        <NavItem key={item.name} {...item} isScrolled={true} />
      ))}
      <div className="mt-4">
        <ActionButton className="w-full" label="Request Demo" calendly={true} />
      </div>
    </div>
  </div>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
      // Always set isVisible to true on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
  ${isScrolled ? "bg-background shadow-sm " : "bg-background md:bg-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Image
              src={'https://cp-site-assets.s3.us-east-1.amazonaws.com/images/cp_logo.png'}
              alt="CloudPositive Logo"
              width={30}
              height={30}
              className="mr-2"
            />
            <span className="text-primary text-2xl font-bold">Cloud Positive</span>
          </div>
          <DesktopMenu isScrolled={isScrolled} />

          <ActionButton
            className={`hidden md:block transition-all duration-300 ease-in-out ${isScrolled ? "opacity-100" : "opacity-80 hover:opacity-100"
              }`}
            label="Request Demo"
            calendly={true}
          />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`block md:hidden`}
          >
            <span className="sr-only">Toggle main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} />
    </nav>
  );
}
