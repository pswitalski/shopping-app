import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

interface NavBarProps {
    title: string;
}

const NavBar: FunctionComponent<NavBarProps> = ({title}) => {
    return(
        <Box sx={{ flexGrow: 1 }} >
            <AppBar
                position="static"
                color="primary"
                sx={{ flexDirection: 'row', alignItems: 'center' }}
            >
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant='h6' component='p'>
                    {title}
                </Typography>

                <Button
                    color="inherit"
                    sx={{ ml: 'auto', mr: 1 }}
                >
                    Login
                </Button>
            </AppBar>
        </Box>
    )
}

export default NavBar;