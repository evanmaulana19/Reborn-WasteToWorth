"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Leaf, 
  Trash2, 
  ShieldAlert, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Users, 
  TrendingUp, 
  Droplet, 
  Flame, 
  Hammer, 
  Sun, 
  Menu,
  X,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function Home() {
  // Navigation Menu Mobile State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Solution Interactive Active Tab
  const [activeIngredient, setActiveIngredient] = useState<"pisang" | "jagung" | "beeswax">("pisang");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Ingredient Content
  const ingredients = {
    pisang: {
      title: "Pelepah Pisang (Banana Pseudo-Stem)",
      subtitle: "Kekuatan Tarikan Mekanis & Struktur Kokoh",
      description: "Pelepah pisang memiliki serat alami selulosa berorientasi longitudinal tinggi. Serat ini memberikan kekuatan mekanis luar biasa yang membuat Bio-Box kokoh, tahan banting, anti-penyok, serta mampu menahan beban tumpukan makanan tanpa mengalami deformasi.",
      impact: "Meningkatkan daya tahan tekanan fisik sebesar 120% dibanding karton biasa.",
      tag: "Kekuatan Utama"
    },
    jagung: {
      title: "Kulit Jagung (Corn Husk)",
      subtitle: "Fleksibilitas Tinggi & Kerapatan Pori Optimal",
      description: "Kulit jagung kaya akan serat hemiselulosa halus yang memberikan kelenturan (fleksibilitas) agar Bio-Box mudah dibentuk tanpa retak. Karakter mikro serat jagung juga berfungsi menyumbat pori-pori pulp kasar pisang, menciptakan tekstur permukaan yang halus dan rapat.",
      impact: "Memberikan kelenturan struktural dan menahan penetrasi uap panas berlebih.",
      tag: "Fleksibilitas & Kerapatan"
    },
    beeswax: {
      title: "Food-Grade Beeswax (Lilin Lebah Alami)",
      subtitle: "Lapisan Emulsi Anti-Bocor Air Panas & Minyak Kelapa Sawit",
      description: "Kami mengekstrak lilin lebah alami food-grade untuk melapisi permukaan Bio-Box. Emulsi hidrofobik ini secara alami menolak cairan, mencegah rembesan kuah makanan panas (air) maupun minyak kelapa sawit gorengan tanpa memerlukan lapisan plastik sintetis (PE/PP).",
      impact: "Tahan rembes minyak kelapa sawit hingga 12 jam dan air mendidih 100°C.",
      tag: "Proteksi Hidrofobik"
    }
  };

  return (
    <div className="bg-reborn-cream text-reborn-forest font-sans selection:bg-reborn-teal selection:text-white">
      
      {/* 1. STICKY NAVBAR */}
      <header className="sticky top-0 z-50 bg-reborn-cream/80 backdrop-blur-md border-b border-reborn-forest/10 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-2 group">
            <span className="bg-reborn-forest text-reborn-cream p-2 rounded-xl group-hover:scale-105 transition-transform">
              <Leaf className="w-6 h-6 text-reborn-gold" />
            </span>
            <span className="font-extrabold text-xl xs:text-2xl tracking-widest text-reborn-forest font-outfit">REBORN</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <button onClick={() => scrollToSection("problem")} className="hover:text-reborn-teal transition-colors text-sm">Kris TPA</button>
            <button onClick={() => scrollToSection("solution")} className="hover:text-reborn-teal transition-colors text-sm">Inovasi & Produk</button>
            <button onClick={() => scrollToSection("timeline")} className="hover:text-reborn-teal transition-colors text-sm">Proses Produksi</button>
            <button onClick={() => scrollToSection("purpose")} className="hover:text-reborn-teal transition-colors text-sm">Tujuan Mulia & Tim</button>

          </nav>

          {/* Mobile Hamburguer */}
          <button 
            className="md:hidden text-reborn-forest hover:text-reborn-teal p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-reborn-cream border-b border-reborn-forest/10 p-6 flex flex-col gap-4 shadow-xl md:hidden"
            >
              <button onClick={() => scrollToSection("problem")} className="text-left font-semibold py-2 text-sm xs:text-base border-b border-reborn-forest/5 hover:text-reborn-teal">Kris TPA</button>
              <button onClick={() => scrollToSection("solution")} className="text-left font-semibold py-2 text-sm xs:text-base border-b border-reborn-forest/5 hover:text-reborn-teal">Inovasi & Produk</button>
              <button onClick={() => scrollToSection("timeline")} className="text-left font-semibold py-2 text-sm xs:text-base border-b border-reborn-forest/5 hover:text-reborn-teal">Proses Produksi</button>
              <button onClick={() => scrollToSection("purpose")} className="text-left font-semibold py-2 text-sm xs:text-base border-b border-reborn-forest/5 hover:text-reborn-teal">Tujuan Mulia & Tim</button>

            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center pt-8 pb-16 overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-reborn-teal/10 blur-3xl -z-10" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-reborn-gold/15 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 border border-reborn-forest/15 bg-reborn-forest/5 px-3 py-1.5 rounded-full w-fit text-xs xs:text-sm font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5 text-reborn-teal" />
              <span>Bio-Box: 100% Organik & Biodegradable</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-extrabold tracking-tight text-reborn-forest leading-[1.05]"
            >
              REBORN:<br />
              <span className="text-reborn-teal">Waste to Worth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-reborn-forest/80 max-w-xl font-medium"
            >
              Kemasan Makanan Organik dan Ekonomis dari Serat Pelepah Pisang & Kulit Jagung.
            </motion.p>

            {/* Price Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="border-2 border-dashed border-reborn-gold bg-reborn-gold/10 p-3 xs:p-4 rounded-2xl flex items-center justify-between max-w-md gap-4 shadow-sm"
            >
              <div>
                <p className="text-[9px] xs:text-[10px] sm:text-xs font-bold tracking-wider text-reborn-forest/60 uppercase">Ekonomis & Ramah Kantong</p>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl font-black text-reborn-forest mt-0.5 font-outfit">Affordable Eco-Packaging</p>
              </div>
              <div className="bg-reborn-gold text-reborn-forest font-bold px-3 py-1.5 xs:px-4 xs:py-2 rounded-xl text-xs xs:text-sm whitespace-nowrap shadow">
                mulai dari <span className="text-sm xs:text-base font-extrabold">Rp 300</span> / pcs
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <button 
                onClick={() => scrollToSection("timeline")}
                className="bg-reborn-gold hover:bg-reborn-gold/90 text-reborn-forest font-bold px-6 py-3 xs:px-8 xs:py-4 rounded-full text-sm xs:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                Lihat Proses Produksi
                <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

            </motion.div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[420px] aspect-[4/5] bg-white rounded-3xl p-8 border border-reborn-forest/10 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Card visual elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-reborn-cream rounded-full -z-10" />
              
              <div className="flex justify-between items-start">
                <span className="bg-reborn-teal/10 text-reborn-teal text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  100% Biodegradable
                </span>
                <span className="text-xs font-medium text-reborn-forest/50">Model: Bio-Box Bento v1</span>
              </div>

              {/* Real Product Mockup Image */}
              <div className="my-6 flex flex-col items-center justify-center">
                <div className="relative w-64 h-36 flex items-center justify-center overflow-hidden rounded-2xl bg-transparent">
                  <img 
                    src="/biobox-mockup.png" 
                    alt="REBORN Bio-Box Mockup" 
                    className="absolute w-[110%] h-auto max-w-none object-contain filter drop-shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Floating Tags */}
                <div className="mt-8 grid grid-cols-2 gap-3 w-full">
                  <div className="bg-reborn-cream/50 border border-reborn-forest/5 p-2.5 rounded-xl text-center">
                    <p className="text-[10px] font-bold uppercase text-reborn-forest/50">Bahan Utama</p>
                    <p className="text-xs font-bold text-reborn-forest">Pelepah Pisang</p>
                  </div>
                  <div className="bg-reborn-cream/50 border border-reborn-forest/5 p-2.5 rounded-xl text-center">
                    <p className="text-[10px] font-bold uppercase text-reborn-forest/50">Serat Pengisi</p>
                    <p className="text-xs font-bold text-reborn-forest">Kulit Jagung</p>
                  </div>
                </div>
              </div>

              {/* Features badges */}
              <div className="border-t border-reborn-forest/10 pt-4 flex justify-between text-[11px] font-semibold text-reborn-forest/70">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-reborn-teal" />
                  <span>Tahan Air Panas</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-reborn-teal" />
                  <span>Bebas Plastik</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-reborn-teal" />
                  <span>Kompos Alami</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM SECTION: Krisis TPA Ciniru & Styrofoam */}
      <section id="problem" className="py-24 bg-reborn-cream border-t border-reborn-forest/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[10px] xs:text-xs font-bold uppercase tracking-wider text-reborn-teal mb-3">Latar Belakang Lingkungan</h2>
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-reborn-forest tracking-tight font-outfit">
              Krisis TPA Ciniru & Bahaya Styrofoam
            </h3>
            <p className="text-sm xs:text-base sm:text-lg text-reborn-forest/70 mt-4 font-medium">
              Realita kritis yang melatarbelakangi lahirnya REBORN sebagai solusi alternatif kemasan makanan ramah lingkungan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left Card: TPA Ciniru crisis */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-reborn-forest/5 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="bg-reborn-cream text-reborn-forest p-3 rounded-2xl w-fit mb-6">
                  <Trash2 className="w-8 h-8 text-reborn-teal" />
                </div>
                <h4 className="text-lg xs:text-xl sm:text-2xl font-bold text-reborn-forest font-outfit">Darurat Sampah TPA Ciniru, Kuningan</h4>
                <p className="text-xs xs:text-sm sm:text-base text-reborn-forest/70 mt-4 leading-relaxed font-medium">
                  Tempat Pembuangan Akhir (TPA) Ciniru di Jalaksana, Kuningan telah mengalami **overcapacity** yang parah. Timbunan sampah plastik sekali pakai dan Styrofoam mendominasi, merusak keindahan ekosistem lereng Gunung Ciremai, mencemari air tanah warga sekitar, dan menimbulkan polusi bau yang berkepanjangan bagi UMKM kuliner Kuningan.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-reborn-forest/10 flex flex-wrap items-center gap-6">
                <div>
                  <span className="text-2xl xs:text-3xl font-extrabold text-reborn-teal font-outfit">10+ Ton</span>
                  <p className="text-[10px] xs:text-xs font-bold text-reborn-forest/50 uppercase">Sampah per Hari</p>
                </div>
                <div>
                  <span className="text-2xl xs:text-3xl font-extrabold text-reborn-teal font-outfit">Overcapacity</span>
                  <p className="text-[10px] xs:text-xs font-bold text-reborn-forest/50 uppercase">Status Operasional</p>
                </div>
              </div>
            </motion.div>

            {/* Right Card: Styrofoam Danger */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-reborn-forest/5 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="bg-[#FFEFEF] text-[#D32F2F] p-3 rounded-2xl w-fit mb-6">
                  <ShieldAlert className="w-8 h-8" />
                </div>
                <h4 className="text-lg xs:text-xl sm:text-2xl font-bold text-reborn-forest font-outfit">Bahaya Karsinogenik Kemasan Styrofoam</h4>
                <p className="text-xs xs:text-sm sm:text-base text-reborn-forest/70 mt-4 leading-relaxed font-medium">
                  Styrofoam mengandung zat berbahaya bernama **Styrene** dan **Benzene**. Ketika bersentuhan dengan makanan panas, berminyak, atau berasam tinggi, zat karsinogenik ini mudah bermigrasi ke dalam makanan. Konsumsi jangka panjang memicu kanker, merusak hormon reproduksi, dan memicu kerusakan saraf secara sistemik.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-reborn-forest/10 flex flex-wrap items-center gap-6">
                <div>
                  <span className="text-2xl xs:text-3xl font-extrabold text-[#D32F2F] font-outfit">500+ Thn</span>
                  <p className="text-[10px] xs:text-xs font-bold text-reborn-forest/50 uppercase">Sulit Terurai Alami</p>
                </div>
                <div>
                  <span className="text-2xl xs:text-3xl font-extrabold text-[#D32F2F] font-outfit">Karsinogen</span>
                  <p className="text-[10px] xs:text-xs font-bold text-reborn-forest/50 uppercase">Kategori Toksisitas</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Styrofoam vs Bio-Box Interactive Comparison */}
          <div className="mt-16 bg-white rounded-3xl p-6 md:p-10 border border-reborn-forest/5 shadow-xl">
            <h4 className="text-lg xs:text-xl sm:text-2xl font-extrabold text-reborn-forest mb-8 text-center font-outfit">Tabel Komparasi Dampak Lingkungan & Kesehatan</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-reborn-forest/10 text-xs xs:text-sm font-extrabold uppercase text-reborn-forest/60">
                    <th className="pb-4">Parameter Fitur</th>
                    <th className="pb-4 text-red-600">Styrofoam Konvensional</th>
                    <th className="pb-4 text-reborn-teal">Bio-Box REBORN</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-reborn-forest/5 font-medium text-xs xs:text-sm sm:text-base">
                  <tr>
                    <td className="py-4 font-bold text-reborn-forest">Bahan Dasar</td>
                    <td className="py-4 text-reborn-forest/70">Minyak bumi sintetis (Polistirena)</td>
                    <td className="py-4 text-reborn-forest/70">Pelepah Pisang & Kulit Jagung alami</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-reborn-forest">Waktu Terurai</td>
                    <td className="py-4 text-red-600 font-semibold">Lebih dari 500 tahun (Abadi)</td>
                    <td className="py-4 text-reborn-teal font-semibold">Terkurai penuh dalam 60 hari</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-reborn-forest">Kesehatan Makanan</td>
                    <td className="py-4 text-red-600 font-semibold">Berbahaya (Migrasi Styrene karsinogenik)</td>
                    <td className="py-4 text-reborn-teal font-semibold">100% Aman (Food-grade & Alami)</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-reborn-forest">Ketahanan Uap & Panas</td>
                    <td className="py-4 text-reborn-forest/70">Meleleh jika terkena panas & minyak tinggi</td>
                    <td className="py-4 text-reborn-forest/70">Tahan uap panas & tidak rembes air/minyak</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-reborn-forest">Dampak Terhadap Tanah</td>
                    <td className="py-4 text-reborn-forest/70">Merusak kesuburan tanah & merembes kimia</td>
                    <td className="py-4 text-reborn-teal font-semibold">Bisa dikomposkan, menyuburkan tanah</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE SOLUTION & PRODUCT */}
      <section id="solution" className="py-24 bg-white border-t border-reborn-forest/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[10px] xs:text-xs font-bold uppercase tracking-wider text-reborn-teal mb-3">Inovasi Teknologi Material</h2>
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-reborn-forest tracking-tight font-outfit">
              Komposit Dual-Fiber Alami
            </h3>
            <p className="text-sm xs:text-base sm:text-lg text-reborn-forest/70 mt-4 font-medium">
              Sinergi biomassa pelepah pisang dan kulit jagung dengan lapisan beeswax menciptakan wadah makanan kuat, fungsional, dan bebas kimia berbahaya.
            </p>
          </div>

          {/* Interactive Dual-Fiber Innovation Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 bg-reborn-cream rounded-[2.5rem] p-8 md:p-12 border border-reborn-forest/5">
            {/* Selector list */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <h4 className="text-base xs:text-lg md:text-xl font-bold tracking-tight mb-2 uppercase text-reborn-forest/60">Klik untuk menjelajah:</h4>
              
              <button 
                onClick={() => setActiveIngredient("pisang")}
                className={`text-left p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                  activeIngredient === "pisang" 
                    ? "bg-white border-reborn-teal shadow-md" 
                    : "border-transparent hover:bg-white/50"
                }`}
              >
                <div className={`p-2 rounded-xl ${activeIngredient === "pisang" ? "bg-reborn-teal text-white" : "bg-reborn-forest/5 text-reborn-forest"}`}>
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-extrabold text-sm xs:text-base">1. Pelepah Pisang</h5>
                  <p className="text-[10px] xs:text-xs text-reborn-forest/60 mt-1">Kekuatan tarik & tumpuk mekanis</p>
                </div>
              </button>

              <button 
                onClick={() => setActiveIngredient("jagung")}
                className={`text-left p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                  activeIngredient === "jagung" 
                    ? "bg-white border-reborn-teal shadow-md" 
                    : "border-transparent hover:bg-white/50"
                }`}
              >
                <div className={`p-2 rounded-xl ${activeIngredient === "jagung" ? "bg-reborn-teal text-white" : "bg-reborn-forest/5 text-reborn-forest"}`}>
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-extrabold text-sm xs:text-base">2. Kulit Jagung</h5>
                  <p className="text-[10px] xs:text-xs text-reborn-forest/60 mt-1">Fleksibilitas serat & kerapatan pori</p>
                </div>
              </button>

              <button 
                onClick={() => setActiveIngredient("beeswax")}
                className={`text-left p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                  activeIngredient === "beeswax" 
                    ? "bg-white border-reborn-teal shadow-md" 
                    : "border-transparent hover:bg-white/50"
                }`}
              >
                <div className={`p-2 rounded-xl ${activeIngredient === "beeswax" ? "bg-reborn-teal text-white" : "bg-reborn-forest/5 text-reborn-forest"}`}>
                  <Droplet className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-extrabold text-sm xs:text-base">3. Beeswax Coating</h5>
                  <p className="text-[10px] xs:text-xs text-reborn-forest/60 mt-1">Pelapis alami anti air & minyak</p>
                </div>
              </button>
            </div>

            {/* Display Active Details */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-reborn-forest/5 shadow-xl min-h-[350px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIngredient}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-5"
                >
                  <div className="flex justify-between items-center gap-2">
                    <span className="bg-reborn-gold/25 text-reborn-forest text-[10px] xs:text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {ingredients[activeIngredient].tag}
                    </span>
                    <span className="text-reborn-teal font-extrabold text-xs xs:text-sm font-outfit">Dual-Fiber Formula</span>
                  </div>

                  <h4 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-reborn-forest font-outfit">
                    {ingredients[activeIngredient].title}
                  </h4>
                  
                  <h5 className="text-reborn-teal font-bold text-sm xs:text-base leading-snug">
                    {ingredients[activeIngredient].subtitle}
                  </h5>

                  <p className="text-reborn-forest/80 text-xs xs:text-sm sm:text-base leading-relaxed font-medium">
                    {ingredients[activeIngredient].description}
                  </p>

                  <div className="bg-reborn-cream/50 border border-reborn-forest/5 p-3 xs:p-4 rounded-2xl flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 xs:w-5 xs:h-5 text-reborn-teal shrink-0" />
                    <span className="text-xs xs:text-sm font-bold text-reborn-forest">{ingredients[activeIngredient].impact}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Product Variants Showcase */}
          <div className="mt-16">
            <h4 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold text-reborn-forest text-center mb-12 font-outfit">Varian Produk Bio-Box</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product 1: Bento Box */}
              <motion.div 
                whileHover={{ y: -6 }}
                className="bg-reborn-cream border border-reborn-forest/5 rounded-3xl p-6 shadow-md flex flex-col justify-between text-left"
              >
                <div>
                  <div className="bg-white aspect-square rounded-2xl w-full flex items-center justify-center mb-6 border border-reborn-forest/5 relative overflow-hidden">
                    {/* Simulated Bento container visual */}
                    <div className="w-2/3 h-1/2 bg-[#EAE3D5] rounded-xl border-2 border-[#D5CBB9] relative flex items-center justify-center">
                      <div className="absolute inset-y-0 left-1/3 w-0.5 bg-[#D5CBB9]/80" />
                      <div className="absolute inset-y-0 left-2/3 w-0.5 bg-[#D5CBB9]/80" />
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#D5CBB9]/80" />
                      <span className="text-[9px] font-bold text-reborn-forest/30 uppercase tracking-widest absolute bottom-2">Bento</span>
                    </div>
                  </div>
                  <h5 className="text-lg xs:text-xl font-bold text-reborn-forest font-outfit">Bento Lunch Box</h5>
                  <p className="text-[10px] xs:text-xs text-reborn-forest/50 mt-1 font-bold">Volume: 800ml | 3 / 4 Sekat</p>
                  <p className="text-xs xs:text-sm text-reborn-forest/70 mt-3 font-medium">Sangat pas untuk paket catering, nasi campur, nasi box UMKM kuliner.</p>
                </div>
                <div className="mt-6 pt-4 border-t border-reborn-forest/10 text-center">
                  <span className="text-reborn-teal font-extrabold text-base xs:text-lg">Rp 300 <span className="text-xs font-bold text-reborn-forest/60">/pcs</span></span>
                </div>
              </motion.div>

              {/* Product 2: Bowl Box */}
              <motion.div 
                whileHover={{ y: -6 }}
                className="bg-reborn-cream border border-reborn-forest/5 rounded-3xl p-6 shadow-md flex flex-col justify-between text-left"
              >
                <div>
                  <div className="bg-white aspect-square rounded-2xl w-full flex items-center justify-center mb-6 border border-reborn-forest/5 relative overflow-hidden">
                    {/* Simulated Bowl container visual */}
                    <div className="w-1/2 aspect-square bg-[#EAE3D5] rounded-full border-2 border-[#D5CBB9] relative flex items-center justify-center">
                      <div className="absolute inset-2 border border-dashed border-[#D5CBB9] rounded-full" />
                      <span className="text-[9px] font-bold text-reborn-forest/30 uppercase tracking-widest">Bowl</span>
                    </div>
                  </div>
                  <h5 className="text-lg xs:text-xl font-bold text-reborn-forest font-outfit">Bowl Box</h5>
                  <p className="text-[10px] xs:text-xs text-reborn-forest/50 mt-1 font-bold">Volume: 650ml</p>
                  <p className="text-xs xs:text-sm text-reborn-forest/70 mt-3 font-medium">Ideal untuk kuliner berkuah, rice bowl, mi ramen, soto, bubur ayam.</p>
                </div>
                <div className="mt-6 pt-4 border-t border-reborn-forest/10 text-center">
                  <span className="text-reborn-teal font-extrabold text-base xs:text-lg">Rp 300 <span className="text-xs font-bold text-reborn-forest/60">/pcs</span></span>
                </div>
              </motion.div>

              {/* Product 3: Snack Box */}
              <motion.div 
                whileHover={{ y: -6 }}
                className="bg-reborn-cream border border-reborn-forest/5 rounded-3xl p-6 shadow-md flex flex-col justify-between text-left"
              >
                <div>
                  <div className="bg-white aspect-square rounded-2xl w-full flex items-center justify-center mb-6 border border-reborn-forest/5 relative overflow-hidden">
                    {/* Simulated Snack Box visual */}
                    <div className="w-1/2 aspect-[4/3] bg-[#EAE3D5] rounded-lg border-2 border-[#D5CBB9] relative flex items-center justify-center">
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#D5CBB9]" />
                      <span className="text-[9px] font-bold text-reborn-forest/30 uppercase tracking-widest absolute top-1.5">Snack</span>
                    </div>
                  </div>
                  <h5 className="text-lg xs:text-xl font-bold text-reborn-forest font-outfit">Snack Box</h5>
                  <p className="text-[10px] xs:text-xs text-reborn-forest/50 mt-1 font-bold">Volume: 400ml</p>
                  <p className="text-xs xs:text-sm text-reborn-forest/70 mt-3 font-medium">Paling cocok untuk kue basah, jajanan pasar, gorengan, kue rapat.</p>
                </div>
                <div className="mt-6 pt-4 border-t border-reborn-forest/10 text-center">
                  <span className="text-reborn-teal font-extrabold text-base xs:text-lg">Rp 300 <span className="text-xs font-bold text-reborn-forest/60">/pcs</span></span>
                </div>
              </motion.div>


            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE TIMELINE (Proses Produksi) */}
      <section id="timeline" className="py-24 bg-reborn-cream border-t border-reborn-forest/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] xs:text-xs font-bold uppercase tracking-wider text-reborn-teal mb-3">Langkah Pembuatan</h2>
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-reborn-forest tracking-tight font-outfit">
              Proses Produksi Bio-Box
            </h3>
            <p className="text-sm xs:text-base sm:text-lg text-reborn-forest/70 mt-4 font-medium">
              Bagaimana kami mengubah limbah pertanian lokal menjadi produk kemasan bernilai tinggi melalui proses yang higienis dan terstandar.
            </p>
          </div>

          {/* Production Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center line decoration (Always visible, shifts to left-6 on mobile, centered on desktop) */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-reborn-forest/10 -translate-x-1/2" />

            {/* Step 1 */}
            <div className="flex flex-row md:flex-row items-start md:items-center relative pl-16 md:pl-0 mb-16">
              <div className="flex-1 md:text-right flex md:justify-end w-full">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white p-5 xs:p-6 rounded-3xl border border-reborn-forest/5 shadow-md max-w-md text-left w-full"
                >
                  <span className="bg-reborn-teal/10 text-reborn-teal text-[10px] xs:text-xs font-extrabold uppercase px-3 py-1 rounded-full">Langkah 1</span>
                  <h4 className="text-lg xs:text-xl font-bold text-reborn-forest mt-3 font-outfit">Pengumpulan & Sortasi Limbah</h4>
                  <p className="text-xs xs:text-sm text-reborn-forest/70 mt-2 font-medium">
                    Kami bekerja sama dengan para petani di wilayah Cilimus & Cigintung untuk mengumpulkan pelepah pisang yang sudah tidak produktif dan kulit jagung sisa panen yang menumpuk.
                  </p>
                </motion.div>
              </div>
              <div className="bg-reborn-teal text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 font-bold border-4 border-reborn-cream shadow absolute left-0 top-4 xs:top-6 md:relative md:top-auto md:mx-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex-1 hidden md:block" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-row md:flex-row items-start md:items-center relative pl-16 md:pl-0 mb-16">
              <div className="flex-1 hidden md:block" />
              <div className="bg-reborn-teal text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 font-bold border-4 border-reborn-cream shadow absolute left-0 top-4 xs:top-6 md:relative md:top-auto md:mx-0">
                <Flame className="w-5 h-5" />
              </div>
              <div className="flex-1 flex justify-start w-full">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white p-5 xs:p-6 rounded-3xl border border-reborn-forest/5 shadow-md max-w-md text-left w-full"
                >
                  <span className="bg-reborn-teal/10 text-reborn-teal text-[10px] xs:text-xs font-extrabold uppercase px-3 py-1 rounded-full">Langkah 2</span>
                  <h4 className="text-lg xs:text-xl font-bold text-reborn-forest mt-3 font-outfit">Perebusan & Sterilisasi Biomassa</h4>
                  <p className="text-xs xs:text-sm text-reborn-forest/70 mt-2 font-medium">
                    Bahan organik yang terkumpul dibersihkan lalu direbus dengan suhu tinggi untuk membunuh bakteri, jamur, serta menghilangkan lignin (zat kayu) agar diperoleh serat selulosa murni yang bersih.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-row md:flex-row items-start md:items-center relative pl-16 md:pl-0 mb-16">
              <div className="flex-1 md:text-right flex md:justify-end w-full">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white p-5 xs:p-6 rounded-3xl border border-reborn-forest/5 shadow-md max-w-md text-left w-full"
                >
                  <span className="bg-reborn-teal/10 text-reborn-teal text-[10px] xs:text-xs font-extrabold uppercase px-3 py-1 rounded-full">Langkah 3</span>
                  <h4 className="text-lg xs:text-xl font-bold text-reborn-forest mt-3 font-outfit">Pencacahan Pulp (Pulping)</h4>
                  <p className="text-xs xs:text-sm text-reborn-forest/70 mt-2 font-medium">
                    Serat yang sudah bersih kemudian dihancurkan menggunakan mesin pencacah berat (heavy duty hydrapulper) menjadi bubur serat (pulp) dengan rasio presisi dual-fiber pisang & jagung.
                  </p>
                </motion.div>
              </div>
              <div className="bg-reborn-teal text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 font-bold border-4 border-reborn-cream shadow absolute left-0 top-4 xs:top-6 md:relative md:top-auto md:mx-0">
                <Hammer className="w-5 h-5" />
              </div>
              <div className="flex-1 hidden md:block" />
            </div>

            {/* Step 4 */}
            <div className="flex flex-row md:flex-row items-start md:items-center relative pl-16 md:pl-0 mb-16">
              <div className="flex-1 hidden md:block" />
              <div className="bg-reborn-teal text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 font-bold border-4 border-reborn-cream shadow absolute left-0 top-4 xs:top-6 md:relative md:top-auto md:mx-0">
                <Sun className="w-5 h-5" />
              </div>
              <div className="flex-1 flex justify-start w-full">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white p-5 xs:p-6 rounded-3xl border border-reborn-forest/5 shadow-md max-w-md text-left w-full"
                >
                  <span className="bg-reborn-teal/10 text-reborn-teal text-[10px] xs:text-xs font-extrabold uppercase px-3 py-1 rounded-full">Langkah 4</span>
                  <h4 className="text-lg xs:text-xl font-bold text-reborn-forest mt-3 font-outfit">Penjemuran Alami (Sinar Matahari)</h4>
                  <p className="text-xs xs:text-sm text-reborn-forest/70 mt-2 font-medium">
                    Wadah yang telah dicetak setengah kering kemudian dijemur langsung di bawah terik sinar matahari secara alami untuk menguapkan sisa kadar air perlahan, guna menjaga kepadatan pori serat organik.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-row md:flex-row items-start md:items-center relative pl-16 md:pl-0">
              <div className="flex-1 md:text-right flex md:justify-end w-full">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white p-5 xs:p-6 rounded-3xl border border-reborn-forest/5 shadow-md max-w-md text-left w-full"
                >
                  <span className="bg-reborn-teal/10 text-reborn-teal text-[10px] xs:text-xs font-extrabold uppercase px-3 py-1 rounded-full">Langkah 5</span>
                  <h4 className="text-lg xs:text-xl font-bold text-reborn-forest mt-3 font-outfit">Pelapisan Emulsi Beeswax</h4>
                  <p className="text-xs xs:text-sm text-reborn-forest/70 mt-2 font-medium">
                    Tahap akhir, permukaan Bio-Box disemprot dengan emulsi lilin lebah alami (beeswax) yang dipanaskan. Lapisan lilin ini mengering membentuk proteksi food-grade anti bocor air dan minyak.
                  </p>
                </motion.div>
              </div>
              <div className="bg-reborn-teal text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 font-bold border-4 border-reborn-cream shadow absolute left-0 top-4 xs:top-6 md:relative md:top-auto md:mx-0">
                <Droplet className="w-5 h-5" />
              </div>
              <div className="flex-1 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. NOBLE PURPOSE & TEAM PROFILE */}
      <section id="purpose" className="py-24 bg-white border-t border-reborn-forest/5">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] xs:text-xs font-bold uppercase tracking-wider text-reborn-teal mb-3">Visi Mulia & Komunitas</h2>
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-reborn-forest tracking-tight font-outfit">
              Tujuan Mulia & Profil Tim REBORN
            </h3>
            <p className="text-sm xs:text-base sm:text-lg text-reborn-forest/70 mt-4 font-medium">
              Kami berkomitmen untuk mengintegrasikan keberlanjutan bumi, kesejahteraan petani lokal, dan sirkular ekonomi terpadu.
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-reborn-cream/60 rounded-3xl p-6 xs:p-8 border border-reborn-forest/5 text-left">
              <div className="bg-reborn-teal text-white p-3 rounded-2xl w-fit mb-6 shadow">
                <Leaf className="w-6 h-6 text-reborn-gold" />
              </div>
              <h4 className="text-lg xs:text-xl font-bold text-reborn-forest font-outfit">Pillar 1: Planet</h4>
              <p className="text-xs xs:text-sm text-reborn-forest/80 mt-3 font-medium leading-relaxed">
                Mencegah akumulasi sampah plastik sekali pakai dengan memproduksi kemasan yang terurai 100% alami di dalam tanah dalam 60 hari tanpa residu mikroplastik berbahaya.
              </p>
            </div>

            <div className="bg-reborn-cream/60 rounded-3xl p-6 xs:p-8 border border-reborn-forest/5 text-left">
              <div className="bg-reborn-teal text-white p-3 rounded-2xl w-fit mb-6 shadow">
                <Users className="w-6 h-6 text-reborn-gold" />
              </div>
              <h4 className="text-lg xs:text-xl font-bold text-reborn-forest font-outfit">Pillar 2: People</h4>
              <p className="text-xs xs:text-sm text-reborn-forest/80 mt-3 font-medium leading-relaxed">
                Memberdayakan petani di sekitar Kuningan (petani pisang & jagung Cilimus dan Cigintung) dengan membeli limbah tanaman mereka yang awalnya hanya dibakar dan mencemari udara.
              </p>
            </div>

            <div className="bg-reborn-cream/60 rounded-3xl p-6 xs:p-8 border border-reborn-forest/5 text-left">
              <div className="bg-reborn-teal text-white p-3 rounded-2xl w-fit mb-6 shadow">
                <TrendingUp className="w-6 h-6 text-reborn-gold" />
              </div>
              <h4 className="text-lg xs:text-xl font-bold text-reborn-forest font-outfit">Pillar 3: Profit</h4>
              <p className="text-xs xs:text-sm text-reborn-forest/80 mt-3 font-medium leading-relaxed">
                Membangun model ekonomi sirkular ramah lingkungan yang menguntungkan bagi UMKM kuliner dengan menyediakan alternatif kemasan modern premium dengan harga kompetitif.
              </p>
            </div>
          </div>

          {/* Team Profile */}
          <div className="bg-reborn-cream rounded-[2.5rem] p-6 md:p-12 border border-reborn-forest/5">
            <div className="text-center mb-12">
              <h4 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold text-reborn-forest font-outfit">Mengenal Tim Kami</h4>
              <p className="text-[10px] xs:text-xs sm:text-sm md:text-base text-reborn-forest/70 font-semibold mt-1">Divisi Teknik Informatika, Universitas Kuningan</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Member 1: Evan Maulana */}
              <div className="bg-white rounded-3xl p-6 border border-reborn-forest/5 shadow-md flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-reborn-teal/40 shadow-sm">
                  <img 
                    src="/evan.jpeg" 
                    alt="Evan Maulana" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="font-bold text-base xs:text-lg text-reborn-forest font-outfit">Evan Maulana</h5>
                <p className="text-[10px] xs:text-xs text-reborn-teal font-extrabold uppercase mt-1">Sistem Operasional</p>
                <p className="text-[10px] xs:text-xs text-reborn-forest/60 mt-3 font-medium">Merancang alur manajemen pasokan bahan baku & integrasi operasional.</p>
              </div>

              {/* Member 2: Muhammad Abi Busyroh */}
              <div className="bg-white rounded-3xl p-6 border border-reborn-forest/5 shadow-md flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-reborn-teal/40 shadow-sm">
                  <img 
                    src="/abi.jpeg" 
                    alt="Muhammad Abi Busyroh" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="font-bold text-base xs:text-lg text-reborn-forest font-outfit">Muhammad Abi Busyroh</h5>
                <p className="text-[10px] xs:text-xs text-reborn-teal font-extrabold uppercase mt-1">Produksi</p>
                <p className="text-[10px] xs:text-xs text-reborn-forest/60 mt-3 font-medium">Mengawasi jalannya mesin sterilisasi, pulping, pencetakan hot press, & coating.</p>
              </div>

              {/* Member 3: Nayla Nur Alvi */}
              <div className="bg-white rounded-3xl p-6 border border-reborn-forest/5 shadow-md flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-reborn-teal/40 shadow-sm">
                  <img 
                    src="/nayla.jpeg" 
                    alt="Nayla Nur Alvi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="font-bold text-base xs:text-lg text-reborn-forest font-outfit">Nayla Nur Alvi</h5>
                <p className="text-[10px] xs:text-xs text-reborn-teal font-extrabold uppercase mt-1">Keuangan</p>
                <p className="text-[10px] xs:text-xs text-reborn-forest/60 mt-3 font-medium">Mengatur anggaran riset formulasi, pembelian bahan, serta struktur harga jual B2B.</p>
              </div>

              {/* Member 4: Romi Ahmad Al-Malik */}
              <div className="bg-white rounded-3xl p-6 border border-reborn-forest/5 shadow-md flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-reborn-teal/40 shadow-sm">
                  <img 
                    src="/romi.jpeg" 
                    alt="Romi Ahmad Al-Malik" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="font-bold text-base xs:text-lg text-reborn-forest font-outfit">Romi Ahmad Al-Malik</h5>
                <p className="text-[10px] xs:text-xs text-reborn-teal font-extrabold uppercase mt-1">Pemasaran</p>
                <p className="text-[10px] xs:text-xs text-reborn-forest/60 mt-3 font-medium">Memimpin program akuisisi UMKM, kampanye sadar lingkungan, & kemitraan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 8. FOOTER */}
      <footer className="bg-reborn-forest text-reborn-cream pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 text-left">
          
          {/* Logo & Vision */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-7 h-7 text-reborn-gold" />
              <span className="font-extrabold text-xl xs:text-2xl tracking-widest text-white font-outfit">REBORN</span>
            </div>
            <p className="text-reborn-cream/70 text-xs xs:text-sm max-w-sm font-semibold leading-relaxed">
              Mengubah limbah pertanian lokal Kuningan berupa pelepah pisang dan kulit jagung menjadi Bio-Box kemasan organik pengganti Styrofoam karsinogenik.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h5 className="font-bold text-xs xs:text-sm uppercase tracking-wider text-reborn-gold mb-4 font-outfit">Navigasi Cepat</h5>
            <ul className="flex flex-col gap-2 text-xs xs:text-sm text-reborn-cream/70 font-semibold">
              <li><button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors">Hero</button></li>
              <li><button onClick={() => scrollToSection("problem")} className="hover:text-white transition-colors">Kris TPA</button></li>
              <li><button onClick={() => scrollToSection("solution")} className="hover:text-white transition-colors">Inovasi & Produk</button></li>
              <li><button onClick={() => scrollToSection("timeline")} className="hover:text-white transition-colors">Proses Produksi</button></li>
              <li><button onClick={() => scrollToSection("purpose")} className="hover:text-white transition-colors">Tim & Visi</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 flex flex-col gap-3 text-xs xs:text-sm text-reborn-cream/70 font-semibold">
            <h5 className="font-bold text-xs xs:text-sm uppercase tracking-wider text-reborn-gold mb-2 font-outfit">Hubungi Kami</h5>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-reborn-teal shrink-0" />
              <span>Teknik Informatika, Universitas Kuningan, Jawa Barat</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-reborn-teal shrink-0" />
              <span>info@rebornpack.id</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-reborn-teal shrink-0" />
              <span>+62 812-3456-7890</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] xs:text-xs text-reborn-cream/50 font-bold">
          <p>© {new Date().getFullYear()} REBORN Packaging Indonesia. Hak Cipta Dilindungi.</p>
          <p>Dibuat oleh Tim REBORN - Universitas Kuningan.</p>
        </div>
      </footer>

    </div>
  );
}
