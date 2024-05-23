import {BASE_URL, GITHUB_TOKEN} from '@env';
import axios from 'axios';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});
