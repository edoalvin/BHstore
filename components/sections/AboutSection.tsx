import { Heart, ShieldCheck, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Cinta untuk Wanita",
    description: "Setiap produk kami dirancang dengan mempertimbangkan kenyamanan dan kepercayaan diri wanita.",
  },
  {
    icon: ShieldCheck,
    title: "Kualitas Terjamin",
    description: "Setiap produk melewati quality control ketat sebelum sampai ke tangan kamu.",
  },
  {
    icon: Users,
    title: "Komunitas Kami",
    description: "Bergabung dengan komunitas 2.000+ wanita yang sudah merasakan perbedaannya.",
  },
];

export default function AboutSection() {
  return (
    <section id="tentang" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center shadow-xl shadow-pink-200 overflow-hidden">
              <div className="text-center">
                <div className="text-8xl mb-4">🎀</div>
                <p className="text-pink-700 font-semibold text-lg px-8">
                  BHstore — Sejak 2018
                </p>
              </div>
            </div>
            {/* Decorative blob */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 rounded-full bg-pink-200 opacity-40 blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Lebih dari Sekedar{" "}
              <span className="text-pink-600">Pakaian Dalam</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              BHstore lahir dari kesadaran bahwa setiap wanita berhak mendapatkan
              pakaian dalam yang nyaman, berkualitas, dan harganya tidak
              menguras kantong. Berdiri sejak 2018, kami telah melayani ribuan
              pelanggan di seluruh Indonesia.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Kami bekerja sama langsung dengan produsen lokal untuk memastikan
              setiap produk memenuhi standar kualitas kami — mulai dari
              pemilihan bahan hingga jahitan yang rapi dan kuat.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">
                        {v.title}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
