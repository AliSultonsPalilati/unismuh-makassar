// --- DIUBAH ---
// Menghapus useState, Input, Textarea, dan useToast karena form dihapus
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import kontakData from "@/data/kontak.json";

const Kontak = () => {
  // --- DIHAPUS ---
  // Menghapus state 'formData' dan hook 'useToast'
  
  // --- DIHAPUS ---
  // Menghapus fungsi 'handleSubmit' untuk form

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${kontakData.whatsapp}?text=Halo, saya ingin bertanya tentang UNISMUH Makassar`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-hero-gradient py-16">
        <div className="container px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Kami siap membantu menjawab pertanyaan dan memberikan informasi yang Anda butuhkan
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 container px-4">
        {/* --- DIUBAH --- */}
        {/* Layout grid dihapus, diganti 'max-w-2xl' dan 'mx-auto' 
            agar info kontak berada di tengah setelah form dihapus */}
        <div className="max-w-2xl mx-auto">
          {/* Informasi Kontak */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Informasi Kontak</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Alamat</h3>
                  <p className="text-foreground/70">{kontakData.alamat}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telepon</h3>
                  <p className="text-foreground/70">{kontakData.telepon}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-foreground/70">{kontakData.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <Button onClick={handleWhatsApp} variant="outline" size="sm" className="mt-2">
                    Chat via WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <a href={kontakData.sosmed.facebook} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  <Facebook size={28} />
                </a>
                <a href={kontakData.sosmed.instagram} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  <Instagram size={28} />
                </a>
                <a href={kontakData.sosmed.twitter} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  <Twitter size={28} />
                </a>
                <a href={kontakData.sosmed.youtube} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  <Youtube size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* --- DIHAPUS --- */}
          {/* Seluruh div 'Form Kontak' (kolom kedua grid) telah dihapus */}
          
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Lokasi Kampus</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-card">
              {/* --- DIUBAH --- */}
              {/* src iframe diganti sesuai permintaan Anda */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.038509331228!2d119.43851797401103!3d-5.182761052297386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee25e00e6bdd3%3A0x157c7b6f80d339b2!2sUniversitas%20Muhammadiyah%20Makassar%20(Unismuh%20Makassar)!5e1!3m2!1sid!2sid!4v1763308297238!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Universitas Muhammadiyah Makassar"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;
