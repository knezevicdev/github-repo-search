import React, { ComponentType } from 'react';
import { observable, computed, comparer, action } from 'mobx';

import { RepositoryTypeFilter, Repository } from 'utils/types';
import { getRepositoryType } from 'utils/helpers';

const storeContext = React.createContext<Store | null>(null);

class Store {
  @observable isLoading = true;
  @observable hasError = false;
  @observable private allRepositories: Repository[] = [];
  @observable searchText = '';
  @observable typeFitler: RepositoryTypeFilter = 'all';
  @observable showingAll = false;

  @computed({ equals: comparer.shallow })
  private get filteredRepositories(): Repository[] {
    const searchText = this.searchText.trim().toLowerCase();
    let repositories: Repository[] = this.allRepositories;

    if (this.typeFitler !== 'all' || searchText !== '') {
      repositories = repositories.filter((repository) => {
        if (this.typeFitler !== 'all' && this.typeFitler !== getRepositoryType(repository)) return false;
        if (repository.name.toLowerCase().indexOf(searchText) === -1) return false;

        return true;
      });

      if (searchText !== '') {
        const reg = new RegExp(searchText, 'gi');

        repositories = repositories.map((repository: Repository) => ({
          ...repository,
          name: repository.name.replace(reg, (str: string) => `<em>${str}</em>`),
        }));
      }
    }

    return repositories;
  }

  @computed({ equals: comparer.shallow })
  get repositories() {
    if (!this.showingAll) return this.filteredRepositories.slice(0, 3);

    return this.filteredRepositories;
  }

  @computed
  get repositoriesCount() {
    return this.filteredRepositories.length;
  }

  @action.bound
  async fetchRepositories(githubUser: string) {
    try {
      const repositories = await fetch(`https://api.github.com/users/${githubUser}/repos`);
      this.allRepositories = await repositories.json();
    } catch {
      this.hasError = true;
    }

    this.isLoading = false;
  }

  @action.bound
  setTypeFilter(type: RepositoryTypeFilter) {
    this.typeFitler = type;
  }

  @action.bound
  setSearchText(searchText: string) {
    this.searchText = searchText;
  }

  @action.bound
  toggleShowingAll() {
    this.showingAll = !this.showingAll;
  }
}

export const StoreProvider: React.FC = ({ children }) => {
  const store = new Store();

  return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
};

export const withStore = (WrappedComponent: ComponentType): React.FC => {
  const StoreHOC: React.FC = (props) => {
    return (
      <StoreProvider>
        <WrappedComponent {...props} />
      </StoreProvider>
    );
  };

  return StoreHOC;
};

export const useStore = (): Store => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
