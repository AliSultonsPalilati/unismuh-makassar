import fasilitasData from "@/data/fasilitas.json";
import libraryImage from "@/assets/library.jpg";
import labImage from "@/assets/laboratory.jpg";
import mosqueImage from "@/assets/mosque.jpg";

const images = [libraryImage, labImage, mosqueImage, libraryImage, labImage, mosqueImage];

const Fasilitas = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-hero-gradient py-16">
        <div className="container px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fasilitas Kampus</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Infrastruktur modern dan lengkap untuk mendukung kegiatan akademik dan non-akademik
          </p>
        </div>
      </section>

      {/* Fasilitas Grid */}
      <section className="py-16 container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fasilitasData.map((fasilitas, index) => (
            <div key={fasilitas.id} className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={images[index % images.length]} 
                  alt={fasilitas.nama} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{fasilitas.nama}</h3>
                <p className="text-foreground/70">{fasilitas.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Tambahan */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Fasilitas Pendukung Lainnya</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="font-bold text-lg mb-2">WiFi Kampus</h3>
                <p className="text-sm text-muted-foreground">Akses internet cepat di seluruh area kampus untuk mendukung pembelajaran digital</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="font-bold text-lg mb-2">Kantin & Kafeteria</h3>
                <p className="text-sm text-muted-foreground">Berbagai pilihan makanan dan minuman dengan harga terjangkau</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="font-bold text-lg mb-2">Area Parkir Luas</h3>
                <p className="text-sm text-muted-foreground">Tempat parkir yang aman dan nyaman untuk kendaraan mahasiswa dan dosen</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="font-bold text-lg mb-2">Ruang Organisasi</h3>
                <p className="text-sm text-muted-foreground">Ruang khusus untuk kegiatan organisasi kemahasiswaan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fasilitas;
