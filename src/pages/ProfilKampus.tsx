import { Award, Target, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";

const ProfilKampus = () => {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Profil Kampus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 container px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Profil Kampus</h1>
          <p className="text-xl">Mengenal Lebih Dekat Universitas Muhammadiyah Makassar</p>
        </div>
      </section>

      {/* Sejarah */}
      <section className="py-16 container px-4">
        <h2 className="text-3xl font-bold text-foreground mb-6">Sejarah Singkat</h2>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <p className="mb-4">
            Universitas Muhammadiyah Makassar (UNISMUH Makassar) didirikan pada tahun 1963 oleh Pimpinan Daerah Muhammadiyah Sulawesi Selatan sebagai wujud komitmen organisasi dalam mencerdaskan kehidupan bangsa melalui pendidikan tinggi yang Islami.
          </p>
          <p className="mb-4">
            Sejak awal berdirinya, UNISMUH Makassar telah berkembang menjadi salah satu perguruan tinggi terkemuka di Indonesia Timur. Berawal dari beberapa fakultas, kini telah berkembang menjadi universitas yang memiliki 8 fakultas dengan 35 program studi yang tersebar dari jenjang Diploma hingga Doktor.
          </p>
          <p className="mb-4">
            Dalam perjalanannya, UNISMUH Makassar terus berkomitmen untuk menghasilkan lulusan yang tidak hanya unggul secara akademik, tetapi juga berakhlak mulia sesuai dengan nilai-nilai Islam dan kemuhammadiyahan. Kampus ini telah meluluskan ribuan alumni yang kini berkontribusi di berbagai sektor pembangunan nasional.
          </p>
          <p>
            Terakreditasi B oleh BAN-PT, UNISMUH Makassar terus melakukan peningkatan mutu pendidikan melalui pengembangan kurikulum berbasis kompetensi, peningkatan kualitas dosen, dan pengembangan infrastruktur kampus yang modern.
          </p>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-card">
              <div className="flex items-center mb-4">
                <Target className="text-primary mr-3" size={32} />
                <h2 className="text-2xl font-bold text-foreground">Visi</h2>
              </div>
              <p className="text-foreground/80">
                "Menjadi Universitas Islam Berkemajuan yang Unggul dan Terkemuka di Indonesia Timur pada Tahun 2030"
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-card">
              <div className="flex items-center mb-4">
                <Heart className="text-primary mr-3" size={32} />
                <h2 className="text-2xl font-bold text-foreground">Misi</h2>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Menyelenggarakan pendidikan tinggi yang berkualitas dan Islami</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Mengembangkan penelitian dan pengabdian masyarakat yang inovatif</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Mencetak lulusan yang berakhlak mulia dan berdaya saing global</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Membangun tata kelola universitas yang profesional dan akuntabel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai */}
      <section className="py-16 container px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Nilai-Nilai Muhammadiyah</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-primary" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Amanah</h3>
            <p className="text-sm text-muted-foreground">Dapat dipercaya dalam menjalankan tugas</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Cerdas</h3>
            <p className="text-sm text-muted-foreground">Memiliki pengetahuan dan keterampilan unggul</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-primary" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Ikhlas</h3>
            <p className="text-sm text-muted-foreground">Bekerja dengan tulus karena Allah</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-primary" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Berkemajuan</h3>
            <p className="text-sm text-muted-foreground">Terus berinovasi dan berkembang</p>
          </div>
        </div>
      </section>

      {/* Struktur Pimpinan */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Struktur Pimpinan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-card text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-primary" size={40} />
              </div>
              <h3 className="font-bold text-lg mb-1">Prof. Dr. H. Abdul Rahman Rahim, SE., MM</h3>
              <p className="text-sm text-muted-foreground">Rektor</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-primary" size={40} />
              </div>
              <h3 className="font-bold text-lg mb-1">Dr. H. Muhammad Arsyad, M.Pd</h3>
              <p className="text-sm text-muted-foreground">Wakil Rektor I Bidang Akademik</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-primary" size={40} />
              </div>
              <h3 className="font-bold text-lg mb-1">Dr. Ir. Andi Sadapotto, M.Si</h3>
              <p className="text-sm text-muted-foreground">Wakil Rektor II Bidang Umum</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-primary" size={40} />
              </div>
              <h3 className="font-bold text-lg mb-1">Dr. H. Burhanuddin Badulu, SE., M.Si</h3>
              <p className="text-sm text-muted-foreground">Wakil Rektor III Bidang Kemahasiswaan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Akreditasi & Prestasi */}
      <section className="py-16 container px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Akreditasi & Prestasi</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card p-8 rounded-lg shadow-card">
            <ul className="space-y-4">
              <li className="flex items-start">
                <Award className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <strong className="text-foreground">Akreditasi Institusi B</strong>
                  <p className="text-sm text-muted-foreground">Terakreditasi oleh BAN-PT dengan peringkat B</p>
                </div>
              </li>
              <li className="flex items-start">
                <Award className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <strong className="text-foreground">Program Studi Terakreditasi</strong>
                  <p className="text-sm text-muted-foreground">Memiliki program studi dengan akreditasi A dan B dari BAN-PT</p>
                </div>
              </li>
              <li className="flex items-start">
                <Award className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <strong className="text-foreground">Kampus Terbaik Sulsel</strong>
                  <p className="text-sm text-muted-foreground">Salah satu perguruan tinggi swasta terbaik di Sulawesi Selatan</p>
                </div>
              </li>
              <li className="flex items-start">
                <Award className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <strong className="text-foreground">Prestasi Mahasiswa</strong>
                  <p className="text-sm text-muted-foreground">Berbagai prestasi di tingkat regional dan nasional dalam bidang akademik dan non-akademik</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilKampus;
