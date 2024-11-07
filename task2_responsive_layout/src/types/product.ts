import { Data } from "@/types/table.ts";
import { Image, Thumbnail } from "@/types/gallery.ts";

export type Product = {
    id: number;
    name: string;
    price: number;
    color: string;
    availableSizes: string[];
    unavailableSizes: string[];
    colorImage: Image;
    galleryImages: Thumbnail[];
    mainImageThumbnail: Image | null;
    description: string;
    details: Data[];
    shipping: Data[];
};

export type ProductContextType = {
    products: Product[];
    selectedProduct: Product;
    selectProduct: (id: number) => void;
};

export type SizeListProps = {
    availableSizes: string[];
    unavailableSizes: string[];
    onSizeClick: (size: string) => void;
    selectedSize: string;
};

export type Unit = 'UK' | 'US' | 'EU' | 'Foot Length (cm)';

export type UnitSelectorProps = {
    selectedUnit: Unit;
    onUnitClick: (unit: Unit) => void;
};

export type ProductProviderProps = {
    children: React.ReactNode;
}
