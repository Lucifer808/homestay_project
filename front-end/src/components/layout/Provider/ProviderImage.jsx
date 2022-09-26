import React from 'react';
import styled from 'styled-components';
import provider_ec_photos from '../../../assets/provider-ec-photos.png';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import img_detail from '../../../assets/img_detail.jpeg';
const ProviderImageContainerStyled = styled.div``
const ProviderImageWrapperStyled = styled.div``
const ProviderImageHeaderWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProviderImageHeaderLeftWrapperStyled = styled.div``
const ProviderImageHeaderStyled = styled.h2``
const ProviderImageSubHeaderStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin: 1rem 0;
`
const ProviderImageHeaderRightImageStyled = styled.img`
  width: 20rem;
  height: 8rem;
`
const ProviderImageTopContainerStyled = styled.div``
const ProviderImageTopWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`
const ProviderImageTopLeftWrapperStyled = styled.div`
  position: relative;
`
const ProviderImageTopLeftImgStyled = styled.img`
  width: 36rem;
  height: 20rem;
`
const ProviderImageTopLeftImgTagWrapperStyled = styled.div`
  position: absolute;
  top: 1.6rem;
  left: -.4rem;
  background-color: #ffa726;
  padding: .6rem .4rem;
`
const ProviderImageTopLeftImgTagStyled = styled.p`
  color: #fff;
`
const ProviderImageTopRightWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px dashed #ccc;
  padding: 0 2.4rem;
`
const ProviderImageTopRightTitleStyled = styled.p`
  font-weight: 500;
  font-size: .9rem;
  margin: 1rem 0;
`
const ProviderImageTopRightButtonStyled = styled.button`
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
const ProviderImageBottomWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const ProviderImageBottomElementWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 16rem;
  width: 18rem;
  background-color: #fff;
  margin: 1rem 0;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 12%);
`
const ProviderImageBottomElementImageStyled = styled.img`
  width: 18rem;
  margin-bottom: .8rem;
`
const ProviderImageBottomElementSelectStyled = styled.select`
  width: 95%;
  padding: .6rem;
  outline: none;
  border: 1px solid #ccc;
`
const ProviderImageBottomElementOptionStyled = styled.option``
const ProviderImage = () => {
  return (
    <ProviderImageContainerStyled>
      <ProviderImageWrapperStyled>
        <ProviderImageHeaderWrapperStyled>
          <ProviderImageHeaderLeftWrapperStyled>
            <ProviderImageHeaderStyled>Cho khách hàng xem những gì họ đang bỏ lỡ.</ProviderImageHeaderStyled>
            <ProviderImageSubHeaderStyled>Hình ảnh rất quan trọng đối với du khách. Hãy đăng càng nhiều ảnh chất lượng cao càng tốt. Bạn có thể thêm ảnh về sau. Agoda có sẵn những bí kíp đăng tải ảnh chất lượng để thu hút nhiều đặt phòng hơn.</ProviderImageSubHeaderStyled>
          </ProviderImageHeaderLeftWrapperStyled>
          <ProviderImageHeaderRightImageStyled src={provider_ec_photos} />
        </ProviderImageHeaderWrapperStyled>
        <ProviderImageTopContainerStyled>
          <ProviderImageTopWrapperStyled>
            <ProviderImageTopLeftWrapperStyled>
              <ProviderImageTopLeftImgStyled src={img_detail}/>
              <ProviderImageTopLeftImgTagWrapperStyled>
                <ProviderImageTopLeftImgTagStyled>Ảnh chính</ProviderImageTopLeftImgTagStyled>
              </ProviderImageTopLeftImgTagWrapperStyled>
            </ProviderImageTopLeftWrapperStyled>
            <ProviderImageTopRightWrapperStyled>
              <CloudUploadOutlinedIcon style={{fontSize: '4rem', color: '#1174a6'}}/>
              <ProviderImageTopRightTitleStyled>Kéo và thả ảnh của bạn vào đây</ProviderImageTopRightTitleStyled>
              <ProviderImageTopRightButtonStyled>CHỌN ẢNH</ProviderImageTopRightButtonStyled>
            </ProviderImageTopRightWrapperStyled>
          </ProviderImageTopWrapperStyled>
          <ProviderImageBottomWrapperStyled>
            <ProviderImageBottomElementWrapperStyled>
              <ProviderImageBottomElementImageStyled src={img_detail}/>
              <ProviderImageBottomElementSelectStyled>
                <ProviderImageBottomElementOptionStyled>Chọn chú thích</ProviderImageBottomElementOptionStyled>
              </ProviderImageBottomElementSelectStyled>
            </ProviderImageBottomElementWrapperStyled>
            <ProviderImageBottomElementWrapperStyled>
              <ProviderImageBottomElementImageStyled src={img_detail}/>
              <ProviderImageBottomElementSelectStyled>
                <ProviderImageBottomElementOptionStyled>Chọn chú thích</ProviderImageBottomElementOptionStyled>
              </ProviderImageBottomElementSelectStyled>
            </ProviderImageBottomElementWrapperStyled>
            <ProviderImageBottomElementWrapperStyled>
              <ProviderImageBottomElementImageStyled src={img_detail}/>
              <ProviderImageBottomElementSelectStyled>
                <ProviderImageBottomElementOptionStyled>Chọn chú thích</ProviderImageBottomElementOptionStyled>
              </ProviderImageBottomElementSelectStyled>
            </ProviderImageBottomElementWrapperStyled>
            
          </ProviderImageBottomWrapperStyled>
        </ProviderImageTopContainerStyled>
      </ProviderImageWrapperStyled>
    </ProviderImageContainerStyled>
  )
}

export default ProviderImage