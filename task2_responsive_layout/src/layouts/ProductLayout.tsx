import Breadcrumb from "@/components/Breadcrumb";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Breadcrumb />
            <main className="product">
                {children}
            </main>
        </>
    );
};

export default ProductLayout;
