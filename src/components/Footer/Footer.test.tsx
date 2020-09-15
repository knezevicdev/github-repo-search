import React from 'react';
import { shallow } from 'enzyme';

import { StoreProvider } from 'utils/store';

import Footer from './Footer';

describe('Footer', () => {
  it('renders snapshots', () => {
    const wrapper = shallow(
      <StoreProvider>
        <Footer />
      </StoreProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
