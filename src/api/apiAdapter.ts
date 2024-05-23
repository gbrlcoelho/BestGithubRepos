import {MetaDataPage} from '@types';

import {PageAPI} from './apiTypes';
import {apiUtils} from './apiUtils';

const toMetaDataPage = (
  linkHeader: string,
  currentPage: number,
  perPage: number,
): MetaDataPage => {
  const links = apiUtils.parseLinkHeader(linkHeader);
  const hasNextPage = 'next' in links;
  const hasPreviousPage = 'prev' in links;

  return {
    perPage,
    currentPage,
    firstPage: 1,
    hasNextPage,
    hasPreviousPage,
  };
};

const toPageModel = <APIType, ModelType>(
  page: PageAPI<APIType>,
  adapterToModel: (api: APIType) => ModelType,
  linkHeader: string,
  currentPage: number,
  perPage: number,
) => {
  return {
    data: page.items.map(adapterToModel),
    meta: toMetaDataPage(linkHeader, currentPage, perPage),
  };
};

export const apiAdapter = {toPageModel};
