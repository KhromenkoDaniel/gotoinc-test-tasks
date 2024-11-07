import { SizeListProps } from "@/types/product.ts";


const SizeList = ({ availableSizes, unavailableSizes, onSizeClick, selectedSize }: SizeListProps) => {
    return (
        <div className="product__sizes-list">
            {availableSizes.map((size, index) => (
                <button
                    key={index}
                    className={`product__size ${selectedSize === size ? 'product__size--active' : ''}`}
                    onClick={() => onSizeClick(size)}
                >
                    {size}
                </button>
            ))}
            {unavailableSizes.map((size, index) => (
                <button key={`unavailable-${index}`} className="product__size product__size--disabled" disabled>
                    {size}
                </button>
            ))}
        </div>
    );
};

export default SizeList;
