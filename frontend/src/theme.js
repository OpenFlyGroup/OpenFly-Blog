import { createTheme } from '@mui/material/styles';
import '@fontsource/oswald' 

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64b3f4',
    },
    secondary: {
      main: '#c2e59c',
    },
    divider: 'rgba(154,138,138,0.12)',
  },
  typography: {
    fontFamily: 'Oswald',
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 46,
          height: 27,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 1,
          '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + $track': {
              opacity: 1,
              border: 'none',
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: '1px solid #bdbdbd',
          backgroundColor: '#fafafa',
          opacity: 1,
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      },
    },
  },
});

export default theme;