import React from 'react';
import styled from 'styled-components';
import { MdOutlinePeopleAlt } from 'react-icons/md';
const AdminHomepageContainerStyled = styled.div`
  padding: 1rem;
`
const AdminHomepageWrapperStyled = styled.div``
const AdminHomepageTopWrapperStyled = styled.div``
const AdminHomepageTopElementWrapperStyled = styled.div`
  width: 25rem;
  height: 15rem;
  background-color: #fff;
  border-radius: 1rem;
`
const AdminHomepageTopElementTopWrapperStyled = styled.div`
  padding: 2rem;
`
const AdminHomepageTopElementTopIconWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  font-size: 1.4rem;
  border-radius: 50%;
  background-color: #ffa600d1;
  color: #fff;
`
const AdminHomepageTopElementTopTitleWrapperStyled = styled.div``
const AdminHomepageTopElementMiddleWrapperStyled = styled.div``
const AdminHomepageTopElementBottomWrapperStyled = styled.div``
const AdminHomepageBottomWrapperStyled = styled.div``
const AdminHomepage = () => {
  return (
    <AdminHomepageContainerStyled>
      <AdminHomepageWrapperStyled>
        <AdminHomepageTopWrapperStyled>
          <AdminHomepageTopElementWrapperStyled>
            <AdminHomepageTopElementTopWrapperStyled>
              <AdminHomepageTopElementTopIconWrapperStyled>
                <MdOutlinePeopleAlt />
              </AdminHomepageTopElementTopIconWrapperStyled>
            </AdminHomepageTopElementTopWrapperStyled>
            <AdminHomepageTopElementMiddleWrapperStyled>
              <AdminHomepageTopElementTopTitleWrapperStyled>
                
              </AdminHomepageTopElementTopTitleWrapperStyled>
            </AdminHomepageTopElementMiddleWrapperStyled>
            <AdminHomepageTopElementBottomWrapperStyled>

            </AdminHomepageTopElementBottomWrapperStyled>
          </AdminHomepageTopElementWrapperStyled>
        </AdminHomepageTopWrapperStyled>
        <AdminHomepageBottomWrapperStyled>

        </AdminHomepageBottomWrapperStyled>
      </AdminHomepageWrapperStyled>
    </AdminHomepageContainerStyled>
  )
}

export default AdminHomepage