/* eslint-disable indent */
/* eslint-disable operator-linebreak */
// ^ Conflicts between prettier and eslint, fix later...

import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';

import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Grid,
  Button,
} from '@material-ui/core';

import CurrentStepIcon from '@material-ui/icons/MoreHoriz';
import { STATE_CODES } from './constants';
import { setTimelineState } from './slices';
import { MEDIA_LIMIT } from '../constants';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down(MEDIA_LIMIT)]: {
      flexDirection: 'row',
    },
  },
  stepper: {
    background: 'none',
    width: '100%',
    maxWidth: 1000,
    overflowX: 'auto',
  },
  step: {
    [theme.breakpoints.down(MEDIA_LIMIT)]: {
      marginBottom: 8,
    },
  },
  errorBox: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.error.main,
  },
  dateBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  stepIcon: {
    color: 'white',
    background: theme.palette.primary.main,
    borderRadius: '50%',
    height: 36,
    width: 36,
    border: `5px solid ${theme.palette.primary.main}`,
    marginTop: -6,
    marginBottom: -6,
    [theme.breakpoints.down(MEDIA_LIMIT)]: {
      marginLeft: -5,
    },
  },
  button: {
    marginBottom: 8,
  },
}));

const stepLabels = [
  'received',
  'in evaluation',
  'in development',
  'completed',
];

const stepIndices = {
  RE: 0,
  TU: 1,
  EV: 1,
  RJ: 1,
  DE: 2,
  DI: 2,
  CO: 4, // Check circle #4 (index 3)
};

const Timeline = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const state = useSelector(
    (reduxState) => reduxState.timeline,
  );

  const isMobile = useSelector(
    (reduxState) => reduxState.isMobile,
  );

  const handleClickState = (code) => {
    dispatch(setTimelineState(code));
  };

  const renderStep = (step) => {
    let render;

    // Discontinued
    if (state === 'DI' && step === stepLabels[2]) {
      render = (
        <Step key={step} className={classes.step}>
          <StepLabel error>
            {t(STATE_CODES[state])}
          </StepLabel>
        </Step>
      );
      // Rejected or turned down
    } else if (
      (state === 'RJ' || state === 'TU') &&
      step === stepLabels[1]
    ) {
      render = (
        <Step key={step} className={classes.step}>
          <StepLabel error>
            {t(STATE_CODES[state])}
          </StepLabel>
        </Step>
      );
      // Active or finished
    } else {
      render = (
        <Step key={step} className={classes.step}>
          <StepLabel
            // Show different icon for current working step
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...(step === STATE_CODES[state] &&
              step !== 'completed' && {
                icon: (
                  <CurrentStepIcon
                    className={classes.stepIcon}
                  />
                ),
              })}
          >
            {t(step)}
          </StepLabel>
        </Step>
      );
    }
    return render;
  };

  return (
    <Box p={2} className={classes.container}>
      <Grid
        container
        direction={isMobile ? 'column' : 'row'}
        justify="space-between"
        alignItems="center"
      >
        {Object.entries(STATE_CODES).map(([code, text]) => (
          <Grid item key={code}>
            <Button
              variant="outlined"
              color="secondary"
              size={isMobile ? 'small' : 'medium'}
              onClick={() => handleClickState(code)}
              className={classes.button}
            >
              {t(text)}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Stepper
        activeStep={stepIndices[state]}
        alternativeLabel={!isMobile}
        orientation={isMobile ? 'vertical' : 'horizontal'}
        className={classes.stepper}
      >
        {stepLabels.map((step) => renderStep(step))}
      </Stepper>
    </Box>
  );
};

export default Timeline;
