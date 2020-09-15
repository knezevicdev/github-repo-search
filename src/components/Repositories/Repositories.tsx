import React from 'react';

import { observer } from 'mobx-react';
import { useStore } from 'utils/store';

import { Link } from 'styled/components';

import { Icon } from 'components';

import { Repository } from './Repositories.css';
import { getRepositoryType } from 'utils/helpers';

const Repositories: React.FC = () => {
  const { repositories } = useStore();

  return (
    <ul>
      {repositories.map((repository) => (
        <Repository key={`repository#${repository.id}`}>
          <Icon type={getRepositoryType(repository)} />
          &nbsp;
          <Link href={repository.html_url} dangerouslySetInnerHTML={{ __html: repository.name }} />
        </Repository>
      ))}
    </ul>
  );
};

export default observer(Repositories);
