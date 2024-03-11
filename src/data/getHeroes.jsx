import { MD5 } from 'crypto-js';

const API_URL = process.env.MARVEL_APP_BASE_URL;

export const fetchHeroes = async () => {
  let ts = new Date().getTime();
  let apiKey = process.env.MARVEL_APP_API_KEY ?? '';
  let privateKey = process.env.MARVEL_APP_PRIVATE_KEY ?? '';
  let stringToHash = ts + privateKey + apiKey;
  let hash = MD5(stringToHash);
  let baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
  let limit = 50;
  let url =
    baseUrl +
    '?limit=' +
    limit +
    '&ts=' +
    ts +
    '&apikey=' +
    apiKey +
    '&hash=' +
    hash;

  let response = await fetch(url);
  let data = await response.json();

  return data.data.results;
};
