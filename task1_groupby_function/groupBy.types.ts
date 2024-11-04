export type GroupByProperty<T> = keyof T | ((item: T) => string | number | undefined);
export type GroupByCriteria<T> = GroupByProperty<T> | GroupByProperty<T>[];

export type GroupedResult<T> = {
    [key: string]: T[] | GroupedResult<T>;
};
