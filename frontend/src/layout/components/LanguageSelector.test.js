import React from 'react';

import { FormControl, Menu, Select } from '@mui/material';

import ProviderStack from '../../test/components/ProviderStack';
import LanguageSelector from './LanguageSelector';
import { LANGUAGE_CODES } from '../../constants';
import store from '../../store';
import { setIsMobile } from '../slices';

describe('LanguageSelector', () => {
  store.dispatch(setIsMobile(false));

  const wrapper = mount(
    <ProviderStack>
      <LanguageSelector />
    </ProviderStack>,
  );

  it('Should render selection menu', () => {
    expect(wrapper)
      .to.contain.exactly(1)
      .descendants(FormControl);

    expect(wrapper)
      .to.contain.exactly(1)
      .descendants(Select);

    expect(wrapper).to.contain.exactly(1).descendants(Menu);
  });

  it('Should render selected language', () => {
    expect(
      wrapper.find({ role: 'button' }).find('div'),
    ).to.contain.text(LANGUAGE_CODES[0]);
  });
});
