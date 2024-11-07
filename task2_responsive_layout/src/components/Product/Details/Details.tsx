import ProductTitle from './Title';
import ProductPrice from './Price';
import ProductOptions from './Options';
import ProductActions from './Actions';

import { useProduct } from "@/context/ProductContext";
import heart from "@/assets/icons/heart.svg";

const ProductDetails = () => {
    const { selectedProduct } = useProduct();

    return (
        <section className="product__details">
            <ProductTitle title={selectedProduct.name}/>
            <ProductPrice price={selectedProduct.price}/>
            <ProductOptions/>
            <ProductActions/>
            <button className="wishlist__button">
                <img src={heart} alt={"heart"}/>
            </button>
        </section>
    );
};

export default ProductDetails;
