import ProductCard from "../cards/ProductCard";

export default function RelatedProducts({ products }) {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mb-8">
        Related Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
