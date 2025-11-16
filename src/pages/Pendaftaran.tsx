import { CheckCircle2, FileText, ClipboardCheck, FileCheck, Trophy, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: <FileText size={40} />,
    title: "1. Isi Formulir Online",
    description: "Lengkapi formulir pendaftaran online melalui website PMB dengan data yang valid dan benar.",
    details: ["KTP/Kartu Pelajar", "Ijazah terakhir", "Transkrip nilai", "Pas foto"]
  },
  {
    icon: <ClipboardCheck size={40} />,
    title: "2. Upload Dokumen",
    description: "Unggah semua dokumen persyaratan dalam format PDF atau JPG dengan ukuran maksimal 2MB.",
    details: ["Scan ijazah", "Scan transkrip", "Scan KTP", "Pas foto 3x4"]
  },
  {
    icon: <FileCheck size={40} />,
    title: "3. Verifikasi Berkas",
    description: "Tim kami akan memverifikasi kelengkapan dan keabsahan dokumen yang telah diupload.",
    details: ["Proses 1-3 hari kerja", "Notifikasi via email", "Cek status online"]
  },
  {
    icon: <Trophy size={40} />,
    title: "4. Tes/Seleksi",
    description: "Ikuti tes seleksi sesuai jalur yang dipilih (SNPMB, Mandiri, atau Beasiswa).",
    details: ["Tes tertulis/online", "Wawancara (jika perlu)", "Tes kesehatan"]
  },
  {
    icon: <CheckCircle2 size={40} />,
    title: "5. Pengumuman",
    description: "Pengumuman hasil seleksi akan diumumkan melalui website dan email terdaftar.",
    details: ["Cek website PMB", "Email notifikasi", "Pengumuman resmi"]
  },
  {
    icon: <CreditCard size={40} />,
    title: "6. Daftar Ulang & Pembayaran",
    description: "Lakukan daftar ulang dan pembayaran biaya pendidikan untuk mengamankan kursi Anda.",
    details: ["Daftar ulang online", "Pembayaran SPP", "Aktivasi akun mahasiswa"]
  }
];

const Pendaftaran = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-hero-gradient py-16">
        <div className="container px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Alur Pendaftaran</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Ikuti langkah-langkah berikut untuk menjadi bagian dari keluarga besar UNISMUH Makassar
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-primary flex-shrink-0">{step.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                      <CardDescription className="text-base">{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="ml-14">
                    <h4 className="font-semibold text-foreground mb-2">Yang perlu disiapkan:</h4>
                    <ul className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-sm text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Siap Mendaftar?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Klik tombol di bawah untuk memulai proses pendaftaran online Anda
          </p>
          <Button size="lg" variant="default" className="bg-secondary hover:bg-secondary/90">
            Daftar Sekarang
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Butuh bantuan? Hubungi kami via WhatsApp atau email
          </p>
        </div>
      </section>

      {/* Timeline Info */}
      <section className="py-16 container px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Jadwal Pendaftaran</h2>
          <div className="bg-card p-8 rounded-lg shadow-card">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-semibold">Gelombang 1</span>
                <span className="text-muted-foreground">Januari - Maret 2025</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-semibold">Gelombang 2</span>
                <span className="text-muted-foreground">April - Juni 2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Gelombang 3</span>
                <span className="text-muted-foreground">Juli - Agustus 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pendaftaran;
