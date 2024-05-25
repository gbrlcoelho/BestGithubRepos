import {BASE_URL} from '@env';
import {cloneDeep} from 'lodash';
import {HttpResponse, http} from 'msw';

import {PageAPI} from '@api';
import {RepositoryAPI} from '@domain';

import {mockedData} from './mocks';

const FULL_URL = `${BASE_URL}/search/repositories?q=language:typescript&sort=stars&order=desc`;

let inMemoryResponse = cloneDeep(mockedData.mockedResponse);

export const resetInMemoryResponse = () => {
  inMemoryResponse = cloneDeep(mockedData.mockedResponse);
};

export const repositoryHandlers = [
  http.get(FULL_URL, async () => {
    const response: PageAPI<RepositoryAPI> = inMemoryResponse;

    return HttpResponse.json(response, {status: 200});
  }),
];
