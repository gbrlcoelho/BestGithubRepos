import {useQuery} from '@tanstack/react-query';

import {pullRequestService} from '../pullRequestService';

export const usePullRequestCount = (repo: string, owner: string) => {
  const {data, isLoading} = useQuery(['PULL_REQUESTS_COUNT', repo, owner], () =>
    pullRequestService.getCountPullRequests(repo, owner),
  );

  return {
    count: data,
    isLoading,
  };
};
