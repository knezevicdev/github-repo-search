import React from 'react';

import { Wrapper, Badge } from './Header.css';
import { observer } from 'mobx-react';
import { useStore } from 'utils/store';

const Header: React.FC = () => {
  const { repositoriesCount } = useStore();

  return (
    <Wrapper>
      Your repositories <Badge>{repositoriesCount}</Badge>
    </Wrapper>
  );
};

export default observer(Header);
