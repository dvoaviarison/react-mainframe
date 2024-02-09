
import * as React from 'react';
import Toolbar from "@mui/material/Toolbar";
import StyledAppBar from "./index.styles";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

export type ToolBarProps = {
  open: boolean,
  title?: string,
  onHamburgerClicked: React.MouseEventHandler
}

const ToolBar = ({ open, title, onHamburgerClicked }: ToolBarProps) => {

  return <StyledAppBar position="fixed" open={open}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={onHamburgerClicked}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        {title}
      </Typography>
    </Toolbar>
  </StyledAppBar>
}

export default ToolBar;