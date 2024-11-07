type ProductDescriptionProps = {
    description: string;
};

const ProductDescription = ({ description }: ProductDescriptionProps) => (
    <div className="product__description">
        <p>{description}</p>
    </div>
);

export default ProductDescription;
