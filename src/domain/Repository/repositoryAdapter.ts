import {Repository, RepositoryAPI} from './repositoryTypes';

const toRepository = (repositoryAPI: RepositoryAPI): Repository => {
  return {
    id: repositoryAPI.id.toString(),
    name: repositoryAPI.name,
    description: repositoryAPI.description,
    owner: {
      name: repositoryAPI.owner.login,
      avatar: repositoryAPI.owner.avatar_url,
    },
    stars: repositoryAPI.stargazers_count,
    forks: repositoryAPI.forks,
  };
};

export const repositoryAdapter = {
  toRepository,
};
