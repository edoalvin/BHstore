import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  // TRUNCATE + reset sequence agar ID selalu mulai dari 1
  await prisma.$executeRawUnsafe('TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;');

  await prisma.product.createMany({
    data: [
      {
        name: "Soft Cotton Daily Bra",
        price: 85000,
        image: "/image/daily bra.jpeg",
        category: "daily",
        badge: "Terlaris",
        description:
          "Bra harian yang dibuat dari bahan cotton lembut berkualitas tinggi. Dirancang untuk kenyamanan maksimal sepanjang hari dengan jahitan halus anti-iritasi. Cocok untuk aktivitas sehari-hari di rumah maupun luar ruangan.",
        colors: ["Nude", "Hitam", "Putih", "Abu-abu"],
        sizes: ["A", "B", "C", "D"],
        colorImages: {
          Hitam: "/image/daily hitam.png",
          Putih: "/image/daily putih.png",
          "Abu-abu": "/image/daily abu.png",
          // Nude → gambar utama daily bra.jpeg
        },
      },
      {
        name: "Sport Active Bra",
        price: 120000,
        image: "/image/sport bra.jpeg",
        category: "sport",
        badge: "Baru",
        description:
          "Sport bra dengan teknologi moisture-wicking yang menyerap keringat dengan cepat. Dilengkapi tali yang dapat disesuaikan dan padding tipis untuk dukungan optimal saat olahraga ringan hingga sedang seperti yoga, pilates, dan jogging.",
        colors: ["Hitam", "Pink", "Biru Navy", "Hijau Tosca"],
        sizes: ["A", "B", "C", "D"],
        colorImages: {
          // Hitam → gambar utama sport bra.jpeg
          Pink: "/image/Pink sport.png",
          "Biru Navy": "/image/Navy sport.png",
          "Hijau Tosca": "/image/Hijau sport.png",
        },
      },
      {
        name: "Maternity Comfort Bra",
        price: 95000,
        image: "/image/maternity bra.jpeg",
        category: "maternity",
        badge: null,
        description:
          "Bra khusus ibu hamil yang dirancang untuk memberikan kenyamanan ekstra selama masa kehamilan. Bahan yang stretchy mengikuti perubahan ukuran tubuh, dengan tali lebar yang mendistribusikan beban secara merata dan tidak menekan.",
        colors: ["Putih", "Nude", "Abu-abu Muda"],
        sizes: ["B", "C", "D", "E"],
        colorImages: {
          // Putih → gambar utama maternity bra.jpeg
          Nude: "/image/maternity nude.png",
          "Abu-abu Muda": "/image/maternity Abu.png",
        },
      },
      {
        name: "Lace Premium Bra",
        price: 150000,
        image: "/image/lace bra.jpeg",
        category: "daily",
        badge: "Premium",
        description:
          "Bra renda premium dengan desain elegan yang memadukan keindahan dan kenyamanan. Dibuat dari bahan renda berkualitas tinggi yang lembut di kulit. Sempurna untuk tampilan sehari-hari maupun acara spesial.",
        colors: ["Hitam", "Putih", "Merah Marun", "Nude"],
        sizes: ["A", "B", "C", "D", "E"],
        colorImages: {
          // Hitam → gambar utama lace bra.jpeg
          Putih: "/image/lace putih.png",
          "Merah Marun": "/image/lace maroon.png",
          Nude: "/image/lace nude.png",
        },
      },
      {
        name: "Seamless T-Shirt Bra",
        price: 110000,
        image: "/image/seamless bra.jpeg",
        category: "daily",
        badge: null,
        description:
          "Bra tanpa jahitan (seamless) yang tidak terlihat di bawah pakaian ketat. Teknologi seamless memberikan tampilan halus dan rapi, ideal untuk dipakai dengan kaos atau blus tipis. Bahan microfiber yang sangat lembut dan breathable.",
        colors: ["Nude", "Hitam", "Putih", "Pink Muda"],
        sizes: ["A", "B", "C", "D"],
        colorImages: {
          // Nude → gambar utama seamless bra.jpeg
          Hitam: "/image/seamless hitam.png",
          Putih: "/image/seamless putih.png",
          "Pink Muda": "/image/seamless pink.png",
        },
      },
      {
        name: "High Impact Sport Bra",
        price: 135000,
        image: "/image/high impact.jpeg",
        category: "sport",
        badge: null,
        description:
          "Sport bra high impact untuk olahraga intensitas tinggi seperti lari, HIIT, dan aerobik. Dilengkapi dengan underwire ringan, padding tebal, dan tali silang di belakang untuk dukungan dan stabilitas maksimal.",
        colors: ["Hitam", "Abu-abu", "Pink Fuchsia", "Biru Royal"],
        sizes: ["B", "C", "D", "E", "F"],
        colorImages: {
          // Hitam → gambar utama high impact.jpeg
          "Abu-abu": "/image/high abu abu.png",
          "Pink Fuchsia": "/image/high pink.png",
          "Biru Royal": "/image/high biru royal.png",
        },
      },
      {
        name: "Nursing Bra Softcup",
        price: 98000,
        image: "/image/nursing bra.jpeg",
        category: "maternity",
        badge: null,
        description:
          "Bra menyusui dengan klip bukaan satu tangan yang memudahkan saat menyusui. Bahan cotton organik yang lembut aman untuk kulit sensitif bayi dan ibu. Cup yang dapat dibuka memudahkan proses menyusui kapan saja dan di mana saja.",
        colors: ["Nude", "Putih", "Biru Muda", "Pink Muda"],
        sizes: ["C", "D", "E", "F"],
        colorImages: {
          // Nude → gambar utama nursing bra.jpeg
          Putih: "/image/nursing putih.png",
          "Biru Muda": "/image/nursing blue.png",
          "Pink Muda": "/image/nursing pink.png",
        },
      },
      {
        name: "Push-Up Everyday Bra",
        price: 125000,
        image: "/image/push up bra.jpeg",
        category: "daily",
        badge: "Populer",
        description:
          "Push-up bra dengan padding anatomis yang memberikan efek push-up natural. Desain yang stylish dengan bahan premium dan underwire nyaman. Meningkatkan kepercayaan diri untuk tampilan sehari-hari yang sempurna.",
        colors: ["Hitam", "Nude", "Putih", "Merah", "Pink"],
        sizes: ["A", "B", "C", "D"],
        colorImages: {
          // Hitam → gambar utama push up bra.jpeg
          Nude: "/image/push up nude.png",
          Putih: "/image/push up putih.png",
          Merah: "/image/push up merah.png",
          Pink: "/image/push up pink.png",
        },
      },
    ],
  });

  console.log("✅ Seed berhasil: 8 produk dengan colorImages lengkap.");
}

main()
  .catch((e) => {
    console.error("❌ Seed gagal:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
