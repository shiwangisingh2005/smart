import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, useTheme, useMediaQuery } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu'; // Add this for the menu button
import CloseIcon from '@mui/icons-material/Close'; // Add this for the close button

const Sidebar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* Menu Button for Mobile */}
            {isMobile && (
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                    style={{ position: 'absolute', top: 16, left: 16, zIndex: 1300 }}
                >
                    {open ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            )}

            {/* Sidebar Drawer */}
            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={isMobile ? open : true}
                onClose={isMobile ? handleDrawerToggle : undefined}
                sx={{
                    width: 240,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
                }}
            >
                <div style={{ textAlign: 'center', padding: '10px' }}>
                    <img
                        src="/LearnMitra__1_-removebg-preview.png"
                        alt="Logo"
                        style={{ width: '100%', maxWidth: '180px', height: 'auto' }}
                    />
                </div>
                <List>
                    <ListItem button>
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        <ListItemText primary="My Dashboard" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                        <ListItemText primary="Reading Materials" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><MapIcon /></ListItemIcon>
                        <ListItemText primary="Students Progress" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        <ListItemText primary="My Profile" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default Sidebar;
