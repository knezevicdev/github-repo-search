import React from 'react';
import { observer } from 'mobx-react';

import { Link } from 'styled/components';

import { Wrapper } from './Footer.css';
import { useStore } from 'utils/store';

const Footer: React.FC = () => {
  const { showingAll, toggleShowingAll, repositoriesCount } = useStore();

  if (repositoriesCount <= 3) return null;

  return (
    <Wrapper>
      <Link onClick={toggleShowingAll}>{showingAll ? 'Show less...' : 'Show more...'}</Link>
    </Wrapper>
  );
};

export default observer(Footer);
