import ProductColors from "@/components/Product/Details/Colors/Colors.tsx";
import ProductSizes from "@/components/Product/Details/Sizes";


const ProductOptions = () => {
    return (
        <div className="product__options">
            <ProductColors />
            <ProductSizes />
        </div>
    );
};

export default ProductOptions;
