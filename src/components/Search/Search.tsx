import React from 'react';

import { Input } from './Search.css';
import { useStore } from 'utils/store';
import { observer } from 'mobx-react';

const Search: React.FC = () => {
  const { searchText, setSearchText } = useStore();

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return <Input type="text" placeholder="Find a repository..." onChange={onTextChange} value={searchText} />;
};

export default observer(Search);
