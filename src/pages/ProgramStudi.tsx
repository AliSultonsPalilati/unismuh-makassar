import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import fakultasData from "@/data/fakultas.json";

const ProgramStudi = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-hero-gradient py-16">
        <div className="container px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Program Studi</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Pilih program studi yang sesuai dengan minat dan bakatmu untuk masa depan cemerlang
          </p>
        </div>
      </section>

      {/* Fakultas List */}
      <section className="py-16 container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fakultasData.map((fakultas) => (
            <Card key={fakultas.id} className="shadow-card hover:shadow-card-hover transition-all">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <GraduationCap className="text-primary" size={40} />
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Award size={14} />
                    Akreditasi {fakultas.akreditasi}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{fakultas.nama}</CardTitle>
                <CardDescription className="text-base">{fakultas.deskripsi}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-foreground mb-3">Program Studi:</h4>
                <ul className="space-y-2">
                  {fakultas.prodi.map((prodi, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-foreground/80">{prodi}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Info Tambahan */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Keunggulan Program Studi Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="font-bold text-lg mb-2">Kurikulum Terkini</h3>
                <p className="text-sm text-muted-foreground">Disesuaikan dengan kebutuhan industri dan perkembangan ilmu pengetahuan</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="font-bold text-lg mb-2">Dosen Berkualitas</h3>
                <p className="text-sm text-muted-foreground">Tenaga pengajar berpengalaman dengan kualifikasi S2 dan S3</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="font-bold text-lg mb-2">Fasilitas Lengkap</h3>
                <p className="text-sm text-muted-foreground">Laboratorium, perpustakaan, dan infrastruktur modern</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramStudi;
