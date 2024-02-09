
import createTheme from '@mui/material/styles/createTheme';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1b5192',
            dark: '#091d35',
            light: '#2a7bdc',
        },
        secondary: {
            main: '#c11e21',
            dark: '#5a0d0f',
            light: '#f75f62',
        },
    },
});

export default lightTheme;