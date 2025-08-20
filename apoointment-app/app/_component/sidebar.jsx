'use client';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';

export default function AccountMenuCustom({ user }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    return (
        <Box >
            <>
                <Avatar
                    src={`${user.picture}`}
                    alt={"Image Of Profile"}
                    sx={{ width: 40, height: 40, borderRadius: 3, cursor: 'pointer' }}
                    onClick={handleAvatarClick}
                />
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                    PaperProps={{
                        elevation: 3,
                        sx: {
                            mt: 1,
                            borderRadius: 2,
                            minWidth: 180,
                        },
                    }}
                >
                    <Box sx={{ px: 2, py: 1 }}>
                        <Typography variant="body2" fontWeight="bold">
                            {`${user.family_name} ${user.given_name}`}
                        </Typography>
                        <Typography variant="caption">{user.email}</Typography>
                    </Box>
                    <Divider />
                    <Link href="/Mybooking" ><MenuItem >My Booking</MenuItem></Link>

                    <MenuItem >

                        <LogoutLink><LogoutIcon fontSize="small" sx={{ mr: 1 }} />Logout</LogoutLink>

                    </MenuItem>
                </Menu>
            </>
        </Box>
    );
}
