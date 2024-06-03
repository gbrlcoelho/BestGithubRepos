import {dateUtils} from '@utils';

import {PullRequest, PullRequestAPI} from './pullRequestTypes';

const toPullRequest = (pullRequestAPI: PullRequestAPI): PullRequest => {
  return {
    id: pullRequestAPI.id.toString(),
    author: {
      name: pullRequestAPI.user.login,
      avatarUrl: pullRequestAPI.user.avatar_url,
    },
    title: pullRequestAPI.title,
    date: dateUtils.formatDate(pullRequestAPI.created_at),
    body: pullRequestAPI.body,
    pullRequestUrl: pullRequestAPI.html_url,
  };
};

const toPullRequestCount = (pullRequests: PullRequestAPI[]) => {
  const openPullRequests = pullRequests.filter(
    pullRequest => pullRequest.state === 'open',
  ).length;

  const closedPullRequests = pullRequests.filter(
    pullRequest => pullRequest.state === 'closed',
  ).length;

  return {
    openPullRequests,
    closedPullRequests,
  };
};

export const pullRequestAdapter = {
  toPullRequest,
  toPullRequestCount,
};
