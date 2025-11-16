import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Hook ini mendeteksi perubahan URL (perpindahan halaman)
  const { pathname } = useLocation();

  // 'useEffect' ini akan berjalan setiap kali 'pathname' berubah
  useEffect(() => {
    // Memaksa browser scroll ke paling atas
    window.scrollTo(0, 0);
  }, [pathname]); // <-- Ini pemicunya

  // Komponen ini tidak menampilkan apa-apa
  return null;
};

export default ScrollToTop;