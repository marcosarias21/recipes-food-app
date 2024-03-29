import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Satoshi from './assets/fonts/Satoshi-Variable.ttf';
import { BrowserRouter } from 'react-router-dom'


const theme = createTheme({
  typography: {
    fontFamily: 'Satoshi, Sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          url(${Satoshi})
        }
      `,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
