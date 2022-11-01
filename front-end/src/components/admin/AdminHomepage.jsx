import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { CiHome } from 'react-icons/ci';
import { TbBrandBooking } from 'react-icons/tb';
import { BiBuildings } from 'react-icons/bi'
import 'chart.js/auto';
import { doughnutData, lineChartData } from '../../dummyData';
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveMenu } from '../../features/adminSlice';
import { getAllRetalRegistration } from '../../features/adminSlice';
import AdminChart from './child/AdminChart';
const AdminHomepageContainerStyled = styled.div`
  padding: 1rem;
  overflow-y: auto;
`
const AdminHomepageWrapperStyled = styled.div``
const AdminHomepageTopWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`
const AdminHomepageTopElementWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 17rem;
  height: 9rem;
  background-color: #fff;
  border-radius: .6rem;
  padding: 1rem;
  background: linear-gradient(45deg, #59bcff 21%, #59d7ff 100%);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`
const AdminHomepageTopElementTopWrapperStyled = styled.div``
const AdminHomepageTopElementTopIconWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #fff;
`
const AdminHomepageTopElementTopTitleWrapperStyled = styled.div`
  margin: 1rem 0;
  color: #fff;
  text-align: left;
`
const AdminHomepageTopElementTopTitleStyled = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`
const AdminHomepageTopElementTopSubTitleStyled = styled.span`
  margin-left: .4rem;
  display: block;
  margin-top: auto;
  color: red;
`
const AdminHomepageTopElementTopContentStyled = styled.p`
  color: #fff;
`
const AdminHomepageTopElementMiddleWrapperStyled = styled.div`
`
const AdminHomepageTopElementBottomWrapperStyled = styled.div``
const AdminHomepageMiddleWrapperStyled = styled.div`
  display: flex;
  padding: 1rem 0;
`
const AdminHomepageMiddleLeftWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`
const AdminHomepageMiddleLeftTopContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 22rem;
  height: 18rem;
  background-color: #fff;
  border-radius: .6rem;
  padding: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`
const AdminHomepageMiddleLeftTopWrapperStyled = styled.div`
  width: 14rem;
  height: 14rem;
`
const AdminHomepageMiddleLeftTopBarChartWrapperStyled = styled.div`
  width: 100%;
  height: 10rem;
`
const AdminHomepageMiddleLeftTopHeaderStyled = styled.h4``
const AdminHomepageMiddleLeftBottomWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 22rem;
  height: 100%;
  background-color: #fff;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: .6rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`
