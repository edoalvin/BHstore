import { Suspense } from "react";
import ProductDetailClient from "./ProductDetailClient";

export default function ProductDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-20 bg-gray-50 flex items-center justify-center">
          <div className="text-pink-400 text-lg">Memuat produk...</div>
        </div>
      }
    >
      <ProductDetailClient />
    </Suspense>
  );
}
