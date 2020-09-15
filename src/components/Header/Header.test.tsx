import React from 'react';
import { shallow } from 'enzyme';

import { StoreProvider } from 'utils/store';

import Header from './Header';

describe('Header', () => {
  it('renders snapshots', () => {
    const wrapper = shallow(
      <StoreProvider>
        <Header />
      </StoreProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
