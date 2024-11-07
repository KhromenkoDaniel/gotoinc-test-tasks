import Item from './Item';

const Breadcrumb = () => {
    return (
        <header className="breadcrumb">
            <nav className="breadcrumb__nav">
                <ul className="breadcrumb__list">
                    <Item label="Home" link="#" hasSlash />
                    <Item label="Unisex Shoes" link="#" hasSlash />
                    <Item label="Unisex SportStyle Shoes" link="#" />
                </ul>
            </nav>
        </header>
    );
};

export default Breadcrumb;
