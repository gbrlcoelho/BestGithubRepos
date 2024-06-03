import {apiAdapter} from '@api';
import {Page} from '@types';

import {pullRequestAdapter} from './pullRequestAdapter';
import {pullRequestApi} from './pullRequestApi';
import {PullRequest} from './pullRequestTypes';

const PER_PAGE = 10;

interface GetPullRequestListParams {
  owner: string;
  repo: string;
  page: number;
}

const getList = async ({
  owner,
  repo,
  page,
}: GetPullRequestListParams): Promise<Page<PullRequest>> => {
  const pullRequestAPI = await pullRequestApi.getList({
    owner,
    repo,
    page,
    per_page: PER_PAGE,
  });

  return apiAdapter.toPageModel(
    {items: pullRequestAPI.data},
    pullRequestAdapter.toPullRequest,
    pullRequestAPI.headers.link,
    page,
    PER_PAGE,
  );
};

const getCountPullRequests = async ({
  owner,
  repo,
}: {
  owner: string;
  repo: string;
}) => {
  const response = await pullRequestApi.getCountPullRequests({owner, repo});

  return pullRequestAdapter.toPullRequestCount(response.data);
};

export const pullRequestService = {getList, getCountPullRequests};
