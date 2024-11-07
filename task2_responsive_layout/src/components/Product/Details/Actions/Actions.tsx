import basket from '@/assets/icons/basket.svg'
import heart from '@/assets/icons/heart.svg'
import weightScale from '@/assets/icons/weightScale.svg'

const ProductActions = () => {
    return (
        <div className="product__actions">
            <button className="product__button product__button--add">
                <img src={basket} alt={"basket"}/>
                Add to cart
            </button>
            <button className="product__button product__button--wishlist">
                <img src={heart} alt={"heart"}/>
            </button>
            <button className="product__button product__button--compare">
                <img src={weightScale} alt={"weightScale"}/>
            </button>
        </div>
    );
};

export default ProductActions;
