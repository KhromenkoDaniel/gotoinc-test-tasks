import { useState } from "react";

import Subtitle from "@/components/Subtitle";

import { useProduct } from "@/context/ProductContext";

const ProductColors = () => {
    const { products, selectedProduct, selectProduct } = useProduct();
    const [activeColorId, setActiveColorId] = useState(selectedProduct.id);

    const handleColorClick = (id: number, availableSizes: string[]) => {
        if (availableSizes.length > 0) {
            selectProduct(id);
            setActiveColorId(id);
        }
    };

    return (
        <div className="product__colors">
            <Subtitle text={"Colour:"} name={selectedProduct.color} />
            <div className="product__colors-list">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className={`product__color-link ${product.id === activeColorId ? 'product__color-link--active' : ''}`}
                        onClick={() => handleColorClick(product.id, product.availableSizes)}
                        style={{
                            filter: product.availableSizes.length === 0 ? 'opacity(0.25)' : 'none',
                            pointerEvents: product.availableSizes.length === 0 ? 'none' : 'auto',
                            cursor: product.availableSizes.length === 0 ? 'default' : 'pointer',
                        }}
                    >
                        <img src={product.colorImage.src} alt={product.colorImage.alt} className="product__color" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductColors;
