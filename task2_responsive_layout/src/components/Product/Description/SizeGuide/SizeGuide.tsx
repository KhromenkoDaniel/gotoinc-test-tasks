const ProductSizeGuide = () => (
    <div className="product__size-guide">
            <h3 className="product__info-subtitle">Size guide</h3>
            <p>Follow the simple steps below to determine your shoe size. Make sure you do this during or at the end of day to ensure the right size (feet typically swell during the day).</p>
            <ol className="product__size-steps">
                    <li>Put a piece of blank paper under your feet. Stand up straight and have your heel lightly touching against the wall.</li>
                    <li>Have someone mark the end of the longest toe and the back of your heel on the sheet with a pen or pencil.</li>
                    <li>Afterwards measure the length of your feet from heel to toe.</li>
                    <li>Repeat the steps for your other foot and compare it with our size chart below.</li>
            </ol>
            <img src="images/size-guide.jpg" alt="How to measure shoe size" className="product__size-guide-image" />
    </div>
);

export default ProductSizeGuide;
