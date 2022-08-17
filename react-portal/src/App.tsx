import React from 'react';
import { Box, createTheme, CssBaseline, styled, ThemeProvider } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MiniAppLoader from './MiniAppLoader';

const Container = styled(Box)({
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column'
});

const Content = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
});


const theme = createTheme({
  palette:{
    secondary:{
      main:'#ffffff'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container>
        <Navbar/>
        <Content>
          <Sidebar/>
          <MiniAppLoader/>
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default App;
