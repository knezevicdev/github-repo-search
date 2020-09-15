import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { withStore, useStore } from 'utils/store';

import { Repositories, Tabs, Search, Footer, Header } from 'components';

import { Wrapper, Filter, Spinner } from './App.css';

const App: React.FC = () => {
  const { isLoading, hasError, fetchRepositories } = useStore();

  useEffect(() => {
    fetchRepositories('goschevski');
  }, []);

  if (hasError) {
    return <div>error...</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <Header />
      <Filter>
        <Search />
        <Tabs />
      </Filter>
      <Repositories />
      <Footer />
    </Wrapper>
  );
};

export default withStore(observer(App));
