import { useState, useEffect } from "react";
import MainImage from "./MainImage";
import ImageThumbnails from "./ImageThumbnails";
import { useProduct } from "@/context/ProductContext";

const ProductGallery = () => {
    const { selectedProduct } = useProduct();
    const [mainImage, setMainImage] = useState(selectedProduct.mainImageThumbnail);

    useEffect(() => {
        setMainImage(selectedProduct.mainImageThumbnail);
    }, [selectedProduct]);

    const handleThumbnailClick = (thumbnail: { src: string; alt: string }) => {
        setMainImage(thumbnail);
    };

    return (
        <section className="product__gallery">
            {mainImage && (
                <MainImage
                    src={mainImage.src}
                    alt={mainImage.alt}
                />
            )}
            <ImageThumbnails thumbnails={selectedProduct.galleryImages} onThumbnailClick={handleThumbnailClick} />
        </section>
    );
};

export default ProductGallery;
