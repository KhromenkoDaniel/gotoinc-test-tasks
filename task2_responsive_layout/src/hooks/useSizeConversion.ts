import { sizeConversionTable } from "@/constants/sizeConversionTable";

export const useSizeConversion = () => {
    const convertSize = (size: string, fromUnit: 'UK' | 'US' | 'EU' | 'Foot Length (cm)', toUnit: 'UK' | 'US' | 'EU' | 'Foot Length (cm)') => {
        const index = sizeConversionTable[fromUnit].indexOf(parseFloat(size));
        return index !== -1 ? String(sizeConversionTable[toUnit][index]) : size;
    };

    return { convertSize };
};
