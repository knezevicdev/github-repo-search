export type RepositoryType = 'public' | 'private' | 'fork';
export type RepositoryTypeFilter = 'all' | RepositoryType;

export interface Repository {
  id: number;
  private: boolean;
  fork: boolean;
  name: string;
  html_url: string;
}
