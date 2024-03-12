import { MD5 } from 'crypto-js';

const API_URL = process.env.MARVEL_APP_BASE_URL;

const ts = new Date().getTime();
const apiKey = process.env.MARVEL_APP_API_KEY ?? '';
const privateKey = process.env.MARVEL_APP_PRIVATE_KEY ?? '';
const stringToHash = ts + privateKey + apiKey;
const hash = MD5(stringToHash);
const limit = 50;

const query = `ts=${ts}&apikey=${apiKey}&hash=${hash}`;

export const fetchCharacters = async () => {
  const url = `${API_URL}/characters?limit=${limit}&${query}`;

  const response = await fetch(url);
  const data = await response.json();

  return { characters: data.data.results, count: data.data.count };
};

export const searchCharacters = async (querySearch) => {
  const url = `${API_URL}/characters?nameStartsWith=${querySearch}&limit=${limit}&${query}`;
  const response = await fetch(url);
  const data = await response.json();

  return { characters: data.data.results, count: data.data.count };
};
