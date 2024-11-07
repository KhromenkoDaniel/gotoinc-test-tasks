import ProductLayout from "@/layouts/ProductLayout";

import ProductGallery from "@/components/Product/Gallery";
import ProductDetails from "@/components/Product/Details";
import ProductInformation from "@/components/Product/Description";

function App() {

    return (
        <ProductLayout>
            <ProductGallery />
            <ProductDetails />
            <ProductInformation />
        </ProductLayout>
    );
}

export default App;
