import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kata <span className="text-pink-600">Pelanggan Kami</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Lebih dari 2.000 pelanggan sudah mempercayai BHstore. Ini cerita
            mereka.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-pink-50 rounded-2xl p-6 border border-pink-100 hover:shadow-lg hover:shadow-pink-100 transition-all duration-300"
            >
              <StarRating rating={t.rating} />

              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6 italic">
                &ldquo;{t.comment}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover"
                  unoptimized
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
