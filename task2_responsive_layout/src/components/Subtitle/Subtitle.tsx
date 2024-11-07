import { TSubtitleProps } from "@/types/subtitle.ts";

const Subtitle = ({ text, name, hasSize, unit}: TSubtitleProps) => {
    return (
        <div className="product__subtitle">
            <h3 className="product__subtitle-text">
                {text}
            </h3>
            <p className="product__subtitle-name">
                {hasSize ? name + ' '+ unit : name}
            </p>
        </div>
    );
}

export default Subtitle;
