// Impor data baru (pastikan path-nya benar)
import prestasiData from "@/data/prestasi.json";
// Impor komponen Card dan Badge
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
// --- TAMBAHAN ---
// Impor 'cn' untuk menggabungkan class (dibutuhkan untuk layout alternating)
import { cn } from "@/lib/utils";

// Ganti nama komponen ini (dan nama file) nanti
const Prestasi = () => {
  return (
    <div className="min-h-screen">
      {/* Header (Judul Diubah) */}
      <section className="bg-hero-gradient py-16">
        <div className="container px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Prestasi Kampus
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Berbagai pencapaian dan penghargaan yang diraih oleh civitas akademika Unismuh Makassar
          </p>
        </div>
      </section>

      {/* --- BAGIAN TIMELINE BARU --- */}
      <section className="py-16 container px-4">
        {/* Timeline Container: max-width untuk readability, mx-auto to center */}
        <div className="relative max-w-3xl mx-auto">
          {/* Garis Vertikal Timeline */}
          {/* 'left-4' di mobile, 'left-1/2' (tengah) di desktop */}
          <div className="absolute top-0 h-full w-1 bg-primary/30 left-4 md:left-1/2 md:-translate-x-1/2 z-0"></div>

          {/* Loop utama berdasarkan tahun */}
          {prestasiData.map((dataTahun) => (
            <div key={dataTahun.tahun} className="mb-12">
              
              {/* --- PENANDA TAHUN --- */}
              {/* 'sticky' agar menempel saat di-scroll */}
              <div className="relative flex justify-center mb-8 md:mb-12">
                <div className="sticky top-24 z-10">
                  <span className="px-6 py-2 font-bold text-lg text-primary-foreground bg-primary rounded-full shadow-lg">
                    Tahun {dataTahun.tahun}
                  </span>
                </div>
              </div>

              {/* Container untuk item-item prestasi di tahun ini */}
              <div className="relative">
                {/* Loop dalam untuk setiap prestasi */}
                {dataTahun.prestasi.map((item, index) => (
                  <div
                    key={item.id}
                    // Wrapper item: 'flex-row-reverse' untuk item ganjil di desktop
                    className={cn(
                      "relative flex items-start mb-8",
                      index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    )}
                  >
                    {/* --- TITIK PADA TIMELINE --- */}
                    {/* Diposisikan di atas garis vertikal */}
                    <div className="absolute top-5 left-4 md:left-1/2 -translate-x-1/2 z-10">
                      <div className="w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                    </div>

                    {/* --- KARTU PRESTASI --- */}
                    {/* 'pl-12' di mobile. 'w-1/2' dan padding berbeda di desktop */}
                    <div
                      className={cn(
                        "w-full pl-12 md:w-1/2",
                        index % 2 === 0
                          ? "md:pl-0 md:pr-12" // Item Genap (Kiri)
                          : "md:pl-12 md:pr-0"  // Item Ganjil (Kanan)
                      )}
                    >
                      <Card className="shadow-card hover:shadow-card-hover transition-all flex flex-col h-full">
                        <CardHeader>
                          <div className="flex justify-between items-center mb-2">
                            <Award className="text-primary" size={28} />
                            <Badge variant="secondary">{item.kategori}</Badge>
                          </div>
                          <CardTitle className="text-xl">{item.judul}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-foreground/80">{item.deskripsi}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* --- AKHIR BAGIAN TIMELINE --- */}
    </div>
  );
};

// Ganti export default ini sesuai nama file baru Anda nanti
export default Prestasi;
