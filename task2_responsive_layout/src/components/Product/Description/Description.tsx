import { useState } from "react";

import ProductDescription from "@/components/Product/Description/Title";
import Table from "@/components/Product/Description/Table";

import { useProduct } from "@/context/ProductContext.tsx";

import { TABS } from "@/constants/information.ts";



const ProductInformation = () => {
    const [activeTab, setActiveTab] = useState(TABS.DESCRIPTION);
    const { selectedProduct } = useProduct();

    const renderTabContent = () => {
        switch (activeTab) {
            case TABS.DESCRIPTION:
                return <ProductDescription description={selectedProduct.description} />;
            case TABS.DETAILS:
                return <Table data={selectedProduct.details} />;
            case TABS.SHIPPING:
                return <Table data={selectedProduct.shipping} />;
            default:
                return null;
        }
    };

    return (
        <section className="product__information">
            <div className="product__tabs">
                <button
                    className={`product__tab ${activeTab === TABS.DESCRIPTION ? 'product__tab--active' : ''}`}
                    onClick={() => setActiveTab(TABS.DESCRIPTION)}
                >
                    {TABS.DESCRIPTION}
                </button>
                <button
                    className={`product__tab ${activeTab === TABS.DETAILS ? 'product__tab--active' : ''}`}
                    onClick={() => setActiveTab(TABS.DETAILS)}
                >
                    {TABS.DETAILS}
                </button>
                <button
                    className={`product__tab ${activeTab === TABS.SHIPPING ? 'product__tab--active' : ''}`}
                    onClick={() => setActiveTab(TABS.SHIPPING)}
                >
                    {TABS.SHIPPING}
                </button>
            </div>
            <div className="product__tab-content">
                {renderTabContent()}
            </div>
        </section>
    );
};

export default ProductInformation;
