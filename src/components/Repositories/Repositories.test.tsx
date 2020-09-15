import React from 'react';
import { shallow } from 'enzyme';

import { StoreProvider } from 'utils/store';

import Repositories from './Repositories';

describe('Repositories', () => {
  it('renders snapshots', () => {
    const wrapper = shallow(
      <StoreProvider>
        <Repositories />
      </StoreProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
