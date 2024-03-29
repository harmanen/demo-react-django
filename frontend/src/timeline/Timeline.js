/* eslint-disable indent */
/* eslint-disable operator-linebreak */
// ^ Conflicts between prettier and eslint, fix later...

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';

import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Grid,
  Button,
  Typography,
} from '@mui/material';

import CurrentStepIcon from '@mui/icons-material/MoreHoriz';
import {
  STATE_CODES,
  STEP_LABELS,
  TIMELINE_ID,
} from './constants';

import {
  setSavedTimelineState,
  setTimelineState,
} from './slices';

import { MEDIA_LIMIT } from '../constants';
import Description from '../layout/components/Description';
import { getTimeline, updateTimeline } from './services';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  innerContainer: {
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
    marginTop: '1em',
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
    [theme.breakpoints.down(MEDIA_LIMIT)]: {
      marginLeft: -5,
    },
  },
  button: {
    marginBottom: 8,
  },
  saveButtonBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 16,
  },
  saveButton: { width: 'max-content', marginRight: 8 },
}));

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

  const isMobile = useSelector(
    (reduxState) => reduxState.isMobile,
  );

  // Current state in app
  const state = useSelector(
    (reduxState) => reduxState.timeline,
  );

  const handleClickState = (code) => {
    dispatch(setTimelineState(code));
  };

  // Saved state in database
  // Fetch and update initial value
  useEffect(() => {
    getTimeline(TIMELINE_ID)
      .then((data) => {
        dispatch(setSavedTimelineState(data.state[0]));
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  }, [dispatch]);

  const savedState = useSelector(
    (reduxState) => reduxState.savedTimeline,
  );

  // Update timeline in database when saved
  const clickSave = () => {
    // eslint-disable-next-line implicit-arrow-linebreak
    updateTimeline({ id: TIMELINE_ID, state })
      .then((data) => {
        dispatch(setSavedTimelineState(data.state[0]));
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  };

  const renderStep = (step) => {
    let render;

    // Discontinued
    if (state === 'DI' && step === STEP_LABELS[2]) {
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
      step === STEP_LABELS[1]
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
      <Description
        description={t('timeline description')}
        data-testid="timelineDescription"
      />
      <Box className={classes.innerContainer}>
        <Grid
          container
          direction={isMobile ? 'column' : 'row'}
          justify="space-around"
          alignItems="center"
        >
          {Object.entries(STATE_CODES).map(
            ([code, text]) => (
              <Grid
                item
                key={code}
                data-testid="timelineButtonGrid"
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  size={isMobile ? 'small' : 'medium'}
                  onClick={() => handleClickState(code)}
                  className={classes.button}
                  disabled={text === STATE_CODES[state]}
                >
                  {t(text)}
                </Button>
              </Grid>
            ),
          )}
        </Grid>
        <Stepper
          activeStep={stepIndices[state]}
          alternativeLabel={!isMobile}
          orientation={isMobile ? 'vertical' : 'horizontal'}
          className={classes.stepper}
        >
          {STEP_LABELS.map((step) => renderStep(step))}
        </Stepper>
      </Box>
      <Box
        className={classes.saveButtonBox}
        data-testid="timelineSaveButtonBox"
      >
        <Button
          color="primary"
          variant="contained"
          disabled={
            savedState ? savedState === state : true
          }
          onClick={clickSave}
          className={classes.saveButton}
        >
          {t('save')}
        </Button>
        {savedState && (
          <Typography variant="caption">
            {`${t('currently saved')}: ${t(
              STATE_CODES[savedState],
            )}`}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Timeline;
