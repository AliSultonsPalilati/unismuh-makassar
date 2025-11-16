import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import kontakData from "@/data/kontak.json";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tentang */}
          <div>
            <h3 className="text-lg font-bold mb-4">Universitas Muhammadiyah Makassar</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Kampus Islam Berkemajuan yang berkomitmen mencetak generasi unggul berakhlak mulia.
            </p>
            <div className="flex space-x-3">
              <a href={kontakData.sosmed.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href={kontakData.sosmed.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href={kontakData.sosmed.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href={kontakData.sosmed.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Link Cepat */}
          <div>
            <h3 className="text-lg font-bold mb-4">Link Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-secondary transition-colors">Beranda</Link></li>
              <li><Link to="/profil" className="hover:text-secondary transition-colors">Profil Kampus</Link></li>
              <li><Link to="/program-studi" className="hover:text-secondary transition-colors">Program Studi</Link></li>
              <li><Link to="/pendaftaran" className="hover:text-secondary transition-colors">Alur Pendaftaran</Link></li>
              <li><Link to="/fasilitas" className="hover:text-secondary transition-colors">Fasilitas</Link></li>
              <li><Link to="/kontak" className="hover:text-secondary transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontak Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">{kontakData.alamat}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-primary-foreground/80">{kontakData.telepon}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-primary-foreground/80">{kontakData.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Universitas Muhammadiyah Makassar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
