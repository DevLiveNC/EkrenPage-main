import { useEffect, useState } from "react";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hakkımda", href: "#about" },
  { label: "Paketcikler", href: "#packages" },
  { label: "Dönüşümler", href: "#transformation" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 shadow-lg shadow-black/50" : "bg-transparent"
        }`}
      >
        <div className="max-w-md mx-auto px-5 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <span className="text-black font-bold text-xs" style={{ fontFamily: "Bebas Neue" }}>EC</span>
            </div>
            <span
              className="text-white text-xl tracking-widest font-bold"
              style={{ fontFamily: "Bebas Neue", letterSpacing: "0.15em" }}
            >
              EKREN<span className="text-amber-400">FIT</span>
            </span>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] focus:outline-none"
            aria-label="Menü"
          >
            <span
              className={`block w-6 h-[2px] bg-amber-400 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-amber-400 transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-amber-400 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/98 flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => handleNav(link.href)}
              className={`text-4xl font-bold tracking-widest transition-all duration-300 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              } hover:text-amber-400 text-white`}
              style={{
                fontFamily: "Bebas Neue",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="mt-4 px-8 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold text-lg rounded-full tracking-widest"
            style={{ fontFamily: "Rajdhani" }}
          >
            ÜCRETSİZ DANIŞMANLIK AL
          </button>
        </div>
      </div>
    </>
  );
}
