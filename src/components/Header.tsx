import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Beranda", path: "/" },
  { name: "Profil Kampus", path: "/profil" },
  { name: "Program Studi", path: "/program-studi" },
  { name: "Alur Pendaftaran", path: "/pendaftaran" },
  { name: "Fasilitas", path: "/fasilitas" },
  { name: "Kontak", path: "/kontak" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
            UM
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-primary leading-tight">UNIVERSITAS</span>
            <span className="text-xs text-muted-foreground leading-tight">MUHAMMADIYAH MAKASSAR</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <Link to="/pendaftaran">
            <Button variant="default" className="bg-secondary hover:bg-secondary/90">
              Daftar Sekarang
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden border-t bg-background transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="container px-4 py-4 flex flex-col space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/pendaftaran" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="default" className="w-full bg-secondary hover:bg-secondary/90">
              Daftar Sekarang
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
