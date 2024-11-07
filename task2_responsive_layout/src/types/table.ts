export type Data = {
    label: string;
    value: string;
}

export type RowProps = {
    data: Data;
};

export type TableProps = {
    data: RowProps['data'][];
};
