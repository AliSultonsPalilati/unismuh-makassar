import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import kontakData from "@/data/kontak.json";

const Kontak = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder untuk submit form
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih. Kami akan segera menghubungi Anda.",
    });
    setFormData({ nama: "", email: "", subjek: "", pesan: "" });
  };

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

      {/* Contact Info & Form */}
      <section className="py-16 container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

          {/* Form Kontak */}
          <div className="bg-card p-8 rounded-lg shadow-card">
            <h2 className="text-2xl font-bold text-foreground mb-6">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-foreground mb-2">
                  Nama Lengkap
                </label>
                <Input
                  id="nama"
                  type="text"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  required
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="nama@email.com"
                />
              </div>

              <div>
                <label htmlFor="subjek" className="block text-sm font-medium text-foreground mb-2">
                  Subjek
                </label>
                <Input
                  id="subjek"
                  type="text"
                  value={formData.subjek}
                  onChange={(e) => setFormData({ ...formData, subjek: e.target.value })}
                  required
                  placeholder="Subjek pesan"
                />
              </div>

              <div>
                <label htmlFor="pesan" className="block text-sm font-medium text-foreground mb-2">
                  Pesan
                </label>
                <Textarea
                  id="pesan"
                  value={formData.pesan}
                  onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                  required
                  placeholder="Tuliskan pesan Anda..."
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Lokasi Kampus</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-card">
              <iframe
                src={kontakData.maps}
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
