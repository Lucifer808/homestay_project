import React, { useEffect } from 'react';
import styled from 'styled-components';
import location_ec_pricing from '../../../assets/provider-ec-pricing.png';
import StepperProvider from '../../child/StepperProvider';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ProviderPriceSetUpContainerStyled = styled.div`
  height: 100%;
  width: 100%;
`
const ProviderPriceSetUpWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProviderContentWrapperStyled = styled.div`
  width: 80rem;
  display: flex;
`
const ProviderPriceHeaderWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
`
const ProviderPriceHeaderLeftWrapperStyled = styled.div``
const ProviderPriceHeaderStyled = styled.h2``
const ProviderPriceSubHeaderStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin: 1rem 0;
`
const ProviderPriceHeaderRightImageStyled = styled.img`
  width: 20rem;
  height: 8rem;
`
const ProviderDescRightWrapperStyled = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  border-left: 1px solid #ccc;
  padding: 4rem;
`
const ProviderDescRightTopWrapperStyled = styled.div`
    height: 90%;
    width: 100%;
`
const EnterpriseInfoRightBottomWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 4rem 0;
`
const EnterpriseInfoRightBottomBackButtonStyled = styled.button`
  border: none;
  border-radius: .3rem;
  width: 10rem;
  font-size: .9rem;
  background-color: transparent;
  padding: .8rem .4rem;
  height: 100%;
  cursor: pointer;
  color: rgb(135, 179, 251);
  transition: all .1s linear;
  border: 1px solid rgb(135, 179, 251);
  &:hover{
      color: #fff;
      background-color: rgb(135, 179, 251);
  }
`
const EnterpriseInfoRightBottomNextButtonStyled = styled.button`
  background-color: #1174a6;
  border: none;
  border-radius: .3rem;
  width: 10rem;
  font-size: .9rem;
  padding: .8rem .4rem;
  height: 100%;
  cursor: pointer;
  color: #fff;
  transition: all .1s linear;
  border: 1px solid #1174a6;
  margin-left: auto;
  &:hover{
      color: #fff;
      background-color: rgb(11, 84, 120);
  }
`
const ProviderSucessSetUp = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const propertyRegistrationId = searchParams.get('p');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const handleBack = () => {
    navigate(`/provider/file?p=${propertyRegistrationId}`);
  }
  return (
    <ProviderPriceSetUpContainerStyled>
      <ProviderPriceSetUpWrapperStyled>
        <ProviderContentWrapperStyled>
          <StepperProvider activeStep={7} />
          <ProviderDescRightWrapperStyled>
            <ProviderDescRightTopWrapperStyled>
              <ProviderPriceHeaderWrapperStyled>
                <ProviderPriceHeaderLeftWrapperStyled>
                  <ProviderPriceHeaderStyled>Hệ thống đã ghi nhận thông tin bạn cung cấp.</ProviderPriceHeaderStyled>
                  <ProviderPriceSubHeaderStyled>Chúng tôi sẽ tiến hàng duyệt đơn đăng ký cho thuê của bạn. Quá trình này có thể mất 2-3 ngày !</ProviderPriceSubHeaderStyled>
                </ProviderPriceHeaderLeftWrapperStyled>
                <ProviderPriceHeaderRightImageStyled src={location_ec_pricing} />
              </ProviderPriceHeaderWrapperStyled>
            </ProviderDescRightTopWrapperStyled>
            <EnterpriseInfoRightBottomWrapperStyled>
                <EnterpriseInfoRightBottomBackButtonStyled onClick={handleBack}>TRỞ LẠI</EnterpriseInfoRightBottomBackButtonStyled>
                <Link to="/">
                  <EnterpriseInfoRightBottomNextButtonStyled>TIẾP THEO</EnterpriseInfoRightBottomNextButtonStyled>  
                </Link>
            </EnterpriseInfoRightBottomWrapperStyled>
          </ProviderDescRightWrapperStyled>
        </ProviderContentWrapperStyled>
      </ProviderPriceSetUpWrapperStyled>
    </ProviderPriceSetUpContainerStyled>
  )
}

export default ProviderSucessSetUp