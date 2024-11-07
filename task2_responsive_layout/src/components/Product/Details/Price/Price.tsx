import { ProductPriceProps } from "@/types/price.ts";

const ProductPrice = ({ price }: ProductPriceProps) => {
    return <p className="product__price">${price.toFixed(2)}</p>;
};

export default ProductPrice;
