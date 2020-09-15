import React from 'react';
import { shallow } from 'enzyme';

import { StoreProvider } from 'utils/store';

import Tabs from './Tabs';

describe('Tabs', () => {
  it('renders snapshots', () => {
    const wrapper = shallow(
      <StoreProvider>
        <Tabs />
      </StoreProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
