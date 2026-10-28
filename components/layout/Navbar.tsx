"use client";

import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Produk", href: "#produk" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#beranda" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-pink-600 flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-pink-700 group-hover:text-pink-800 transition-colors">
            BH<span className="text-pink-400">store</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-600 hover:text-pink-600 font-medium transition-colors text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#produk"
          className="hidden md:inline-flex items-center gap-2 bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-pink-700 transition-colors"
        >
          <ShoppingBag className="w-4 h-4" />
          Belanja Sekarang
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-pink-600 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-pink-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-pink-600 font-medium py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#produk"
            onClick={handleLinkClick}
            className="inline-flex items-center justify-center gap-2 bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-pink-700 transition-colors mt-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Belanja Sekarang
          </a>
        </div>
      )}
    </header>
  );
}
