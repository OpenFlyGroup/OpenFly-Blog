import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { SvgIcon, Typography } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function AppHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar
      position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <SvgIcon
          >
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                <path class="cls-1" d="M267.7,299.92l-228.5,.04c-2.85,0-5.82,.16-8.65-.18-12.11-1.46-21.71-10.82-24.71-22.49-1.77-6.91-.85-14.47-.84-21.55V34.41c-.01-10.45-.41-17.03,7.24-25.6C17.46,2.97,24.02,.05,31.75-.37l228.48,.07c3.17,0,6.42-.13,9.58,.1,10.73,.78,19.72,7.51,23.61,17.59,1.93,5.01,2.02,9.8,2.01,15.12v232.11c0,4.39,.12,8.69-.97,12.98-3.1,12.23-13.97,21.9-26.76,22.33ZM45.87,29.52c-4.18,.11-7.57,.9-10.49,4.12-3.9,4.29-3.27,8.24-3.25,13.59l.03,152.19c0,7.33-1.58,18.58,4.46,23.92,4.11,3.64,8.52,3.32,13.58,3.31l204.21-.02c14.95-2.22,13.46-15.28,13.46-26.66l.02-152c0-2.17,.19-4.51-.13-6.65-.91-6.13-6.48-11.08-12.61-11.67-2.55-.25-5.24-.11-7.81-.11H45.87Zm.03,213.59c-11.16,.76-17.51,13.92-9.62,22.72,9.42,10.5,24.21,3.59,24.62-10.27,1.9,1.48,4.05,2.54,6.1,3.77l17.41,11.84c11.31,8.08,13.36,8.79,25.8-.53l10.25-7.96c1.01-.8,6.64-5.62,7.32-5.63h115.4s12.59,.04,12.59,.04c4.08,0,11.62,.62,11.84-5.73,.31-9.31-13.53-7.19-19.2-7.19l-119.38,.03c-11.79,.05-27.52,19.35-32,19.23-2.35-.06-8.34-5.08-10.23-6.51l-11.93-9.01c-1.64-1.2-3.72-3.09-5.68-3.65-2.62-.75-8.75,1.51-9.97,3.86l-.36,.93c-3.44-3.6-7.57-5.81-12.61-5.93h-.34Z"/>
                <path class="cls-2" d="M64.36,214.18l-9.93,.03c-11.52,.11-9.07-3.2-9.08-13.14V56.15c0-3.16-.15-6.4,.03-9.55,.33-5.86,6.65-4.7,10.65-4.69H236.53l9.3-.03c6.47-.07,9.03-.19,9.08,7.64l.05,154.17c.05,11.46-1.87,10.48-11.46,10.48H64.36ZM146.66,58.88c-8.88,.87-14.13,6.88-18.08,14.22-4.18-2.49-7.96-5.16-12.92-5.81-10.55-1.39-20.66,6.08-22.85,16.31-.19,.88-.25,2.02-.68,2.8-2.6-.07-5.33-.27-7.92,.09-16.68,2.36-22.27,26.46-10.15,38.97,2.01,2.07,4.34,3.78,6.74,5.36-.55,.44-1.3,.7-1.92,1.03-15.34,8.38-14.6,26.91-4.5,39.35l5.81,6.94c1.33,1.57,2.81,3.18,3.79,5,2.8,.35,5.75,.19,8.57,.18h61.97s55.38,.03,55.38,.03c1.33,0,3.4,.56,4.43-.53,7.2-7.71,15.74-17.35,17.38-28.1,1.12-7.33-.49-14.74-6.3-19.75-1.82-1.56-3.95-2.52-5.98-3.76,6.24-3.59,10.6-9.66,12.48-16.59,4.13-15.22-9.06-32.16-25.44-27.81-.94-11.4-10.98-20.37-22.48-19.43-5.63,.47-11.05,3.54-15.38,6.99-3.86-7.93-12.22-16.76-21.94-15.49Z"/>
            </svg>
          </SvgIcon>
          <Typography
          variant='h6'
          >
            BlogVHS
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
}
