import { ShoppingBag, Camera, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pink-900 text-pink-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-pink-400 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                BH<span className="text-pink-300">store</span>
              </span>
            </div>
            <p className="text-pink-300 text-sm leading-relaxed">
              Toko pakaian dalam wanita terpercaya dengan bahan berkualitas dan
              harga yang terjangkau.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              {["Beranda", "Produk", "Tentang Kami", "Kontak"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-pink-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white mb-4">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-700 flex items-center justify-center hover:bg-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-700 flex items-center justify-center hover:bg-pink-500 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5 text-white" />
              </a>
            </div>
            <p className="text-pink-300 text-sm mt-4">
              📍 Jl. Contoh No. 123, Jakarta
            </p>
          </div>
        </div>

        <div className="border-t border-pink-800 mt-10 pt-6 text-center text-sm text-pink-400">
          © 2026 BHstore. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
