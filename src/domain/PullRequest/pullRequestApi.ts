import {api} from '@api';

import {GetPullRequestListParams, PullRequestAPI} from './pullRequestTypes';

const PULL_REQUESTS_PATH = '/repos/';

const getList = async (params: GetPullRequestListParams) => {
  const response = await api.get<PullRequestAPI[]>(
    `${PULL_REQUESTS_PATH}${params.owner}/${params.repo}/pulls?page=${params.page}&per_page=${params.per_page}`,
  );
  return {
    data: response.data,
    headers: response.headers,
  };
};

const getCountPullRequests = async (params: GetPullRequestListParams) => {
  const response = await api.get<PullRequestAPI[]>(
    `${PULL_REQUESTS_PATH}${params.owner}/${params.repo}/pulls?state=all`,
  );

  return response;
};

export const pullRequestApi = {
  getList,
  getCountPullRequests,
};
