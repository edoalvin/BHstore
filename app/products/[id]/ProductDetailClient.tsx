"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MessageCircle,
  Tag,
  Layers,
  Palette,
  Ruler,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: "daily" | "sport" | "maternity";
  badge: string | null;
  description: string | null;
  colors: string[];
  sizes: string[];
  colorImages: Record<string, string>;
}

const categoryLabel: Record<string, string> = {
  daily: "Daily",
  sport: "Sport",
  maternity: "Maternity",
};

const categoryColor: Record<string, string> = {
  daily: "bg-pink-100 text-pink-700",
  sport: "bg-blue-100 text-blue-700",
  maternity: "bg-purple-100 text-purple-700",
};

const colorDots: Record<string, string> = {
  Hitam: "bg-gray-900",
  Putih: "bg-white border border-gray-300",
  Nude: "bg-amber-200",
  "Abu-abu": "bg-gray-400",
  "Abu-abu Muda": "bg-gray-200 border border-gray-300",
  Pink: "bg-pink-400",
  "Pink Muda": "bg-pink-200 border border-pink-300",
  "Pink Fuchsia": "bg-fuchsia-500",
  "Biru Navy": "bg-blue-900",
  "Biru Royal": "bg-blue-600",
  "Biru Muda": "bg-blue-200 border border-blue-300",
  "Hijau Tosca": "bg-teal-400",
  "Merah Marun": "bg-red-900",
  Merah: "bg-red-500",
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

function DetailSkeleton() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-10 animate-pulse">
          <div className="h-4 w-48 bg-gray-200 rounded mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="aspect-square bg-pink-100 rounded-3xl" />
            <div className="space-y-4 pt-2">
              <div className="h-6 w-20 bg-pink-100 rounded-full" />
              <div className="h-9 w-3/4 bg-gray-200 rounded-lg" />
              <div className="h-9 w-1/3 bg-pink-100 rounded-lg" />
              <div className="h-28 bg-gray-100 rounded-2xl" />
              <div className="h-14 bg-gray-100 rounded-2xl" />
              <div className="h-14 bg-gray-100 rounded-2xl" />
              <div className="h-12 bg-pink-200 rounded-full" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function ProductDetailClient() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [displayImage, setDisplayImage] = useState<string>("");

  useEffect(() => {
    if (!params.id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${params.id}`);
        const json = await res.json();

        if (!res.ok) {
          setError(json?.error ?? "Produk tidak ditemukan.");
          return;
        }

        setProduct(json);
        setDisplayImage(json.image);
        if (json.colors?.length > 0) setSelectedColor(json.colors[0]);
        if (json.sizes?.length > 0) setSelectedSize(json.sizes[0]);
      } catch (err) {
        setError("Gagal memuat produk. Periksa koneksi internet.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  // Ganti gambar saat warna dipilih
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    if (!product) return;
    // Cek apakah ada gambar untuk warna ini, kalau tidak pakai gambar utama
    const colorImg = product.colorImages?.[color];
    setDisplayImage(colorImg ?? product.image);
  };

  const waMessage = product
    ? encodeURIComponent(
        `Halo BHstore! Saya tertarik dengan produk "${product.name}"` +
          (selectedColor ? ` warna ${selectedColor}` : "") +
          (selectedSize ? ` ukuran ${selectedSize}` : "") +
          ` seharga ${formatPrice(product.price)}. Apakah masih tersedia?`
      )
    : "";

  if (loading) return <DetailSkeleton />;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-gray-50">
        {error ? (
          <div className="max-w-5xl mx-auto px-4 py-20 text-center">
            <p className="text-red-500 text-lg font-medium mb-6">{error}</p>
            <Link
              href="/#produk"
              className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Produk
            </Link>
          </div>
        ) : (
          product && (
            <div className="max-w-5xl mx-auto px-4 py-10">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
                <Link href="/" className="hover:text-pink-600 transition-colors">
                  Beranda
                </Link>
                <span>/</span>
                <Link href="/#produk" className="hover:text-pink-600 transition-colors">
                  Produk
                </Link>
                <span>/</span>
                <span className="text-gray-700 font-medium truncate max-w-xs">
                  {product.name}
                </span>
              </nav>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Product Image — berubah sesuai warna dipilih */}
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-pink-50 shadow-lg shadow-pink-100">
                  <Image
                    key={displayImage}
                    src={encodeURI(displayImage)}
                    alt={`${product.name}${selectedColor ? ` - ${selectedColor}` : ""}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-opacity duration-300"
                    priority
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-pink-600 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow">
                      {product.badge}
                    </span>
                  )}
                  {/* Label warna aktif di atas gambar */}
                  {selectedColor && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {selectedColor}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div>
                  {/* Category */}
                  <span
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full mb-4 ${
                      categoryColor[product.category]
                    }`}
                  >
                    <Tag className="w-3.5 h-3.5" />
                    {categoryLabel[product.category]}
                  </span>

                  {/* Name */}
                  <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
                    {product.name}
                  </h1>

                  {/* Price */}
                  <p className="text-3xl font-bold text-pink-600 mb-6">
                    {formatPrice(product.price)}
                  </p>

                  {/* Description */}
                  {product.description && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2 text-sm">
                        <Layers className="w-4 h-4 text-pink-500" />
                        Deskripsi Produk
                      </div>
                      <p className="text-gray-500 leading-relaxed text-sm bg-white rounded-2xl p-4 border border-gray-100">
                        {product.description}
                      </p>
                    </div>
                  )}

                  {/* Colors */}
                  {Array.isArray(product.colors) && product.colors.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-gray-700 font-semibold mb-3 text-sm">
                        <Palette className="w-4 h-4 text-pink-500" />
                        Pilihan Warna
                        {selectedColor && (
                          <span className="text-pink-600 font-normal ml-1">
                            — {selectedColor}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {product.colors.map((color) => {
                          const hasVariantImage = !!product.colorImages?.[color];
                          return (
                            <button
                              key={color}
                              onClick={() => handleColorSelect(color)}
                              title={color}
                              className={`flex items-center gap-2 px-3 py-2 rounded-xl border-2 transition-all text-sm font-medium ${
                                selectedColor === color
                                  ? "border-pink-500 bg-pink-50 text-pink-700"
                                  : "border-gray-200 bg-white text-gray-600 hover:border-pink-300"
                              }`}
                            >
                              <span
                                className={`w-4 h-4 rounded-full flex-shrink-0 ${
                                  colorDots[color] ?? "bg-gray-300"
                                }`}
                              />
                              {color}
                              {/* Indikator kamera jika ada gambar variannya */}
                              {hasVariantImage && (
                                <span className="text-xs text-pink-400">📷</span>
                              )}
                              {selectedColor === color && (
                                <CheckCircle2 className="w-3.5 h-3.5 text-pink-500" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Sizes */}
                  {Array.isArray(product.sizes) && product.sizes.length > 0 && (
                    <div className="mb-8">
                      <div className="flex items-center gap-2 text-gray-700 font-semibold mb-3 text-sm">
                        <Ruler className="w-4 h-4 text-pink-500" />
                        Pilihan Ukuran
                        {selectedSize && (
                          <span className="text-pink-600 font-normal ml-1">
                            — {selectedSize}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`w-12 h-12 rounded-xl border-2 font-bold text-sm transition-all ${
                              selectedSize === size
                                ? "border-pink-500 bg-pink-600 text-white shadow-md shadow-pink-200"
                                : "border-gray-200 bg-white text-gray-700 hover:border-pink-300 hover:text-pink-600"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/6281234567890?text=${waMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-pink-600 text-white py-3.5 rounded-full font-bold hover:bg-pink-700 transition-colors shadow-lg shadow-pink-200"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Pesan via WhatsApp
                    </a>
                    <button
                      onClick={() => router.back()}
                      className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-600 px-6 py-3.5 rounded-full font-semibold hover:border-pink-300 hover:text-pink-600 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Kembali
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </main>
      <Footer />
    </>
  );
}
