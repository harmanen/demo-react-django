import React from 'react';
import { Menu, Tabs, Typography } from '@material-ui/core';
import store from '../../store';
import ProviderStack from '../../test/components/ProviderStack';
import { setIsMobile } from '../slices';
import TopBar from './TopBar';
import translations from '../../locales/en/translation.json';
import LanguageSelector from './LanguageSelector';

const MockComponent = () => <div>test</div>;

const tabs = [
  {
    name: 'timeline', // Requires translations...
    component: MockComponent,
  },
];

describe('TopBar', () => {
  describe('Desktop', () => {
    store.dispatch(setIsMobile(false));

    const wrapper = mount(
      <ProviderStack>
        <TopBar
          tabs={tabs}
          tabValue={0}
          setTabValue={() => null}
          handleTabChange={() => null}
        />
      </ProviderStack>,
    );

    it('Should render title', () => {
      expect(
        wrapper.find({ variant: 'h2' }).find(Typography),
      ).to.contain.text('Demo');
    });

    it('Should render Tabs', () => {
      expect(wrapper.find(Tabs)).to.contain.text(
        translations[tabs[0].name],
      );
    });

    it('Should render LanguageSelector', () => {
      expect(
        wrapper.find(LanguageSelector).exists(),
      ).to.eql(true);
    });
  });

  describe('Mobile', () => {
    store.dispatch(setIsMobile(true));

    const wrapper = mount(
      <ProviderStack>
        <TopBar
          tabs={tabs}
          tabValue={0}
          setTabValue={() => null}
          handleTabChange={() => null}
        />
      </ProviderStack>,
    );

    it('Should render title', () => {
      expect(
        wrapper.find({ variant: 'h2' }).find(Typography),
      ).to.contain.text('Demo');
    });

    it('Should render Menu', () => {
      expect(wrapper.find(Menu).exists()).to.eql(true);
    });

    it('Should render LanguageSelector', () => {
      expect(
        wrapper.find(LanguageSelector).exists(),
      ).to.eql(true);
    });
  });
});
