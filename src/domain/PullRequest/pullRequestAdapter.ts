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

export const PullRequestAdapter = {
  toPullRequest,
};
