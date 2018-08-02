/* eslint-disable no-multi-spaces */
const THEME_DEFAULTS = {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107' // amber.base
};
export default function theme(theme = {}) {
    if (theme === false) return false;
    return {
        ...THEME_DEFAULTS,
        ...theme
    };
}