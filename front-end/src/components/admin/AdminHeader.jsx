import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { CiChat1 } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
const AdminHeaderContainerStyled = styled.div`
    width: 100%;
    height: 3rem;
    padding: 1rem;
    font-size: 1.6rem;
    color: #00b3ff;

`
const AdminHeaderWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const AdminHeaderLeftWrapperStyled = styled.div`
  cursor: pointer;
`
const AdminHeaderRightWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const AdminHeaderRightIconsWrapperStyled = styled.div`
  position: relative;
  margin: 0 .6rem;
  cursor: pointer;
`
const AdminHeaderRightIconsNotificationStyled = styled.div`
  position: absolute;
  width: .6rem;
  height: .6rem;
  border-radius: 50%;
  top: 0;
  right: 0;
  background-color: #ffe600d1;
`
const AdminHeaderRightAvatarWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 .6rem;
  cursor: pointer;
  font-size: .9rem;
`
const AdminHeaderRightWelcomeStyled = styled.p`
  margin-right: 1rem;
`
const settings = ['Thông tin cá nhân', 'Trang quản lý', 'Tài khoản', 'Đăng xuất'];
const AdminHeader = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AdminHeaderContainerStyled>
        <AdminHeaderWrapperStyled>
          <AdminHeaderLeftWrapperStyled>
            <AiOutlineSearch />
          </AdminHeaderLeftWrapperStyled>
          <AdminHeaderRightWrapperStyled>
            <Tooltip title="Đơn hàng" arrow>
              <AdminHeaderRightIconsWrapperStyled>
                <AiOutlineShoppingCart />
              </AdminHeaderRightIconsWrapperStyled>
            </Tooltip>
            <Tooltip title="Tin nhắn" arrow>
              <AdminHeaderRightIconsWrapperStyled>
                <CiChat1 />
              </AdminHeaderRightIconsWrapperStyled>
            </Tooltip>
            <Tooltip title="Thông báo" arrow>
              <AdminHeaderRightIconsWrapperStyled>
                <IoMdNotificationsOutline />
                <AdminHeaderRightIconsNotificationStyled />
              </AdminHeaderRightIconsWrapperStyled>
            </Tooltip>
            <AdminHeaderRightAvatarWrapperStyled>
              <AdminHeaderRightWelcomeStyled>Hi, Duy Nguyen</AdminHeaderRightWelcomeStyled>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </AdminHeaderRightAvatarWrapperStyled>
          </AdminHeaderRightWrapperStyled>
        </AdminHeaderWrapperStyled>
    </AdminHeaderContainerStyled>
  )
}

export default AdminHeader