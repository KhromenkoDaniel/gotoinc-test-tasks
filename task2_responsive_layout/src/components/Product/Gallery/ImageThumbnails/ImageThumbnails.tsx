import { useState } from "react";
import { ImageThumbnailsProps } from "@/types/gallery";

const ImageThumbnails = ({ thumbnails, onThumbnailClick }: ImageThumbnailsProps) => {
    const [activeThumbnail, setActiveThumbnail] = useState<string | null>(null);

    const handleThumbnailClick = (thumbnail: { src: string; alt: string }) => {
        setActiveThumbnail(thumbnail.src);
        onThumbnailClick(thumbnail);
    };

    return (
        <div className="product__image-thumbnails">
            {thumbnails.map((thumbnail, index) => (
                <img
                    key={index}
                    src={thumbnail.src}
                    alt={thumbnail.alt}
                    className={`product__image-thumbnails-item ${activeThumbnail === thumbnail.src ? 'product__image-thumbnails-item--active' : ''}`}
                    onClick={() => handleThumbnailClick(thumbnail)}
                />
            ))}
        </div>
    );
};

export default ImageThumbnails;
