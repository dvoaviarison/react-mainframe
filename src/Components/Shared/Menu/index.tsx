import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { Drawer, StyledDiv } from './index.styles';
import MenuItem from '../MenuItem';

export interface MenuProps {
  open: boolean,
  onOpen: () => void,
  onClose: () => void
}

const Menu = (props: MenuProps) => {
  const theme = useTheme();

  return (
      <Drawer variant="permanent" open={props.open}>
        <StyledDiv>
          <IconButton onClick={() => props.onClose()}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </StyledDiv>
        <Divider />
        <List>
            <MenuItem
              open={props.open}
              title='Home'
              path=''
              icon={<HomeIcon/>}/>
            <Divider/>
            <MenuItem
              open={props.open}
              title='About'
              path='/about'
              icon={<InfoIcon/>}/>
        </List>
        <Divider />
      </Drawer>
  );
}

export default Menu; 