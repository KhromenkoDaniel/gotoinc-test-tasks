import { useState, useEffect } from "react";

import ImageThumbnails from "./ImageThumbnails";
import MainImage from "./MainImage";

import { useProduct } from "@/context/ProductContext";

import { Thumbnail } from "@/types/gallery.ts";

const ProductGallery = () => {
    const { selectedProduct } = useProduct();
    const [mainImage, setMainImage] = useState(selectedProduct.mainImageThumbnail);

    useEffect(() => {
        setMainImage(selectedProduct.mainImageThumbnail);
    }, [selectedProduct]);

    const handleThumbnailClick = (thumbnail: Thumbnail) => {
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
