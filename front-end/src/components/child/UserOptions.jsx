import React, {useState} from 'react';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import styled, {keyframes} from 'styled-components';
import {useDispatch} from 'react-redux';
import profileImg from '../../assets/Profile.png';
// import {logout} from '../../../actions/userAction';
import {Link, useNavigate} from 'react-router-dom';
import { logoutUser } from '../../features/userSlice';
// import { useAlert } from 'react-alert';
const fadeIn = keyframes `
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const LoginIconStyled = styled.img`
    position: relative;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
    border: 1px solid rgb(135, 179, 251);
`
const LoginNameStyled = styled.span`
    display: inline-block;
    width: 4rem;
    font-size: .9rem;
    color: rgb(135, 179, 251);
`
const LoginedWrapStyled = styled.div`
    display: flex;
    align-items: center;
`
const LoginedContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover .loginCate{
        display: block;
    }
`
const LoginCateWrapperStyled = styled.div`
    position: absolute;
    background-color: #fff;
    display: none;
    width: 240px;
    list-style-type: none;
    margin-top: ${props => props.role === 'admin' ? '230px' : '310px'};
    border: 1px solid lightgray;
    z-index: 4;
    animation: ${fadeIn} ease-in .2s;
    &::before {
        content: '';
        position: absolute;
        top: -16px;
        right: 0px;
        width: 100%;
        height: 20px;
        display: block;
        background-color: transparent;
    }
`
const LoginCateListStyled = styled.ul``
const LoginCateListItemStyled = styled.li`
    padding: 12px 0 12px 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 400;
    list-style-type: none;
    &:hover{
        color: rgb(135, 179, 251);
    }

`
const LoginedTagContainerStyled = styled.div`
    padding: 12px 0 12px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    list-style-type: none;
    &:hover{
        color: rgb(135, 179, 251);
    }
`
const LoginCateListItemOptionStyled = styled.span`
    margin-left: 6px;
    font-size: .9rem;
    font-weight: 400;

`
const LogoutButtonStyled = styled.button`
    padding: .7rem 4rem;
    margin: 1rem;
    cursor: pointer;
    color: rgb(135, 179, 251);
    background-color: #fff;
    border-radius: .2rem;
    border: 1px solid rgb(135, 179, 251);
    &:hover {
      background-color: rgb(135, 179, 251);
      color: #fff;
    }
`
const LogoutStyled = styled.span`
    font-size: .9rem;
    font-weight: 400;
` 
const CountNotificationWrapStyled = styled.div`
    display: flex;
    align-items: center;
`
const CountNotificationStyled = styled.span`
    margin-right: 10px;
    background-color: red;
    padding: 4px 10px;
    border-radius: 50%;
    color: #fff;
    font-size: 12px;
`
const UserOptions = ({user, account}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
//   const [imageReview, setImageReview] = useState("/Profile.png");
//   const alert = useAlert();
  const logoutHandle = () =>{
    dispatch(logoutUser());
    if(account == 1){
      navigate("/account/login")
    }
  }
  return (
    <>
      <LoginedContainerStyled>
        {user.avatar?.url ? 
        <LoginIconStyled src={user.avatar?.url} />
        :
        <LoginIconStyled src={profileImg} />
        }
        <LoginedWrapStyled>
        <LoginNameStyled>{user.user.lastName}</LoginNameStyled>
        <KeyboardArrowDownOutlinedIcon />
            </LoginedWrapStyled>
        <LoginCateWrapperStyled className='loginCate' role={user.role}>
          <LoginCateListStyled>
              <Link to='/account/myinfo' style={{textDecoration: 'none', color: 'black'}}>
                <LoginCateListItemStyled>
                  <AccountBoxOutlinedIcon style={{fontSize: '1.5rem', color: '#000'}}/>
                  <LoginCateListItemOptionStyled>Hồ sơ của tôi</LoginCateListItemOptionStyled>
                </LoginCateListItemStyled>
              </Link>
              <Link to='/account/orders' style={{textDecoration: 'none', color: 'black'}}>
                <LoginCateListItemStyled>
                  <InsertDriveFileOutlinedIcon style={{fontSize: '1.5rem', color: '#000'}}/>
                  <LoginCateListItemOptionStyled>Đơn đặt chổ của tôi</LoginCateListItemOptionStyled>
                </LoginCateListItemStyled>
              </Link>
              <Link to='/account/wishlist' style={{textDecoration: 'none', color: 'black'}}>
                <LoginCateListItemStyled>
                  <FeaturedPlayListOutlinedIcon style={{fontSize: '1.5rem', color: '#000'}}/>
                  <LoginCateListItemOptionStyled>Danh sách yêu thích</LoginCateListItemOptionStyled>
                </LoginCateListItemStyled>
              </Link>
              <Link to='/provider/myroomlist' style={{textDecoration: 'none', color: 'black'}}>
              <LoginedTagContainerStyled>
                <CountNotificationWrapStyled>
                  <NotificationsOutlinedIcon style={{fontSize: '1.5rem', color: '#000'}}/>
                  <LoginCateListItemOptionStyled>Quản lý chỗ nghỉ của tôi</LoginCateListItemOptionStyled>
                </CountNotificationWrapStyled>
              </LoginedTagContainerStyled>
              </Link>
              { user.role === "admin" ? (
                <Link to='/admin/dashboard' style={{textDecoration: 'none', color: 'black'}}>
                  <LoginCateListItemStyled>
                    <WarehouseOutlinedIcon />
                    <LoginCateListItemOptionStyled>Quản lý cửa hàng</LoginCateListItemOptionStyled>
                  </LoginCateListItemStyled>
                </Link>
              ):''}
              <LogoutButtonStyled onClick={logoutHandle}>
                <LogoutStyled>Đăng xuất</LogoutStyled>
              </LogoutButtonStyled>
          </LoginCateListStyled>
        </LoginCateWrapperStyled>
      </LoginedContainerStyled>
    </>
  )
}

export default UserOptions