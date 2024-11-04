import { GroupByCriteria, GroupedResult } from './groupBy.types';

export function groupBy<T>(
    array: T[],
    criteria: GroupByCriteria<T>,
    filterFn?: (item: T) => boolean
): GroupedResult<T> {

    const filteredArray = filterFn ? array.filter(filterFn) : array;

    const groupItems = (arr: T[], criteria: GroupByCriteria<T>): GroupedResult<T> => {
        if (Array.isArray(criteria)) {
            const [currentCriteria, ...restCriteria] = criteria;
            const grouped = groupItems(arr, currentCriteria);
            if (restCriteria.length > 0) {
                Object.keys(grouped).forEach((key) => {
                    grouped[key] = groupItems(grouped[key] as T[], restCriteria);
                });
            }
            return grouped;
        } else {
            return arr.reduce<GroupedResult<T>>((acc, item) => {
                const key = typeof criteria === 'function' ? criteria(item) : item[criteria];
                const groupKey = key === undefined ? 'undefined' : String(key);
                if (!acc[groupKey]) {
                    acc[groupKey] = [];
                }
                (acc[groupKey] as T[]).push(item);
                return acc;
            }, {});
        }
    };

    return groupItems(filteredArray, criteria);
}
