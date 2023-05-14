import { useContext } from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"

import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { UIContext } from '../../context/ui';

const menuItems = {
    Inbox: { icon: 'InboxOutlinedIcon', text: 'Inbox', link: '/' },
    Starred: { icon: 'StarRateOutlinedIcon', text: 'Starred', link: '/' },
    'Send Email': { icon: 'SendOutlinedIcon', text: 'Send Email', link: '/' },
    Drafts: { icon: 'EmailOutlinedIcon', text: 'Drafts', link: '/' }
}

export const Sidebar = () => {

    const { sidemenuOpen,closeSideMenu } = useContext(UIContext);

    return (
        <Drawer
            anchor="left" 
            open={sidemenuOpen}
            onClose={closeSideMenu}
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant="h4">Menú</Typography>
                </Box>

                <Divider />

                <List>
                    {
                        Object.values(menuItems).map(({ text }, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Drawer>
    )
}
