import React from 'react';

import {
  Button,
  Grid,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';

import Description from '../layout/components/Description';
import { setIsMobile } from '../layout/slices';
import store from '../store';
import ProviderStack from '../test/components/ProviderStack';
import { STATE_CODES, STEP_LABELS } from './constants';
import Timeline from './Timeline';
import translations from '../locales/en/translation.json';
import { setSavedTimelineState } from './slices';

const savedState = Object.keys(STATE_CODES)[0];
const initialSavedState = store.getState().savedTimeline;
store.dispatch(setSavedTimelineState(savedState));

describe('Timeline', () => {
  describe('Desktop', () => {
    store.dispatch(setIsMobile(false));

    const wrapper = mount(
      <ProviderStack>
        <Timeline />
      </ProviderStack>,
    );

    it('Should render Description', () => {
      expect(wrapper.find(Description).exists()).to.eql(
        true,
      );
    });

    it('Should render state buttons', () => {
      expect(wrapper.find(Grid))
        .to.have.exactly(Object.keys(STATE_CODES).length)
        .descendants(Button);
    });

    it('First button in grid should be disabled', () => {
      expect(
        wrapper
          .find({
            'data-testid': 'timelineButtonGrid',
          })
          .find({
            disabled: true,
          })
          .find(Button),
      ).to.contain.text(
        translations[Object.values(STATE_CODES)[0]],
      );
    });

    it('Other buttons in grid should be enabled', () => {
      expect(
        wrapper
          .find({
            'data-testid': 'timelineButtonGrid',
          })
          .find({ disabled: false })
          .find(Button),
      )
        .to.have.exactly(
          Object.keys(STATE_CODES).length - 1,
        )
        .descendants(Button);
    });

    it('Should render Stepper with correct orientation', () => {
      expect(
        wrapper
          .find({ orientation: 'horizontal' })
          .find(Stepper)
          .exists(),
      ).to.eql(true);
    });

    it('Should render step labels', () => {
      STEP_LABELS.map((label, index) => {
        expect(
          wrapper.find(StepLabel).at(index),
        ).to.contain.text(translations[label]);

        return null;
      });
    });

    it('Should render disabled Save button', () => {
      expect(
        wrapper
          .find({ 'data-testid': 'timelineSaveButtonBox' })
          .find({ disabled: true })
          .find(Button),
      ).to.contain.text(translations.save);
    });

    it('Should render Typography with currently saved state', () => {
      expect(
        wrapper
          .find({ 'data-testid': 'timelineSaveButtonBox' })
          .find(Typography),
      ).to.contain.text(
        `${translations['currently saved']}: ${
          translations[STATE_CODES[savedState]]
        }`,
      );
    });
  });

  describe('Mobile', () => {
    store.dispatch(setIsMobile(true));

    const wrapper = mount(
      <ProviderStack>
        <Timeline />
      </ProviderStack>,
    );

    it('Should render Description', () => {
      expect(wrapper.find(Description).exists()).to.eql(
        true,
      );
    });

    it('Should render state buttons', () => {
      expect(wrapper.find(Grid))
        .to.have.exactly(Object.keys(STATE_CODES).length)
        .descendants(Button);
    });

    it('First button in grid should be disabled', () => {
      expect(
        wrapper
          .find({
            'data-testid': 'timelineButtonGrid',
          })
          .find({
            disabled: true,
          })
          .find(Button),
      ).to.contain.text(
        translations[Object.values(STATE_CODES)[0]],
      );
    });

    it('Other buttons in grid should be enabled', () => {
      expect(
        wrapper
          .find({
            'data-testid': 'timelineButtonGrid',
          })
          .find({ disabled: false })
          .find(Button),
      )
        .to.have.exactly(
          Object.keys(STATE_CODES).length - 1,
        )
        .descendants(Button);
    });

    it('Should render Stepper with correct orientation', () => {
      expect(
        wrapper
          .find({ orientation: 'vertical' })
          .find(Stepper)
          .exists(),
      ).to.eql(true);
    });

    it('Should render step labels', () => {
      STEP_LABELS.map((label, index) => {
        expect(
          wrapper.find(StepLabel).at(index),
        ).to.contain.text(translations[label]);

        return null;
      });
    });

    it('Should render disabled Save button', () => {
      expect(
        wrapper
          .find({ 'data-testid': 'timelineSaveButtonBox' })
          .find({ disabled: true })
          .find(Button),
      ).to.contain.text(translations.save);
    });

    it('Should render Typography with currently saved state', () => {
      expect(
        wrapper
          .find({ 'data-testid': 'timelineSaveButtonBox' })
          .find(Typography),
      ).to.contain.text(
        `${translations['currently saved']}: ${
          translations[STATE_CODES[savedState]]
        }`,
      );
    });
  });
});

// Reset initial state for other tests
store.dispatch(setSavedTimelineState(initialSavedState));