const AdminHomepageMiddleRightContainerStyled = styled.div`
  width: ${props => props.selectOpenMenu === true ? "68%" : "100%"};
  height: 100%;
  background-color: #fff;
  margin-left: 1rem;
  border-radius: .4rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 2rem 1rem;
`
const AdminHomepageMiddleRightTitleStyled = styled.h4``
const AdminHomepageMiddleRightWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`
const AdminHomepage = () => {
  const selectOpenMenu = useSelector(selectActiveMenu);
  return (
    <AdminHomepageContainerStyled>
      <AdminHomepageWrapperStyled>
        <AdminHomepageTopWrapperStyled>
          <AdminHomepageTopElementWrapperStyled>
            <AdminHomepageTopElementMiddleWrapperStyled>
              <AdminHomepageTopElementTopTitleWrapperStyled>
                <AdminHomepageTopElementTopTitleStyled>200,000</AdminHomepageTopElementTopTitleStyled>
              </AdminHomepageTopElementTopTitleWrapperStyled>
              <AdminHomepageTopElementBottomWrapperStyled>
                <AdminHomepageTopElementTopContentStyled>Khách hàng</AdminHomepageTopElementTopContentStyled>
              </AdminHomepageTopElementBottomWrapperStyled>
            </AdminHomepageTopElementMiddleWrapperStyled>
            <AdminHomepageTopElementTopWrapperStyled>
              <AdminHomepageTopElementTopIconWrapperStyled>
                <MdOutlinePeopleAlt />
              </AdminHomepageTopElementTopIconWrapperStyled>
            </AdminHomepageTopElementTopWrapperStyled>
          </AdminHomepageTopElementWrapperStyled>
          <AdminHomepageTopElementWrapperStyled style={{background: 'linear-gradient(45deg, #4ad994 0%, #57f998 100%)'}}>
            <AdminHomepageTopElementMiddleWrapperStyled>
              <AdminHomepageTopElementTopTitleWrapperStyled>
                <AdminHomepageTopElementTopTitleStyled>2,000</AdminHomepageTopElementTopTitleStyled>
              </AdminHomepageTopElementTopTitleWrapperStyled>
              <AdminHomepageTopElementBottomWrapperStyled>
                <AdminHomepageTopElementTopContentStyled>Đối tác cá nhân</AdminHomepageTopElementTopContentStyled>
              </AdminHomepageTopElementBottomWrapperStyled>
            </AdminHomepageTopElementMiddleWrapperStyled>
            <AdminHomepageTopElementTopWrapperStyled>
              <AdminHomepageTopElementTopIconWrapperStyled>
                <CiHome />
              </AdminHomepageTopElementTopIconWrapperStyled>
            </AdminHomepageTopElementTopWrapperStyled>
          </AdminHomepageTopElementWrapperStyled>
          <AdminHomepageTopElementWrapperStyled style={{background: 'linear-gradient(45deg, #fdb765 0%, #ffe485 100%)'}}>
            <AdminHomepageTopElementMiddleWrapperStyled>
              <AdminHomepageTopElementTopTitleWrapperStyled>
                <AdminHomepageTopElementTopTitleStyled>20,000</AdminHomepageTopElementTopTitleStyled>
              </AdminHomepageTopElementTopTitleWrapperStyled>
              <AdminHomepageTopElementBottomWrapperStyled>
                <AdminHomepageTopElementTopContentStyled>Đối tác doanh nghiệp</AdminHomepageTopElementTopContentStyled>
              </AdminHomepageTopElementBottomWrapperStyled>
            </AdminHomepageTopElementMiddleWrapperStyled>
            <AdminHomepageTopElementTopWrapperStyled>
              <AdminHomepageTopElementTopIconWrapperStyled>
                <BiBuildings />
              </AdminHomepageTopElementTopIconWrapperStyled>
            </AdminHomepageTopElementTopWrapperStyled>
          </AdminHomepageTopElementWrapperStyled>
          <AdminHomepageTopElementWrapperStyled style={{background: 'linear-gradient(45deg, #ff6d59 0%, #ffd584 100%)'}}>
            <AdminHomepageTopElementMiddleWrapperStyled>
              <AdminHomepageTopElementTopTitleWrapperStyled>
                <AdminHomepageTopElementTopTitleStyled>200,000</AdminHomepageTopElementTopTitleStyled>
              </AdminHomepageTopElementTopTitleWrapperStyled>
              <AdminHomepageTopElementBottomWrapperStyled>
                <AdminHomepageTopElementTopContentStyled>Đơn hàng</AdminHomepageTopElementTopContentStyled>
              </AdminHomepageTopElementBottomWrapperStyled>
            </AdminHomepageTopElementMiddleWrapperStyled>
            <AdminHomepageTopElementTopWrapperStyled>
              <AdminHomepageTopElementTopIconWrapperStyled>
                <TbBrandBooking />
              </AdminHomepageTopElementTopIconWrapperStyled>
            </AdminHomepageTopElementTopWrapperStyled>
          </AdminHomepageTopElementWrapperStyled>
        </AdminHomepageTopWrapperStyled>
        <AdminHomepageMiddleWrapperStyled>
          <AdminHomepageMiddleLeftWrapperStyled>
            <AdminHomepageMiddleLeftTopContainerStyled>
              <AdminHomepageMiddleLeftTopHeaderStyled>Tỷ lệ doanh thu</AdminHomepageMiddleLeftTopHeaderStyled>
              <AdminHomepageMiddleLeftTopWrapperStyled>
                <AdminChart type="doughnut" data={doughnutData} />
              </AdminHomepageMiddleLeftTopWrapperStyled>
            </AdminHomepageMiddleLeftTopContainerStyled>
            <AdminHomepageMiddleLeftBottomWrapperStyled>
              <AdminHomepageMiddleLeftTopHeaderStyled>Đơn đặt hôm nay</AdminHomepageMiddleLeftTopHeaderStyled>
              <AdminHomepageMiddleLeftTopBarChartWrapperStyled>
                <AdminChart type="bar" data={doughnutData} options={{indexAxis: 'y'}}/>
              </AdminHomepageMiddleLeftTopBarChartWrapperStyled>
            </AdminHomepageMiddleLeftBottomWrapperStyled>
          </AdminHomepageMiddleLeftWrapperStyled>
          <AdminHomepageMiddleRightContainerStyled selectOpenMenu={selectOpenMenu}>
            <AdminHomepageMiddleRightTitleStyled>Doanh thu theo tháng</AdminHomepageMiddleRightTitleStyled>
            <AdminHomepageMiddleRightWrapperStyled>
              <AdminChart
                type="line"
                data={lineChartData} 
                height={500}
                width={600}
                options={{
                  maintainAspectRatio: false,
                  legend: {
                    labels: {
                      fontSize: 25,
                    },
                  },
                }}/>
            </AdminHomepageMiddleRightWrapperStyled>
          </AdminHomepageMiddleRightContainerStyled>
        </AdminHomepageMiddleWrapperStyled>
      </AdminHomepageWrapperStyled>
    </AdminHomepageContainerStyled>
  )
}

export default AdminHomepage