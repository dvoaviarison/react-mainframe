import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

export type MenuItemProps = {
  title: string,
  open: boolean,
  icon: React.ReactElement,
  path: string,
}

const MenuItem = (props: MenuItemProps) => {
  const navigate = useNavigate();
  return (

    <ListItem 
      onClick={() => navigate(props.path)}
      key={props.title}
      disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: props.open ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: props.open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.title} sx={{ opacity: props.open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
}

export default MenuItem; 