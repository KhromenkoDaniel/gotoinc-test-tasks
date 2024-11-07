import { RowProps } from "@/types/table.ts";


const ProductDetailsList = ({data} : RowProps) => (
    <tr>
        <th className="product__information-table--label">{data.label}</th>
        <td className="product__information-table--value">{data.value}</td>
    </tr>
);

export default ProductDetailsList;
