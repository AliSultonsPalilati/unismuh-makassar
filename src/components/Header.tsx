import { useState } from "react";
// --- DIUBAH ---
// Mengganti 'useLocation' dengan 'NavLink' untuk link aktif
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Beranda", path: "/" },
  { name: "Profil Kampus", path: "/profil" },
  { name: "Program Studi", path: "/program-studi" },
  { name: "Alur Pendaftaran", path: "/pendaftaran" },
  // --- DIUBAH DI SINI ---
  { name: "Prestasi", path: "/prestasi" }, // path diubah dari /fasilitas
  { name: "Kontak", path: "/kontak" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // --- DIHAPUS ---
  // const location = useLocation();
  // const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between px-4">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/logo-unismuh.png" 
            alt="Logo Unismuh" 
            className="h-12 w-auto object-contain" 
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-bold text-primary leading-tight">UNIVERSITAS</span>
            <span className="text-xs text-muted-foreground leading-tight">MUHAMMADIYAH MAKASSAR</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            // --- DIUBAH: Menggunakan NavLink ---
            <NavLink
              key={item.path}
              to={item.path}
              // --- DIUBAH: Logika className 'isActive' dari NavLink ---
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-primary font-bold bg-primary/10" // Style jika aktif
                    : "text-foreground/80 hover:text-foreground hover:bg-muted" // Style default
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <Link to="/pendaftaran">
            <Button variant="default" className="bg-secondary hover:bg-secondary/90 text-white">
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
            // --- DIUBAH: Menggunakan NavLink ---
            <NavLink
              key={item.path}
              to={item.path}
              // --- DIUBAH: Logika className 'isActive' dari NavLink ---
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-primary font-bold bg-primary/10"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                )
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <Link to="/pendaftaran" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="default" className="w-full mt-2 bg-secondary hover:bg-secondary/90 text-white">
              Daftar Sekarang
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
