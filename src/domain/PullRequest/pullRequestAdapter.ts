import {PullRequest, PullRequestAPI} from './pullRequestTypes';

const toPullRequest = (pullRequestAPI: PullRequestAPI): PullRequest => {
  return {
    id: pullRequestAPI.id.toString(),
    author: {
      name: pullRequestAPI.user.login,
      avatarUrl: pullRequestAPI.user.avatar_url,
    },
    title: pullRequestAPI.title,
    date: pullRequestAPI.created_at,
    body: pullRequestAPI.body,
  };
};

export const PullRequestAdapter = {
  toPullRequest,
};
