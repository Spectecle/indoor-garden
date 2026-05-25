import { prisma } from "@/lib/prisma";
import ProductsClient from "@/components/admin/ProductsClient";

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    include: { clicks: { select: { id: true } } },
  });

  const data = products.map((p) => ({
    ...p,
    tags: JSON.parse(p.tags as string) as string[],
    clicks: p.clicks.length,
  }));

  return <ProductsClient products={data} />;
}
