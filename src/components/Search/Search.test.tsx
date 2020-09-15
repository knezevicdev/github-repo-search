import React from 'react';
import { shallow } from 'enzyme';

import { StoreProvider } from 'utils/store';

import Search from './Search';

describe('Search', () => {
  it('renders snapshots', () => {
    const wrapper = shallow(
      <StoreProvider>
        <Search />
      </StoreProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
