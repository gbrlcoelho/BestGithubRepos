import {Repository, RepositoryAPI} from './repositoryTypes';

const toRepository = (repositoryAPI: RepositoryAPI): Repository => {
  return {
    name: repositoryAPI.name,
    description: repositoryAPI.description,
    owner: {
      name: repositoryAPI.owner.login,
      avatar: repositoryAPI.owner.avatar_url,
    },
    stars: repositoryAPI.watchers,
    forks: repositoryAPI.forks,
  };
};

export const repositoryAdapter = {
  toRepository,
};
