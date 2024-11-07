import Row from "@/components/Product/Description/Table/Row";

import { TableProps } from "@/types/table.ts";

const Table = ({data}: TableProps) => (
    <table className="product__information-table">
        <tbody>
        {data.map((detail, index) => (
            <Row key={index} data={detail} />
        ))}
        </tbody>
    </table>
);

export default Table;
