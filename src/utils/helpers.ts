import { Repository, RepositoryType } from 'utils/types';

export const getRepositoryType = (repository: Repository): RepositoryType => {
  if (repository.fork) {
    return 'fork';
  }

  if (repository.private) {
    return 'private';
  }

  return 'public';
};
