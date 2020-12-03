import theme from './theme';

export const LANGUAGES = { en: 'English', fi: 'Finnish' };
export const LANGUAGE_CODES = Object.keys(LANGUAGES);

export const BOX_COLOR = theme.palette.primary.dark;
export const TEXT_COLOR = theme.palette.background.light;

export const APP_MAX_WIDTH = 1280; // In pixels

// Media size limit for mobile devices
// Used to change layout from horizontal to vertical etc.
export const MEDIA_LIMIT = 'xs';
