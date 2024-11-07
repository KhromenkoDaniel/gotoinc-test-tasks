import { TBreadcrumbItemProps } from "@/types/breadcrumb.ts";

const Item = ({ label, link, hasSlash }: TBreadcrumbItemProps) => {
    return (
        <li className="breadcrumb__item">
            <a href={link} className="breadcrumb__link">{label}</a>
            {hasSlash && <p className="breadcrumb__slash">{' '}/</p>}
        </li>
    );
};

export default Item;
