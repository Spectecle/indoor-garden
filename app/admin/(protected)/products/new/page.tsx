import ProductForm from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold">Add Product</h1>
        <p className="text-[#4a5e4a] text-sm mt-1">Add a new affiliate product to the shop</p>
      </div>
      <ProductForm />
    </div>
  );
}
