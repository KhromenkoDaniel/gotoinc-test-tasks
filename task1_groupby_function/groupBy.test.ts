import { groupBy } from "./groupBy";
import { data, dataWithMissingProperties, mixedData } from "./dummy_data";

/*Tests from Test Task 1*/
const groupedByCountry = groupBy(data, "country");
console.log('Grouped by Country:\n', groupedByCountry);

const groupedByCountryAndCity = groupBy(data, ["country", "city"]);
console.log('\nGrouped by Country And City:\n', JSON.stringify(groupedByCountryAndCity, null, 2));

const groupedByAgeRange = groupBy(data, (person) => person.age >= 30 ? "30 and above" : "Below 30");
console.log('\nGrouped by Age Range:\n', groupedByAgeRange);

/* Testing missing or incorrect properties */
const groupedByCountryWithMissingProps = groupBy(dataWithMissingProperties, "country");
console.log('\nGrouped by Country With Missing Properties:\n', groupedByCountryWithMissingProps);

/* Testing different data types */
const groupedByType = groupBy(mixedData, "type");
console.log('\nGrouped by Type:\n', groupedByType);
