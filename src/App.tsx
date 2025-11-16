import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Beranda from "./pages/Beranda";
import ProfilKampus from "./pages/ProfilKampus";
import ProgramStudi from "./pages/ProgramStudi";
import Pendaftaran from "./pages/Pendaftaran";
import Fasilitas from "./pages/Fasilitas";
import Kontak from "./pages/Kontak";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Beranda />} />
              <Route path="/profil" element={<ProfilKampus />} />
              <Route path="/program-studi" element={<ProgramStudi />} />
              <Route path="/pendaftaran" element={<Pendaftaran />} />
              <Route path="/fasilitas" element={<Fasilitas />} />
              <Route path="/kontak" element={<Kontak />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
