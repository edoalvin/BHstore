"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { products } from "@/data/products";
import { Product } from "@/types";

type Category = Product["category"];

const categories: { label: string; value: Category | "all" }[] = [
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
      {/* Image */}
      <div className="relative overflow-hidden bg-pink-50">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">
          {product.name}
        </h3>
        <p className="text-pink-600 font-bold text-lg mb-4">
          {formatPrice(product.price)}
        </p>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-pink-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-pink-700 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Pesan via WA
        </a>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

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
            Pilihan bra terbaik untuk setiap kebutuhan — dari aktivitas sehari-hari
            hingga olahraga intensif.
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

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

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
