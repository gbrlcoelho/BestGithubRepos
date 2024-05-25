import {apiAdapter} from '@api';
import {Page} from '@types';

import {PullRequestAdapter} from './pullRequestAdapter';
import {pullRequestApi} from './pullRequestApi';
import {PullRequest} from './pullRequestTypes';

const PER_PAGE = 10;

const getList = async (
  owner: string,
  repo: string,
  page: number,
): Promise<Page<PullRequest>> => {
  const pullRequestAPI = await pullRequestApi.getList({
    owner,
    repo,
    page,
    per_page: PER_PAGE,
  });

  return apiAdapter.toPageModel(
    {items: pullRequestAPI.data},
    PullRequestAdapter.toPullRequest,
    pullRequestAPI.headers.link,
    page,
    PER_PAGE,
  );
};

const getCountPullRequests = async (owner: string, repo: string) => {
  const response = await pullRequestApi.getCountPullRequests({owner, repo});

  return {
    openPullRequests: response.openPullRequests,
    closedPullRequests: response.closedPullRequests,
  };
};

export const pullRequestService = {getList, getCountPullRequests};
