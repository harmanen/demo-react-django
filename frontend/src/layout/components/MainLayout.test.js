import React from 'react';
import ProviderStack from '../../test/components/ProviderStack';
import store from '../../store';
import { setIsMobile } from '../slices';
import MainLayout from './MainLayout';
import TopBar from './TopBar';
import Description from './Description';

describe('MainLayout', () => {
  store.dispatch(setIsMobile(false));

  const wrapper = mount(
    <ProviderStack>
      <MainLayout />
    </ProviderStack>,
  );

  it('Should render TopBar', () => {
    expect(wrapper.find(TopBar).exists()).to.eql(true);
  });

  // First component in "tabs" list in MainLayout
  it('Should render first component', () => {
    expect(
      wrapper
        .find({ 'data-testid': 'timelineDescription' })
        .find(Description)
        .exists(),
    ).to.eql(true);
  });
});
