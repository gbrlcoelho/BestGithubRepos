import {PageAPI, PageParams, api} from '@api';

import {RepositoryAPI} from './repositoryTypes';

const REPOSITORIES_PATH =
  '/search/repositories?q=language:typescript&sort=stars&order=desc';

const getList = async (params: PageParams) => {
  const response = await api.get<PageAPI<RepositoryAPI>>(
    `${REPOSITORIES_PATH}`,
    {
      params,
    },
  );
  return {
    data: response.data,
    headers: response.headers,
  };
};

export const repositoryAPI = {
  getList,
};
