import React from 'react';
import { shallow } from 'enzyme';

import { StoreProvider } from 'utils/store';

import App from './App';

describe('App', () => {
  it('renders snapshots', () => {
    const wrapper = shallow(
      <StoreProvider>
        <App />
      </StoreProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
