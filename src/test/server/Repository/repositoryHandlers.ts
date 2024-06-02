import {BASE_URL} from '@env';
import {cloneDeep} from 'lodash';
import {HttpResponse, http} from 'msw';

import {PageAPI} from '@api';
import {RepositoryAPI} from '@domain';

import {mockedData} from './mocks';

const FULL_URL = `${BASE_URL}/search/repositories`;

let inMemoryResponse = cloneDeep(mockedData.mockedResponse);

export const resetInMemoryResponse = () => {
  inMemoryResponse = cloneDeep(mockedData.mockedResponse);
};

export const repositoryHandlers = [
  http.get(FULL_URL, ({request}) => {
    const url = new URL(request.url);

    const language = url.searchParams.get('q');
    const sort = url.searchParams.get('sort');
    const order = url.searchParams.get('order');
    const page = url.searchParams.get('page');
    const per_page = url.searchParams.get('per_page');

    if (
      language !== 'language:typescript' ||
      sort !== 'stars' ||
      order !== 'desc' ||
      page !== '1' ||
      per_page !== '10'
    ) {
      return HttpResponse.json(
        {
          message: 'Invalid query parameters',
        },
        {status: 400},
      );
    }

    const response: PageAPI<RepositoryAPI> = inMemoryResponse;

    return HttpResponse.json(response, {status: 200});
  }),
];
