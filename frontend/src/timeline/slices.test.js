import store from '../store';
import { STATE_CODES } from './constants';

import {
  setSavedTimelineState,
  setTimelineState,
} from './slices';

describe('Timeline slices', () => {
  const stateCodes = Object.keys(STATE_CODES);

  describe('Reducers', () => {
    const initialTimelineState = store.getState().timeline;
    const initialSavedTimelineState = store.getState()
      .savedTimeline;

    afterEach(() => {
      store.dispatch(
        setTimelineState(initialTimelineState),
      );
      store.dispatch(
        setSavedTimelineState(initialSavedTimelineState),
      );
    });

    it('Initial timeline state', () => {
      expect(initialTimelineState).to.eql(stateCodes[0]);
    });

    it('setTimelineState', () => {
      const newState = stateCodes[1];

      store.dispatch(setTimelineState(newState));

      expect(store.getState().timeline).to.eql(newState);
    });

    it('Initial saved timeline state', () => {
      expect(initialSavedTimelineState).to.eql(null);
    });

    it('setSavedTimelineState', () => {
      const newState = stateCodes[0];

      store.dispatch(setSavedTimelineState(newState));

      expect(store.getState().savedTimeline).to.eql(
        newState,
      );
    });
  });
});
