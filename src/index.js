import './css/styles.css';
import _ from 'lodash';
// import
import {
  createMiniMurkup,
  createFullMurkup,
  clearMarkup,
} from './createMarkup';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

searchBox.addEventListener(
  'input',
  _.debounce(event => {
    inputReturn(event);
  }, 300)
);

function inputReturn(event) {
  const inputData = event.target.value.trim();
  fetchCountries(inputData)
    .then(data => {
      if (data.length < 9) {
        createarkup(data);
        // console.log('console log from then', data.length);
        return;
      }

      clearMarkup(countryList);
      Notiflix.Notify.warning(
        'Too many matches found. Please enter a more specific name.'
      );
      // console.log('Too many matches found. Please enter a more specific name.');
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
      // console.log('Oops, there is no country with that name');
      clearMarkup(countryList);
    });
}

function createarkup(countries) {
  const { length } = countries;
  if (length > 1) {
    // console.log('countries > 1');
    createMiniMurkup(countries, countryList);
  } else if (length === 1) {
    // console.log('countries === 1');
    createFullMurkup(countries, countryList);
  }
}
