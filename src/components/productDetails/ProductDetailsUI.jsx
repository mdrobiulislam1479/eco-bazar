import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";


export default function ProductDetailsUI({ product, related }) {
  return (
    <section className="container mx-auto px-4 py-10">
      {/* top section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>

      {/* tabs/reviews */}
      <div className="mt-12">
        <ProductTabs product={product} />
      </div>

      {/* related products */}
      <div className="mt-14">
        <RelatedProducts products={related} />
      </div>
    </section>
  );
}
