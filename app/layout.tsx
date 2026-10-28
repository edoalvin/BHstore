import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "BHstore – Nyaman di Setiap Saat",
  description:
    "Toko pakaian dalam wanita terpercaya. Bahan premium, ukuran lengkap A–F, harga terjangkau. Pengiriman seluruh Indonesia.",
  keywords: ["bra", "bh wanita", "pakaian dalam", "toko bh online"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-[family-name:var(--font-poppins)] bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
