import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { MuiThemeProvider } from '@material-ui/core/styles';
import i18n from '../../i18n';
import theme from '../../theme';
import defaultStore from '../../store';

// Wraps child component into Redux, MuiTheme and I18n providers
// Use in tests

const ProviderStack = ({ store, children }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </MuiThemeProvider>
  </Provider>
);

ProviderStack.propTypes = {
  store: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
};

ProviderStack.defaultProps = {
  store: defaultStore,
};

export default ProviderStack;
