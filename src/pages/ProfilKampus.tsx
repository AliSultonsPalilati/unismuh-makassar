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
  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
    Sejarah Singkat Universitas Muhammadiyah Makassar
  </h2>

  <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-6">
    <p>
      Universitas Muhammadiyah Makassar (UNISMUH Makassar) didirikan pada tahun 
      <strong> 1963 </strong> oleh Pimpinan Daerah Muhammadiyah Sulawesi Selatan 
      sebagai wujud komitmen organisasi dalam mencerdaskan kehidupan bangsa melalui 
      pendidikan tinggi yang berlandaskan nilai-nilai Islam.
    </p>

    <p>
      Sejak berdiri, UNISMUH Makassar berkembang pesat menjadi salah satu perguruan 
      tinggi terkemuka di kawasan Indonesia Timur. Berawal hanya dari beberapa fakultas, 
      kini telah berkembang menjadi universitas besar dengan 
      <strong> 8 fakultas dan lebih dari 50 program studi </strong> mulai dari 
      jenjang Diploma, Sarjana, Magister, hingga Doktor.
    </p>

    <p>
      Dalam perjalanannya, UNISMUH Makassar terus berkomitmen mencetak lulusan 
      yang tidak hanya unggul secara akademik, tetapi juga berakhlak mulia dan mampu 
      mengimplementasikan nilai-nilai Islam serta Kemuhammadiyahan dalam kehidupan 
      bermasyarakat. Ribuan alumni UNISMUH kini berkontribusi di berbagai sektor 
      pembangunan nasional.
    </p>

    <p>
      Pada tahun <strong>2024</strong>, UNISMUH Makassar resmi meraih 
      <strong> Akreditasi Institusi “Unggul” dari BAN-PT </strong>, yang menegaskan 
      kualitasnya sebagai lembaga pendidikan tinggi berdaya saing nasional. 
      Peningkatan mutu terus dilakukan melalui pengembangan kurikulum berbasis kompetensi, 
      peningkatan kualitas dosen, serta pembangunan fasilitas dan infrastruktur kampus 
      modern yang mendukung proses pembelajaran.
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

      {/* Struktur Pimpinan (SESUAI GAMBAR TERBARU) */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Struktur Pimpinan</h2>
          {/* Menggunakan grid 4 kolom untuk Rektorat */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pimpinan 1: Rektor */}
            <div className="bg-card p-6 rounded-lg shadow-card text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-primary" size={40} />
              </div>
              <h3 className="font-bold text-lg mb-1">Dr. Ir. H. Abd. Rakhim Nanda, S.T., M.T., IPU.</h3>
              <p className="text-sm text-muted-foreground">Rektor</p>
            </div>
            
            {/* Pimpinan 2: Plt. WR I */}
            <div className="bg-card p-6 rounded-lg shadow-card text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-primary" size={40} />
              </div>
              <h3 className="font-bold text-lg mb-1">Dr. Burhanuddin, S.Sos., M.Si.</h3>
              <p className="text-sm text-muted-foreground">Plt. Wakil Rektor I</p>
            </div>
            
            {/* Pimpinan 3: WR II */}
            <div className="bg-card p-6 rounded-lg shadow-card text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-primary" size={40} />
              </div>
              <h3 className="font-bold text-lg mb-1">Prof. Dr. Andi Sukri Syamsuri, M.Hum.</h3>
              <p className="text-sm text-muted-foreground">Wakil Rektor II</p>
            </div>
            
            {/* Pimpinan 4: Plt. WR III & IV */}
            <div className="bg-card p-6 rounded-lg shadow-card text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-primary" size={40} />
              </div>
              <h3 className="font-bold text-lg mb-1">Dr. H. Mawardi Pewangi, M.Pd.I.</h3>
              <p className="text-sm text-muted-foreground">Plt. Wakil Rektor III & IV</p>
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
                  <strong className="text-foreground">Akreditasi Institusi Unggul</strong>
                  <p className="text-sm text-muted-foreground">
                    Resmi meraih Akreditasi "Unggul" berdasarkan SK BAN-PT No: 31/SK/BAN-PT/Ak/PT/I/2024.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <Award className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <strong className="text-foreground">Program Studi Terakreditasi</strong>
                  <p className="text-sm text-muted-foreground">Sebagian besar program studi telah terakreditasi Unggul, A, dan B dari BAN-PT dan LAM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Award className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <strong className="text-foreground">Kampus Terbaik Sulsel</strong>
                  <p className="text-sm text-muted-foreground">Salah satu perguruan tinggi swasta terbaik di Sulawesi Selatan versi berbagai lembaga pemeringkatan</p>
                </div>
              </li>
              <li className="flex items-start">
                <Award className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <strong className="text-foreground">Prestasi Mahasiswa</strong>
                  <p className="text-sm text-muted-foreground">Berbagai prestasi di tingkat regional dan nasional dalam bidang akademik dan non-akademik</p>
                </div>
              {/* --- KESALAHAN ADA DI SINI --- */}
              {/* Tag '</div>' ekstra telah dihapus dari sini */}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilKampus;
