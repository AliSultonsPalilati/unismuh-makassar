import { Link } from "react-router-dom";
import {
  GraduationCap,
  Award,
  Users,
  BookOpen,
  Building2,
  FlaskConical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { FeatureCard } from "@/components/FeatureCard";
import statistik from "@/data/statistik.json";
import heroImage from "@/assets/hero-campus.jpg";

// --- DIHAPUS ---
// Gambar-gambar ini tidak lagi digunakan
// import libraryImage from "@/assets/library.jpg";
// import labImage from "@/assets/laboratory.jpg";
// import mosqueImage from "@/assets/mosque.jpg";

const Beranda = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Kampus Universitas Muhammadiyah Makassar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
        </div>
        <div className="relative z-10 container px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Kampus Islam Berkemajuan
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Mencetak generasi unggul yang berakhlak mulia, cerdas, dan berdaya
            saing global
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/program-studi">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Lihat Program Studi
              </Button>
            </Link>
            <Link to="/pendaftaran">
              <Button
                size="lg"
                variant="outline"
                className="min-w-[200px] bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Alur Pendaftaran
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistik Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              value={statistik.fakultas}
              label="Fakultas"
              icon={<Building2 size={32} />}
            />
            <StatCard
              value={statistik.programStudi}
              label="Program Studi"
              icon={<BookOpen size={32} />}
            />
            <StatCard
              value="17.784+"
              label="Mahasiswa Aktif"
              icon={<Users size={32} />}
            />
            <StatCard
              value="Unggul"
              label="Akreditasi Institusi"
              icon={<Award size={32} />}
            />
          </div>
        </div>
      </section>

      {/* Tujuan Muhammadiyah Section */}
      <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-lg mt-12 max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Tujuan Muhammadiyah
        </h3>
        <p className="text-lg font-semibold max-w-3xl mx-auto mt-6 italic text-center text-primary-foreground/90">
          "Menegakkan dan menjunjung tinggi agama Islam, sehingga terbentuknya
          masyarakat Islam yang sebenar-benarnya"
        </p>
      </div>

      {/* Program Unggulan */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Program Unggulan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Berbagai program studi terakreditasi dengan fasilitas modern untuk
              mendukung pembelajaran optimal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<GraduationCap size={40} />}
              title="Fakultas Ekonomi dan Bisnis"
              description="Program studi terakreditasi A dengan kurikulum berbasis industri dan kewirausahaan"
            />
            <FeatureCard
              icon={<FlaskConical size={40} />}
              title="Fakultas Teknik"
              description="Laboratorium lengkap dengan peralatan modern untuk praktik dan penelitian"
            />
            <FeatureCard
              icon={<BookOpen size={40} />}
              title="Fakultas Keguruan"
              description="Mencetak pendidik profesional dengan metode pembelajaran inovatif"
            />
          </div>
          <div className="text-center mt-8">
            <Link to="/program-studi">
              <Button variant="default">Lihat Semua Program</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Fasilitas Unggulan */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fasilitas Unggulan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Infrastruktur modern yang mendukung proses belajar mengajar
              berkualitas
            </p>
          </div>
          
          {/* --- DIUBAH DI SINI --- */}
          {/* Mengganti 'image' dengan 'icon' agar seragam */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<BookOpen size={40} />}
              title="Perpustakaan Modern"
              description="Koleksi lengkap dengan akses digital dan ruang baca nyaman"
            />
            <FeatureCard
              icon={<FlaskConical size={40} />}
              title="Laboratorium Terpadu"
              description="Peralatan canggih untuk praktik dan penelitian mahasiswa"
            />
            <FeatureCard
              icon={<Building2 size={40} />}
              title="Masjid Kampus"
              description="Pusat kegiatan spiritual dan dakwah Islamiyah"
            />
          </div>
          {/* --- AKHIR PERUBAHAN --- */}
          
          <div className="text-center mt-8">
            <Link to="/prestasi"> 
              <Button variant="default">Lihat Semua Prestasi</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hero-gradient">
        <div className="container px-4 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Bergabung?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Daftar sekarang dan jadilah bagian dari keluarga besar Universitas
            Muhammadiyah Makassar
          </p>
          <Link to="/pendaftaran">
            <Button size="lg" variant="secondary" className="min-w-[250px]">
              Lihat Alur Pendaftaran
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Beranda;
