import Image from "next/image";
import { ShoppingBag, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="min-h-screen pt-20 bg-gradient-to-br from-pink-50 via-white to-rose-50 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            🎀 Koleksi Terbaru 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Nyaman di{" "}
            <span className="text-pink-600">Setiap Saat,</span>
            <br />
            Cantik Setiap Hari
          </h1>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Temukan koleksi bra premium dengan bahan lembut, ukuran lengkap A–F,
            dan desain yang tetap stylish untuk menemani aktivitasmu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#produk"
              className="inline-flex items-center justify-center gap-2 bg-pink-600 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-pink-700 transition-colors shadow-lg shadow-pink-200"
            >
              <ShoppingBag className="w-5 h-5" />
              Lihat Koleksi
            </a>
            <a
              href="#tentang"
              className="inline-flex items-center justify-center gap-2 border-2 border-pink-200 text-pink-700 px-7 py-3.5 rounded-full font-semibold hover:bg-pink-50 transition-colors"
            >
              Tentang Kami
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            <div>
              <p className="text-2xl font-bold text-gray-900">2.000+</p>
              <p className="text-sm text-gray-500">Pelanggan Puas</p>
            </div>
            <div className="border-l border-gray-200 pl-8">
              <p className="text-2xl font-bold text-gray-900">50+</p>
              <p className="text-sm text-gray-500">Pilihan Produk</p>
            </div>
            <div className="border-l border-gray-200 pl-8">
              <div className="flex items-center gap-1">
                <p className="text-2xl font-bold text-gray-900">4.9</p>
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-sm text-gray-500">Rating Toko</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl shadow-2xl shadow-pink-200 relative overflow-hidden">
            <Image
              src="/image/BH1.jpeg"
              alt="Koleksi BHstore"
              fill
              sizes="(max-width: 768px) 288px, 384px"
              className="object-cover"
              priority
            />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-pink-400 opacity-20" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-rose-400 opacity-20" />
          </div>
          {/* Floating badge */}
          <div className="absolute top-6 -left-4 md:left-0 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
            <span className="text-2xl">🎀</span>
            <div>
              <p className="text-xs text-gray-500">Bahan</p>
              <p className="text-sm font-semibold text-gray-800">Premium Cotton</p>
            </div>
          </div>
          <div className="absolute bottom-6 -right-4 md:right-0 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
            <span className="text-2xl">📦</span>
            <div>
              <p className="text-xs text-gray-500">Pengiriman</p>
              <p className="text-sm font-semibold text-gray-800">Same Day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
