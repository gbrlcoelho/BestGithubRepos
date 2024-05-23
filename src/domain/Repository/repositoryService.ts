import {apiAdapter} from '@api';
import {Page} from '@types';

import {repositoryAdapter} from './repositoryAdapter';
import {repositoryAPI} from './repositoryApi';
import {Repository} from './repositoryTypes';

const PER_PAGE = 10;

const getList = async (page: number): Promise<Page<Repository>> => {
  const repositoryPageAPI = await repositoryAPI.getList({
    page,
    per_page: PER_PAGE,
  });

  return apiAdapter.toPageModel(
    repositoryPageAPI.data,
    repositoryAdapter.toRepository,
    repositoryPageAPI.headers.link,
    page,
    PER_PAGE,
  );
};

export const repositoryService = {getList};
