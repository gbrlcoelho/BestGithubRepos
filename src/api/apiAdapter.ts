import {MetaDataPage} from '@types';

import {PageAPI} from './apiTypes';

const toMetaDataPage = <APIType>(
  responseData: PageAPI<APIType>,
): MetaDataPage => {
  const total = Math.min(responseData.total_count, 1000);
  const perPage = responseData.items.length;
  const currentPage = 1;
  const lastPage = Math.ceil(total / perPage);
  const firstPage = 1;
  const hasNextPage = lastPage > 1;

  return {
    total,
    perPage,
    currentPage,
    lastPage,
    firstPage,
    hasNextPage,
  };
};

const toPageModel = <APIType, ModelType>(
  page: PageAPI<APIType>,
  adapterToModel: (api: APIType) => ModelType,
) => {
  return {
    data: page.items.map(adapterToModel),
    meta: toMetaDataPage(page),
  };
};

export const apiAdapter = {toPageModel};
