import { useEffect, useState } from "react";
import { useProduct } from "@/context/ProductContext";

import useModal from "@/hooks/useModal";
import { useSizeConversion } from "@/hooks/useSizeConversion";

import Subtitle from "@/components/Subtitle";
import SizeGuideModal from "@/components/Product/Details/SizeGuideModal";
import UnitSelector from "@/components/Product/Details/Sizes/UnitSelector";
import SizeList from "@/components/Product/Details/Sizes/SizeList";

const ProductSizes = () => {
    const { selectedProduct } = useProduct();
    const { isOpen: isSizeGuideOpen, openModal: openSizeGuide, closeModal: closeSizeGuide } = useModal();
    const { convertSize } = useSizeConversion();

    const [selectedUnit, setSelectedUnit] = useState<'UK' | 'US' | 'EU' | 'Foot Length (cm)'>('UK');
    const [displayAvailableSizes, setDisplayAvailableSizes] = useState<string[]>(selectedProduct.availableSizes);
    const [displayUnavailableSizes, setDisplayUnavailableSizes] = useState<string[]>(selectedProduct.unavailableSizes);
    const [selectedSize, setSelectedSize] = useState<string>(selectedProduct.availableSizes[0]);

    useEffect(() => {
        setDisplayAvailableSizes(selectedProduct.availableSizes);
        setDisplayUnavailableSizes(selectedProduct.unavailableSizes);
        setSelectedSize(selectedProduct.availableSizes[0] || '');
    }, [selectedProduct]);

    const handleUnitClick = (unit: 'UK' | 'US' | 'EU' | 'Foot Length (cm)') => {
        setSelectedUnit(unit);

        const convertedAvailableSizes = selectedProduct.availableSizes.map((size) => convertSize(size, selectedUnit, unit));
        const convertedUnavailableSizes = selectedProduct.unavailableSizes.map((size) => convertSize(size, selectedUnit, unit));
        const convertedSelectedSize = convertSize(selectedSize, selectedUnit, unit);

        setDisplayAvailableSizes(convertedAvailableSizes);
        setDisplayUnavailableSizes(convertedUnavailableSizes);
        setSelectedSize(convertedSelectedSize);
    };

    const handleSizeClick = (size: string) => {
        setSelectedSize(size);
    };

    return (
        <div className="product__sizes">
            <Subtitle text={"Size:"} unit={selectedUnit} name={selectedSize} hasSize />
            <UnitSelector selectedUnit={selectedUnit} onUnitClick={handleUnitClick} />
            <SizeList
                availableSizes={displayAvailableSizes}
                unavailableSizes={displayUnavailableSizes}
                onSizeClick={handleSizeClick}
                selectedSize={selectedSize}
            />
            <div className="product__sizes-list--guide">
                <span onClick={openSizeGuide}>Size guide</span>
            </div>
            <SizeGuideModal isOpen={isSizeGuideOpen} closeModal={closeSizeGuide} />
        </div>
    );
};

export default ProductSizes;
