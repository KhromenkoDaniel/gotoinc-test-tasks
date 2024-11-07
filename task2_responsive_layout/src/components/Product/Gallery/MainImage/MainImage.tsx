import { MainImageProps } from "@/types/gallery";

const MainImage = ({ src, alt }: MainImageProps) => {
    return (
        <div className="product__image-main">
            <img src={src} alt={alt} className="product__image" />
        </div>
    );
};

export default MainImage;
