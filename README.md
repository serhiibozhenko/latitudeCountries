## latitudeCountries

Дано:

const latitude = 50.4547;
const longitude = 30.5238;

Используя API and Fetch API:

1. https://geocode.xyz/ (country: "Ukraine") Этот API позволяет делать всего 1 запрос в секунду. (403 Forbidden)
2. https://restcountries.com/ (name.official: "Ukraine", borders: (7) ["BLR", "HUN", "MDA", "POL", "ROU", "RUS", "SVK"])

Получить следующий результат в консоли
Country: Ukraine
First neighbour country: Republic of Belarus, ...
