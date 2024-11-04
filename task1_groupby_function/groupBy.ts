import { data } from './dummy_data.js';
type GroupByProperty<T> = keyof T | ((item: T) => string | number | undefined);
type GroupByCriteria<T> = GroupByProperty<T> | GroupByProperty<T>[];

type GroupedResult<T> = {
    [key: string]: T[] | GroupedResult<T>;
};

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
                for (const key in grouped) {
                    grouped[key] = groupItems(grouped[key] as T[], restCriteria);
                }
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



const groupedByCountry = groupBy(data, "country");
console.log('groupedByCountry', groupedByCountry);

const groupedByCountryAndCity = groupBy(data, ["country", "city"]);
console.log('groupedByCountryAndCity', JSON.stringify(groupedByCountryAndCity, null, 2));

const groupedByAgeRange = groupBy(data, (person) => person.age >= 30 ? "30 and above" : "Below 30");
console.log('groupedByAgeRange', groupedByAgeRange);
