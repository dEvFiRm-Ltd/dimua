import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Collapse, List } from '@mui/material';
import { Link } from 'react-router-dom';

export const MainListItems = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItemButton component={Link} to='/'>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItemButton>
      <ListItemButton component={Link} to='form'>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Form' />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary='All Category' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Main Category' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Sub Category' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Child Category' />
          </ListItemButton>
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export const SecondaryListItems = () => {
  return (
    <React.Fragment>
      <ListSubheader component='div' inset>
        Saved reports
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary='Current month' />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary='Last quarter' />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary='Year-end sale' />
      </ListItemButton>
    </React.Fragment>
  );
};
