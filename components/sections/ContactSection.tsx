import { Phone, Camera, MapPin, Clock, MessageCircle } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 812-3456-7890",
    href: "https://wa.me/6281234567890",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Camera,
    label: "Instagram",
    value: "@bhstore.official",
    href: "https://instagram.com",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: MapPin,
    label: "Alamat",
    value: "Jl. Contoh No. 123, Jakarta Selatan",
    href: "https://maps.google.com",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    value: "Senin–Sabtu, 09.00–21.00 WIB",
    href: null,
    color: "bg-orange-100 text-orange-600",
  },
];

export default function ContactSection() {
  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ada Pertanyaan? <span className="text-pink-600">Kami Siap Bantu</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Tim kami siap membantu kamu menemukan produk yang tepat. Jangan
            ragu untuk menghubungi kami!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-5">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div
                  className={`flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-md transition-all duration-300 ${
                    item.href ? "cursor-pointer" : ""
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                    <p className="font-semibold text-gray-900">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-pink-600 to-rose-500 rounded-3xl p-8 text-white shadow-2xl shadow-pink-200 flex flex-col items-start">
            <div className="text-5xl mb-6">💬</div>
            <h3 className="text-2xl font-bold mb-3">Chat Langsung di WhatsApp</h3>
            <p className="text-pink-100 leading-relaxed mb-8">
              Konsultasikan kebutuhan kamu dengan tim kami. Kami akan membantu
              menemukan ukuran dan model yang paling sesuai untukmu.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20BHstore!%20Saya%20ingin%20bertanya%20tentang%20produk."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-pink-600 font-bold px-7 py-3.5 rounded-full hover:bg-pink-50 transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Chat Sekarang
            </a>

            {/* Reassurance */}
            <p className="text-pink-200 text-sm mt-6">
              ✅ Respon cepat · ✅ Ramah · ✅ No hard selling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
