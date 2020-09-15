import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';

import { Wrapper, Tab } from './Tabs.css';
import { useStore } from 'utils/store';
import { RepositoryTypeFilter } from 'utils/types';

const tabs = {
  all: 'All',
  public: 'Public',
  private: 'Private',
  fork: 'Forks',
};

const Tabs: React.FC = () => {
  const { typeFitler, setTypeFilter } = useStore();

  const onTabClick = (tab: string) => () => {
    if (tab !== typeFitler) {
      setTypeFilter(tab as RepositoryTypeFilter);
    }
  };

  return (
    <Wrapper>
      {Object.entries(tabs).map(([key, label]) => (
        <Tab key={`tab#${key}`} active={key === typeFitler} onClick={onTabClick(key)}>
          {label}
        </Tab>
      ))}
    </Wrapper>
  );
};

export default observer(Tabs);
