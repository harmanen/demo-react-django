import React from 'react';
import { Box, Typography } from '@material-ui/core';
import ProviderStack from '../../test/components/ProviderStack';
import Description from './Description';
import store from '../../store';
import { setIsMobile } from '../slices';

const description = 'Some text...';

describe('Description', () => {
  describe('Desktop', () => {
    store.dispatch(setIsMobile(false));

    const wrapper = mount(
      <ProviderStack>
        <Description description={description} />
      </ProviderStack>,
    );

    it('Should render Typography with correct text and variant', () => {
      expect(
        wrapper.find({ variant: 'body1' }).find(Typography),
      ).to.contain.text(description);
    });

    it('Should render Box with border', () => {
      expect(
        wrapper
          .find(Box)
          .find({ className: 'makeStyles-divider-2' })
          .exists(),
      ).to.eql(true);
    });
  });

  describe('Mobile', () => {
    store.dispatch(setIsMobile(true));

    const wrapper = mount(
      <ProviderStack store={store}>
        <Description description={description} />
      </ProviderStack>,
    );

    it('Should render Typography with correct text and variant', () => {
      expect(
        wrapper.find({ variant: 'body2' }).find(Typography),
      ).to.contain.text(description);
    });

    it('Should render Box with border', () => {
      expect(
        wrapper
          .find(Box)
          .find({ className: 'makeStyles-divider-2' })
          .exists(),
      ).to.eql(true);
    });
  });
});
