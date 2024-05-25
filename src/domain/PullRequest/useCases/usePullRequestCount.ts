import {useQuery} from '@tanstack/react-query';

import {QueryKeys} from '@infra';

import {pullRequestService} from '../pullRequestService';

export const usePullRequestCount = ({
  owner,
  repo,
}: {
  repo: string;
  owner: string;
}) => {
  const {data, isLoading, error} = useQuery(
    [QueryKeys.PULL_REQUESTS_COUNT, owner, repo],
    () => pullRequestService.getCountPullRequests({owner, repo}),
  );

  return {
    count: data,
    isLoading,
    error,
  };
};
