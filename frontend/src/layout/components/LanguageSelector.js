import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';

import {
  FormControl,
  MenuItem,
  Select,
} from '@material-ui/core';

import {
  LANGUAGE_CODES,
  TEXT_COLOR,
} from '../../constants';

const useStyles = makeStyles(() => ({
  select: {
    color: TEXT_COLOR,
    // Customize color and behaviour for bar under text
    // Looks correct now...
    '&:before': {
      borderColor: TEXT_COLOR,
    },
    '&:hover:not(.Mui-disabled):before': {
      borderColor: TEXT_COLOR,
    },
    '&:after': {
      borderColor: TEXT_COLOR,
      borderWidth: 'thin',
    },
  },
}));

const LanguageSelector = () => {
  const classes = useStyles();
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  const handleChangeLanguage = (event) => {
    const newLanguage = event.target.value;

    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <FormControl>
      <Select
        value={language}
        onChange={handleChangeLanguage}
        className={classes.select}
        classes={{
          icon: classes.select,
        }}
      >
        {LANGUAGE_CODES.map((lang) => (
          <MenuItem value={lang} key={lang}>
            {lang}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
