import React from 'react';
import { shallow } from 'enzyme';

import { StoreProvider } from 'utils/store';

import Icon from './Icon';

describe('Icon', () => {
  it('renders snapshots', () => {
    const wrapper = shallow(
      <StoreProvider>
        <Icon type="public" />
      </StoreProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
