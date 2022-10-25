import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Loader from '../components/child/Loader';
import AdminHeader from '../components/admin/AdminHeader';
import AdminSidebar from '../components/admin/AdminSidebar';
import { selectActiveMenu } from '../features/adminSlice';
const AdminLayoutContainerStyled = styled.div`
    width: 100%;
    height: 100%;
`
const AdminLayoutWrapperStyled = styled.div`
    display: flex;
`
const AdminLayoutRightWrapperStyled = styled.div`
    flex: 4;
    background-color: rgb(249 250 251);
`
const AdminLayoutLeftWrapperStyled = styled.div`
    height: 100vh;
    overflow-y: auto;
    width: ${props => props.selectOpenMenu === true ? '20rem' : '7rem'};
    z-index: 1;
    box-shadow: rgba(136, 165, 191, 0.48) 4px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    transition: .4s width;
`
const AdminProtectedRoute = () => {
  const selectUserData = useSelector(selectUser);
  const selectOpenMenu = useSelector(selectActiveMenu);
  return (
    <>
        {selectUserData && selectUserData.user ? (
            selectUserData.user.us_role === 1 ? (
                <AdminLayoutContainerStyled>
                    <AdminLayoutWrapperStyled>
                        <AdminLayoutLeftWrapperStyled selectOpenMenu={selectOpenMenu}>
                            <AdminSidebar />
                        </AdminLayoutLeftWrapperStyled>
                        <AdminLayoutRightWrapperStyled>
                            <AdminHeader />
                            <Outlet />
                        </AdminLayoutRightWrapperStyled>
                    </AdminLayoutWrapperStyled>
                </AdminLayoutContainerStyled>
            ) : <Navigate to="/" />
            ) : (
            <Loader />
        )}
    </>
  )
}

export default AdminProtectedRoute