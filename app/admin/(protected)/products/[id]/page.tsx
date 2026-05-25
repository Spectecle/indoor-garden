export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProductForm from "@/components/admin/ProductForm";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold">Edit Product</h1>
        <p className="text-[#4a5e4a] text-sm mt-1">{product.name}</p>
      </div>
      <ProductForm
        product={{
          ...product,
          tags: JSON.parse(product.tags as string) as string[],
        }}
      />
    </div>
  );
}
