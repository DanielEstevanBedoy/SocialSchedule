import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {Link, Routes, Route} from 'react-router-dom';
import SignInSide from './SignIn';
import MessagePage from './messagesPage';
import NotificationsPage from './notificationsPage';
import SearchPage from './searchPage';
import ProfilePage from './profilePage';
import SettingsPage from './settingsPage';

import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';

import Posts from '../components/post/Post';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Welcome to SocialSync
          </Typography>
        </Toolbar>
      </AppBar>

      
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />




        <List>
          {[
            { text: 'SignInPagae', route: '/SignIn', icon: <HomeIcon/> },
            { text: 'MessagesPage', route: '/Messages', icon: <MessageIcon/> },
            { text: 'NotificationsPage', route: '/Notifications', icon:<NotificationsIcon/> },
            { text: 'Seach Page', route: '/Search', icon: <SearchIcon/> },
            {text: 'Profile Page', route: '/Profile', icon:<Person2Icon/>},
            {text: 'Settings', route: '/Settings', icon: <SettingsIcon/>}

          ].map((item, index) => (
       <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          component={Link}
          to={item.route}
          sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
          }}>

             <ListItemIcon
             sx={{
             minWidth: 0,
             mr: open ? 3 : 'auto',
              justifyContent: 'center',
             }}
             
             >
              {item.icon}

            </ListItemIcon>




            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            </ListItem>))}
            </List>
        
       




      </Drawer>












      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

        <DrawerHeader />
        <Routes>
        <Route path ="/SignIn" element = {<SignInSide/>}/>
        <Route path ="/Messages" element = {<MessagePage/>}/>
        <Route path ="/Notifications" element = {<NotificationsPage/>}/>
        <Route path ="/Search" element = {<SearchPage/>}/>
        <Route path = "/Settings" element = {<SettingsPage/>}/>
        <Route path = "/Profile" element ={<ProfilePage/>}/>


        </Routes>

        <Posts/>


        <Typography paragraph>
            Paragraph 1
        </Typography>
        <Typography paragraph>
            Paragraph 2 
        </Typography>
      </Box>
    </Box>
  );
}