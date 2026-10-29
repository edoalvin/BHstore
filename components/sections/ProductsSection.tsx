"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, MessageCircle } from "lucide-react";

type Category = "all" | "daily" | "sport" | "maternity";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: "daily" | "sport" | "maternity";
  badge: string | null;
}

const categories: { label: string; value: Category }[] = [
  { label: "Semua", value: "all" },
  { label: "Daily", value: "daily" },
  { label: "Sport", value: "sport" },
  { label: "Maternity", value: "maternity" },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

function ProductCard({ product }: { product: Product }) {
  const waMessage = encodeURIComponent(
    `Halo BHstore! Saya tertarik dengan produk "${product.name}" seharga ${formatPrice(product.price)}. Apakah masih tersedia?`
  );
  const waLink = `https://wa.me/6281234567890?text=${waMessage}`;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-pink-100 transition-all duration-300">
      {/* Clickable image area → detail page */}
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-pink-50">
          <Image
            src={encodeURI(product.image)}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              {product.badge}
            </span>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-pink-900/0 group-hover:bg-pink-900/10 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-pink-600 text-xs font-bold px-3 py-1.5 rounded-full shadow">
              Lihat Detail
            </span>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base hover:text-pink-600 transition-colors cursor-pointer line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-pink-600 font-bold text-lg mb-4">
          {formatPrice(product.price)}
        </p>
        <div className="flex gap-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 flex items-center justify-center gap-1.5 border border-pink-200 text-pink-600 py-2 rounded-xl text-xs font-semibold hover:bg-pink-50 transition-colors"
          >
            Detail
          </Link>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-pink-600 text-white py-2 rounded-xl text-xs font-semibold hover:bg-pink-700 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Pesan WA
          </a>
        </div>
      </div>
    </div>
  );
}

function ProductSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
      <div className="w-full h-52 bg-pink-100" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-5 bg-pink-100 rounded w-1/2" />
        <div className="h-10 bg-gray-100 rounded-xl" />
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const url =
          activeCategory === "all"
            ? "/api/products"
            : `/api/products?category=${activeCategory}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Gagal memuat produk");
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        setError("Gagal memuat produk. Periksa koneksi database.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [activeCategory]);

  return (
    <section id="produk" className="py-20 bg-pink-50/40">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Koleksi Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Produk <span className="text-pink-600">Unggulan</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Pilihan bra terbaik untuk setiap kebutuhan — dari aktivitas
            sehari-hari hingga olahraga intensif.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat.value
                  ? "bg-pink-600 text-white shadow-md shadow-pink-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-pink-300 hover:text-pink-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Error */}
        {error && (
          <div className="text-center py-12">
            <p className="text-red-500 font-medium">{error}</p>
          </div>
        )}

        {/* Loading Skeleton */}
        {loading && !error && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && products.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">Belum ada produk di kategori ini.</p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            Lihat Semua Produk
          </a>
        </div>
      </div>
    </section>
  );
}
