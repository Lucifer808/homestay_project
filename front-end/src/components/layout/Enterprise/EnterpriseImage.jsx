import React from 'react';
import styled from 'styled-components';
import Enterprise_ec_photos from '../../../assets/provider-ec-photos.png';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import img_detail from '../../../assets/img_detail.jpeg';
import StepperEnterprise from '../../child/StepperEnterprise';
import { Link } from 'react-router-dom';
const EnterpriseImageContainerStyled = styled.div`
  width: 100%;
  height: 100%;
`
const EnterpriseImageWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProviderContentWrapperStyled = styled.div`
  width: 80rem;
  display: flex;
`
const EnterpriseImageHeaderWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`
const EnterpriseImageHeaderLeftWrapperStyled = styled.div``
const EnterpriseImageHeaderStyled = styled.h2``
const EnterpriseImageSubHeaderStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin: 1rem 0;
`
const EnterpriseImageHeaderRightImageStyled = styled.img`
  width: 20rem;
  height: 8rem;
`
const EnterpriseImageTopContainerStyled = styled.div``
const EnterpriseImageTopWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`
const EnterpriseImageTopLeftWrapperStyled = styled.div`
  position: relative;
`
const EnterpriseImageTopLeftImgStyled = styled.img`
  width: 36rem;
  height: 20rem;
`
const EnterpriseImageTopLeftImgTagWrapperStyled = styled.div`
  position: absolute;
  top: 1.6rem;
  left: -.4rem;
  background-color: #ffa726;
  padding: .6rem .4rem;
`
const EnterpriseImageTopLeftImgTagStyled = styled.p`
  color: #fff;
`
const EnterpriseImageTopRightWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px dashed #ccc;
  padding: 0 2.4rem;
`
const EnterpriseImageTopRightTitleStyled = styled.p`
  font-weight: 500;
  font-size: .9rem;
  margin: 1rem 0;
`
const EnterpriseImageTopRightButtonStyled = styled.button`
  color: #fff;
  background-color: #1174a6;
  border: none;
  border-color: #1174a6;
  padding: 1rem 1.4rem; 
  border-radius: .2rem;
  cursor: pointer;
  &:hover{
    color: #fff;
    background-color: #0c5478;
    border-color: #0b4d6e;
  }
`
const EnterpriseImageBottomWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const EnterpriseImageBottomElementWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 16rem;
  width: 18rem;
  background-color: #fff;
  margin: 1rem 0;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 12%);
`
const EnterpriseImageBottomElementImageStyled = styled.img`
  width: 18rem;
  margin-bottom: .8rem;
`
const EnterpriseImageBottomElementSelectStyled = styled.select`
  width: 95%;
  padding: .6rem;
  outline: none;
  border: 1px solid #ccc;
`
const EnterpriseImageBottomElementOptionStyled = styled.option``

const ProviderDescRightWrapperStyled = styled.div`
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
const EnterpriseImage = () => {
  return (
    <EnterpriseImageContainerStyled>
      <EnterpriseImageWrapperStyled>
        <ProviderContentWrapperStyled>
          <StepperEnterprise activeStep={4} />
          <ProviderDescRightWrapperStyled>
            <ProviderDescRightTopWrapperStyled>
              <EnterpriseImageHeaderWrapperStyled>
                <EnterpriseImageHeaderLeftWrapperStyled>
                  <EnterpriseImageHeaderStyled>Cho khách hàng xem những gì họ đang bỏ lỡ.</EnterpriseImageHeaderStyled>
                  <EnterpriseImageSubHeaderStyled>Hình ảnh rất quan trọng đối với du khách. Hãy đăng càng nhiều ảnh chất lượng cao càng tốt. Bạn có thể thêm ảnh về sau. Agoda có sẵn những bí kíp đăng tải ảnh chất lượng để thu hút nhiều đặt phòng hơn.</EnterpriseImageSubHeaderStyled>
                </EnterpriseImageHeaderLeftWrapperStyled>
                <EnterpriseImageHeaderRightImageStyled src={Enterprise_ec_photos} />
              </EnterpriseImageHeaderWrapperStyled>
              <EnterpriseImageTopContainerStyled>
                <EnterpriseImageTopWrapperStyled>
                  <EnterpriseImageTopLeftWrapperStyled>
                    <EnterpriseImageTopLeftImgStyled src={img_detail}/>
                    <EnterpriseImageTopLeftImgTagWrapperStyled>
                      <EnterpriseImageTopLeftImgTagStyled>Ảnh chính</EnterpriseImageTopLeftImgTagStyled>
                    </EnterpriseImageTopLeftImgTagWrapperStyled>
                  </EnterpriseImageTopLeftWrapperStyled>
                  <EnterpriseImageTopRightWrapperStyled>
                    <CloudUploadOutlinedIcon style={{fontSize: '4rem', color: '#1174a6'}}/>
                    <EnterpriseImageTopRightTitleStyled>Kéo và thả ảnh của bạn vào đây</EnterpriseImageTopRightTitleStyled>
                    <EnterpriseImageTopRightButtonStyled>CHỌN ẢNH</EnterpriseImageTopRightButtonStyled>
                  </EnterpriseImageTopRightWrapperStyled>
                </EnterpriseImageTopWrapperStyled>
                <EnterpriseImageBottomWrapperStyled>
                  <EnterpriseImageBottomElementWrapperStyled>
                    <EnterpriseImageBottomElementImageStyled src={img_detail}/>
                    <EnterpriseImageBottomElementSelectStyled>
                      <EnterpriseImageBottomElementOptionStyled>Chọn chú thích</EnterpriseImageBottomElementOptionStyled>
                    </EnterpriseImageBottomElementSelectStyled>
                  </EnterpriseImageBottomElementWrapperStyled>
                  <EnterpriseImageBottomElementWrapperStyled>
                    <EnterpriseImageBottomElementImageStyled src={img_detail}/>
                    <EnterpriseImageBottomElementSelectStyled>
                      <EnterpriseImageBottomElementOptionStyled>Chọn chú thích</EnterpriseImageBottomElementOptionStyled>
                    </EnterpriseImageBottomElementSelectStyled>
                  </EnterpriseImageBottomElementWrapperStyled>
                  <EnterpriseImageBottomElementWrapperStyled>
                    <EnterpriseImageBottomElementImageStyled src={img_detail}/>
                    <EnterpriseImageBottomElementSelectStyled>
                      <EnterpriseImageBottomElementOptionStyled>Chọn chú thích</EnterpriseImageBottomElementOptionStyled>
                    </EnterpriseImageBottomElementSelectStyled>
                  </EnterpriseImageBottomElementWrapperStyled>
                </EnterpriseImageBottomWrapperStyled>
              </EnterpriseImageTopContainerStyled>
            </ProviderDescRightTopWrapperStyled>
            <EnterpriseInfoRightBottomWrapperStyled>
              <Link to="/enterprise/roomdetail">
                <EnterpriseInfoRightBottomBackButtonStyled>TRỞ LẠI</EnterpriseInfoRightBottomBackButtonStyled>
              </Link>
              <Link to="/enterprise/file">
                <EnterpriseInfoRightBottomNextButtonStyled>TIẾP THEO</EnterpriseInfoRightBottomNextButtonStyled>
              </Link>
            </EnterpriseInfoRightBottomWrapperStyled>
          </ProviderDescRightWrapperStyled>
        </ProviderContentWrapperStyled>
      </EnterpriseImageWrapperStyled>
    </EnterpriseImageContainerStyled>
  )
}

export default EnterpriseImage