import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: [
      {
        name: "Soft Cotton Daily Bra",
        price: 85000,
        image: "https://placehold.co/400x400/fce7f3/be185d?text=Daily+Bra",
        category: "daily",
        badge: "Terlaris",
      },
      {
        name: "Sport Active Bra",
        price: 120000,
        image: "https://placehold.co/400x400/fce7f3/be185d?text=Sport+Bra",
        category: "sport",
        badge: "Baru",
      },
      {
        name: "Maternity Comfort Bra",
        price: 95000,
        image: "https://placehold.co/400x400/fce7f3/be185d?text=Maternity",
        category: "maternity",
        badge: null,
      },
      {
        name: "Lace Premium Bra",
        price: 150000,
        image: "https://placehold.co/400x400/fce7f3/be185d?text=Lace+Bra",
        category: "daily",
        badge: "Premium",
      },
      {
        name: "Seamless T-Shirt Bra",
        price: 110000,
        image: "https://placehold.co/400x400/fce7f3/be185d?text=Seamless",
        category: "daily",
        badge: null,
      },
      {
        name: "High Impact Sport Bra",
        price: 135000,
        image: "https://placehold.co/400x400/fce7f3/be185d?text=High+Impact",
        category: "sport",
        badge: null,
      },
      {
        name: "Nursing Bra Softcup",
        price: 98000,
        image: "https://placehold.co/400x400/fce7f3/be185d?text=Nursing",
        category: "maternity",
        badge: null,
      },
      {
        name: "Push-Up Everyday Bra",
        price: 125000,
        image: "https://placehold.co/400x400/fce7f3/be185d?text=Push+Up",
        category: "daily",
        badge: "Populer",
      },
    ],
  });

  console.log("✅ Seed berhasil: 8 produk telah ditambahkan.");
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
