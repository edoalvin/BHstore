import { Gem, Ruler, Truck, Tag } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Bahan Premium",
    description:
      "Dibuat dari cotton lembut dan bahan berkualitas tinggi yang nyaman di kulit sepanjang hari.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Ruler,
    title: "Ukuran Lengkap",
    description:
      "Tersedia ukuran A hingga F untuk semua bentuk tubuh. Kami percaya setiap wanita berhak nyaman.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Truck,
    title: "Pengiriman Cepat",
    description:
      "Same day delivery untuk area Jakarta & sekitarnya. Luar kota dikirim via JNE, J&T, dan SiCepat.",
    color: "bg-fuchsia-100 text-fuchsia-600",
  },
  {
    icon: Tag,
    title: "Harga Terjangkau",
    description:
      "Kualitas premium tidak harus mahal. Dapatkan produk terbaik mulai dari Rp 85.000.",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kenapa Pilih <span className="text-pink-600">BHstore?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Kami berkomitmen memberikan produk terbaik dengan pelayanan yang
            menyenangkan untuk setiap pelanggan.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-50 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${feature.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
