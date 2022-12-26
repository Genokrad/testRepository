export function fetchCountries(name, createarkup) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,official,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      // console.log(response.status);
      throw new Error(response.status);
    }
    return response.json();
  });
}

// function createmarkup(countries) {
//     if (countries.length > 1) {
//       console.log('countries > 1');
//       createMiniMurkup(countries, countryList);
//     } else if (countries.length === 1) {
//       console.log('countries === 1');
//       createFullMurkup(countries, countryList);
//     }
//   }
