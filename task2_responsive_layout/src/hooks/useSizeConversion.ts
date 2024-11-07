import { sizeConversionTable } from "@/constants/sizeConversionTable";
import { Unit } from "@/types/product.ts";

export const useSizeConversion = () => {
    const convertSize = (size: string, fromUnit: Unit, toUnit: Unit) => {
        const index = sizeConversionTable[fromUnit].indexOf(parseFloat(size));
        return index !== -1 ? String(sizeConversionTable[toUnit][index]) : size;
    };

    return { convertSize };
};
