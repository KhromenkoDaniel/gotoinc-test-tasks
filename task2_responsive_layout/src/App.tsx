function App() {

  return (
    <>
        <header className="breadcrumb">
            <nav className="breadcrumb__nav">
                <ul className="breadcrumb__list">
                    <li className="breadcrumb__item"><a href="#" className="breadcrumb__link">Home</a></li>
                    <li className="breadcrumb__item"><a href="#" className="breadcrumb__link">Unisex Shoes</a></li>
                    <li className="breadcrumb__item"><a href="#" className="breadcrumb__link">Unisex SportStyle Shoes</a></li>
                </ul>
            </nav>
        </header>

        <main className="product">
            <section className="product__gallery">
                <div className="product__image-main">
                    <img src="images/shoe-main.jpg" alt="ASICS GEL-KAYANO 14" className="product__image"/>
                </div>
                <div className="product__image-thumbnails">
                    <img src="images/shoe-thumb1.jpg" alt="ASICS GEL-KAYANO 14 side view" className="product__thumbnail"/>
                    <img src="images/shoe-thumb2.jpg" alt="ASICS GEL-KAYANO 14 sole view" className="product__thumbnail"/>
                    <img src="images/shoe-thumb3.jpg" alt="ASICS GEL-KAYANO 14 pair" className="product__thumbnail"/>
                    <img src="images/shoe-thumb4.jpg" alt="ASICS GEL-KAYANO 14 angle view" className="product__thumbnail"/>
                </div>
            </section>

            <section className="product__details">
                <h1 className="product__title">ASICS GEL-KAYANO 14</h1>
                <p className="product__price">$155.00</p>

                <div className="product__options">
                    <div className="product__colors">
                        <h3 className="product__subtitle">Colour:</h3>
                        <div className="product__colors-list">
                            <img src="images/color1.jpg" alt="White Tai Chi Yellow" className="product__color"/>
                            <img src="images/color2.jpg" alt="Black" className="product__color"/>
                            <img src="images/color3.jpg" alt="Blue" className="product__color"/>
                            <img src="images/color4.jpg" alt="Pink" className="product__color"/>
                            <img src="images/color5.jpg" alt="Grey" className="product__color"/>
                        </div>
                    </div>

                    <div className="product__sizes">
                        <h3 className="product__subtitle">Size:</h3>
                        <div className="product__sizes-list">
                            <button className="product__size">6</button>
                            <button className="product__size product__size--active">6.5</button>
                            <button className="product__size">7</button>
                            <button className="product__size">7.5</button>
                            <button className="product__size">8</button>
                            <button className="product__size">8.5</button>
                            <button className="product__size">9</button>
                            <button className="product__size">9.5</button>
                            <button className="product__size">10</button>
                            <button className="product__size">10.5</button>
                            <button className="product__size">11</button>
                            <button className="product__size">11.5</button>
                            <button className="product__size product__size--disabled" disabled>12</button>
                            <button className="product__size product__size--disabled" disabled>12.5</button>
                            <button className="product__size">13</button>
                        </div>
                    </div>
                </div>

                <div className="product__actions">
                    <button className="product__button product__button--add">Add to cart</button>
                    <button className="product__button product__button--wishlist">Add to wishlist</button>
                    <button className="product__button product__button--compare">Compare</button>
                </div>
            </section>

            <section className="product__information">
                <h2 className="product__info-title">Detailed information</h2>
                <div className="product__description">
                    <h3 className="product__info-subtitle">Description</h3>
                    <p>The ASICS GEL-KAYANO 14 is a classNameic running shoe designed for stability and support. Featuring advanced GEL technology in the midsole, this model offers superior shock absorption, making it suitable for long runs. The retro style pays homage to the original 2008 design, combining both performance and streetwear appeal. Its durable rubber outsole, supportive structure, and breathable mesh upper make it ideal for runners who overpronate, ensuring comfort and balance during intense runs.</p>
                </div>

                <div className="product__details-list">
                    <h3 className="product__info-subtitle">Details</h3>
                    <ul className="product__specs">
                        <li className="product__spec-item"><strong>Brand:</strong> ASICS</li>
                        <li className="product__spec-item"><strong>Model:</strong> GEL-KAYANO 14</li>
                        <li className="product__spec-item"><strong>Type:</strong> Running Shoe</li>
                        <li className="product__spec-item"><strong>Cushioning:</strong> GEL technology</li>
                        <li className="product__spec-item"><strong>Weight:</strong> 11.5 oz (men's size 9)</li>
                    </ul>
                </div>

                <div className="product__shopping-info">
                    <h3 className="product__info-subtitle">Shopping</h3>
                    <ul className="product__shopping-list">
                        <li className="product__shopping-item"><strong>ASICS Official Store:</strong> $160</li>
                        <li className="product__shopping-item"><strong>Amazon:</strong> $140-$160 (varies by size)</li>
                        <li className="product__shopping-item"><strong>Foot Locker:</strong> $150</li>
                        <li className="product__shopping-item"><strong>Zappos:</strong> $155 (Free shipping options)</li>
                    </ul>
                </div>

                <div className="product__size-guide">
                    <h3 className="product__info-subtitle">Size guide</h3>
                    <p>Follow the simple steps below to determine your shoe size. Make sure you do this during or at the end of day to ensure the right size (feet typically swell during the day).</p>
                    <ol className="product__size-steps">
                        <li>Put a piece of blank paper under your feet. Stand up straight and have your heel lightly touching against the wall.</li>
                        <li>Have someone mark the end of the longest toe and the back of your heel on the sheet with a pen or pencil.</li>
                        <li>Afterwards measure the length of your feet from heel to toe.</li>
                        <li>Repeat the steps for your other foot and compare it with our size chart below.</li>
                    </ol>
                    <img src="images/size-guide.jpg" alt="How to measure shoe size" className="product__size-guide-image"/>
                </div>
            </section>
        </main>
    </>
  )
}

export default App
