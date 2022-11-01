import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../../dummyData';
import { AiOutlineMenu } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { activeMenu, selectActiveMenu } from '../../features/adminSlice';
const AdminSidebarContainerStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;500&display=swap');
    .activeLink {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: .6rem 1rem .6rem 1rem;
        background-color: #00b3ff;
        color: #fff;
        margin-top: .4rem;
        border-radius: .4rem;
    }
    .normalLink {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: .6rem 1rem .6rem 1rem;
        margin-top: .4rem;
        color: rgb(55 65 81);
    }
`
const HeaderLogoWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.selectOpenMenu === true ? "space-between" : "center"};
`
const HeaderLogoStyled = styled.h2`
    font-family: 'DynaPuff', cursive;
    margin-right: 1rem;
`
const AdminSidebarWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem 2rem 1rem 2rem;
`
const AdminMenuWrapperStyled = styled.div`
    margin-top: 2rem;
`
const AdminMenuItemWrapperStyled = styled.div`
    margin: ${props => props.selectOpenMenu === true ? '' : '2.8rem 0'};
`
const AdminMenuItemStyled = styled.p`
    text-transform: uppercase;
    margin-top: 1rem;
    color: rgb(156 163 175);
`
const AdminMenuItemSpanStyled = styled.span`
    text-transform: capitalize;
`
const AdminCloseMenuWrapperStyled = styled.div`
    font-size: 1.4rem;
    padding: .6rem;
    cursor: pointer;
`
const AdminSidebar = () => {
  const dispatch = useDispatch();
  const selectOpenMenu = useSelector(selectActiveMenu);
  const handleClickMenu = () => {
    dispatch(activeMenu())
  }
  return (
    <AdminSidebarContainerStyled>
        {selectOpenMenu === false ? (
            <AdminSidebarWrapperStyled>
                <HeaderLogoWrapperStyled selectOpenMenu={selectOpenMenu}>
                    <AdminCloseMenuWrapperStyled onClick={handleClickMenu}>
                        <AiOutlineMenu />
                    </AdminCloseMenuWrapperStyled>
                </HeaderLogoWrapperStyled>
                <AdminMenuWrapperStyled>
                    {
                        links.map((item) =>(
                            <AdminMenuItemWrapperStyled key={item.title} selectOpenMenu={selectOpenMenu}>
                                {item.links.map((link) => (
                                <NavLink
                                    to={`/admin/${link.name}`}
                                    key={link.name}
                                    className={({ isActive }) => (isActive ? 'activeLink' : 'normalLink')}
                                    style={{textDecoration: 'none'}}
                                >
                                    {link.icon}
                                </NavLink>
                                ))}
                            </AdminMenuItemWrapperStyled>
                        ))
                    }
                </AdminMenuWrapperStyled>
            </AdminSidebarWrapperStyled>
        ) : (
            <AdminSidebarWrapperStyled>
                <HeaderLogoWrapperStyled selectOpenMenu={selectOpenMenu}>
                    <HeaderLogoStyled>Looking</HeaderLogoStyled>
                    <AdminCloseMenuWrapperStyled onClick={handleClickMenu}>
                        <AiOutlineMenu />
                    </AdminCloseMenuWrapperStyled>
                </HeaderLogoWrapperStyled>
                <AdminMenuWrapperStyled>
                    {
                        links.map((item) =>(
                            <AdminMenuItemWrapperStyled key={item.title} selectOpenMenu={selectOpenMenu}>
                                <AdminMenuItemStyled>{item.title}</AdminMenuItemStyled>
                                {item.links.map((link) => (
                                <NavLink
                                    to={`/admin/${link.name}`}
                                    key={link.name}
                                    className={({ isActive }) => (isActive ? 'activeLink' : 'normalLink')}
                                    style={{textDecoration: 'none'}}
                                >
                                    {link.icon}
                                    <AdminMenuItemSpanStyled>{link.subTitle}</AdminMenuItemSpanStyled>
                                </NavLink>
                                ))}
                            </AdminMenuItemWrapperStyled>
                        ))
                    }
                </AdminMenuWrapperStyled>
            </AdminSidebarWrapperStyled>
        )}
    </AdminSidebarContainerStyled>
  )
}

export default AdminSidebar