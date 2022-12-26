export function createMiniMurkup(countries, countryList) {
  // console.log('createMiniMarkup', countries);
  countryList.innerHTML = '';
  const markup = countries
    .map(
      country => `
      
  <li class="country-item">
    <img src="${country.flags.svg}" alt="${country.name.common}"  width='30' height='24'/>
    <p>${country.name.common}</p>
  </li>
  `
    )
    .join('');
  countryList.insertAdjacentHTML('beforeEnd', markup);
}

export function createFullMurkup(countries, countryList) {
  // console.log('createFullMarkup', countries);
  countryList.innerHTML = '';
  console.log(countries);
  const markup = countries
    .map(
      country => `
  
    <li class="country-one-item">
      <div class="country-top-part">
        <img src="${country.flags.svg}" alt="${
        country.name.common
      }"  width='30' height='24'/>
        <h2>${country.name.common}</h2>
      </div>
      <div class="country-bot-part">
        <p>Capital: ${country.capital.join('')}</p>
        <p>Population: ${country.population}</p>
        <p>languages: ${Object.values(country.languages)}</p>
      </div>
    </li>
    `
    )
    .join('');

  countryList.insertAdjacentHTML('beforeEnd', markup);
}

export function clearMarkup(countryList) {
  countryList.innerHTML = '';
}
