type ProductTitleProps = {
    title: string;
};

const ProductTitle = ({ title }: ProductTitleProps) => {
    return <h1 className="product__title">{title}</h1>;
};

export default ProductTitle;
