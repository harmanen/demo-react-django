import store from '../store';
import { setIsMobile } from './slices';

describe('Layout slices', () => {
  describe('Reducers', () => {
    const currentState = store.getState().isMobile;

    afterEach(() => {
      store.dispatch(setIsMobile(currentState));
    });

    // Will not test initial state as other tests often modify this
    // Should be false...

    it('setIsMobile', () => {
      const newState = !currentState;

      store.dispatch(setIsMobile(newState));

      expect(store.getState().isMobile).to.eql(newState);
    });
  });
});
