import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import ToolBar from '../ToolBar';
import Content from '../Content';
import Menu from '../Menu';
import Router from '../Router';


const Layout = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ToolBar 
        open={menuOpen} 
        onHamburgerClicked={() => setMenuOpen(true)} 
        title='React Mainframe'/>
      <Menu 
        open={menuOpen} 
        onOpen={() => setMenuOpen(true)} 
        onClose={() => setMenuOpen(false)}/>
      <Content>
        <Router/>
      </Content>
    </Box>
  );
}

export default Layout; 