import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: 
    {
      primary: { main: '#0d0d0d' },
      secondary: { main: '#ffffff' },
      background: { default: "#dddddd" },
    }
});

export default (theme);