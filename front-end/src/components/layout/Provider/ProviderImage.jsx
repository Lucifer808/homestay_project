import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import provider_ec_photos from '../../../assets/provider-ec-photos.png';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { optionsImageDescData } from '../../../dummyData'
import StepperProvider from '../../child/StepperProvider';
import { createRegistraionImages } from '../../../features/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ProviderImageContainerStyled = styled.div`
  height: 100%;
  width: 100%;
`
const ProviderImageWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProviderContentWrapperStyled = styled.div`
  width: 80rem;
  display: flex;
`
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
  padding: 0 .2rem;
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
const ProviderImageTopRightButtonWrapperStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const ProviderImageTopRightButtonInputStyled = styled.input`
  display: none;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
`
const ProviderImageTopRightButtonStyled = styled.label`
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
  flex-wrap: wrap;
`
const ProviderImageBottomElementWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 20rem;
  width: 18rem;
  background-color: #fff;
  margin: 1rem .2rem;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 12%);
`
const ProviderImageBottomElementImageStyled = styled.img`
  width: 18rem;
  margin-bottom: .8rem;
  height: 16rem;
  object-fit: cover;
`
const ProviderImageBottomElementSelectStyled = styled.select`
  width: 95%;
  padding: .6rem;
  outline: none;
  border: 1px solid #ccc;
`
const ProviderImageBottomElementOptionStyled = styled.option``
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
const EnterpriseInfoRightBottomBackNextWrapperButtonStyled = styled.div``
const RegisterpageInputErrorPromptStyled = styled.p`
  font-size: .8rem;
  color: rgb(225, 45, 45);
  margin: .4rem 0;
`
const initialDescValueF = {
  title: "Ảnh chính",
  id: 0
}
const ProviderImage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const propertyRegistrationId = searchParams.get('p');
  const [images, setImages] = useState("");
  const [error, setError] = useState("");
  const [imagesPreview, setImagesPreview] = useState([]);
  const [descs, setDescs] = useState([initialDescValueF]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleImagesChange = (e) => {
    setImages(e.target.files)
    const filesPre = Array.from(e.target.files);
    
    setImagesPreview([]);
    
    filesPre.forEach((file) => {
      const reader = new FileReader();
      
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
        }
      };
      
      reader.readAsDataURL(file);
    });
  };
  const createImagesSubmitHandler = (e) => {
    e.preventDefault();

    const RemoveDuplicates = (array, key) => {
      return array.reduce((arr, item) => {
        const removed = arr.filter(i => i[key] !== item[key]);
        return [...removed, item];
      }, []);
    };
    const resultArrs = RemoveDuplicates(descs, 'id');

    const formData = new FormData();

    formData.append("propertyRegistrationId", propertyRegistrationId);

    for (let i = 0; i < resultArrs.length; i++) {
      formData.append("descs", JSON.stringify(resultArrs[i]));
    }

    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);        
    }
    if(descs.length < images.length){
      setError("Vui lòng chọn chú thích cho ảnh !");
    }else{
      dispatch(createRegistraionImages(formData));
    //   for (var pair of formData.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]); 
    // }
    }
  };
  const handleChangeImage = (obj) => {
    setDescs([...descs, obj])
  }
  console.log(descs)
  // http://localhost:3000/provider/image?p=1060594471664 
  // const publicPath = process.env.REACT_APP_BACK_END_PUBLIC_URL;`${publicPath}public/uploads/2022-11-16T18-41-41.632Zroom_detail_3.jpeg`
  // console.log(publicPath)
  return (
    <ProviderImageContainerStyled>
      <ProviderImageWrapperStyled>
        <ProviderContentWrapperStyled>
          <StepperProvider activeStep={5} />
          <ProviderDescRightWrapperStyled encType='multipart/form-data' onSubmit={createImagesSubmitHandler}>
            <ProviderDescRightTopWrapperStyled>
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
                    <ProviderImageTopLeftImgStyled src={imagesPreview[0]}/>
                    <ProviderImageTopLeftImgTagWrapperStyled>
                      <ProviderImageTopLeftImgTagStyled>Ảnh chính</ProviderImageTopLeftImgTagStyled>
                    </ProviderImageTopLeftImgTagWrapperStyled>
                  </ProviderImageTopLeftWrapperStyled>
                  <ProviderImageTopRightWrapperStyled>
                    <CloudUploadOutlinedIcon style={{fontSize: '4rem', color: '#1174a6'}}/>
                    <ProviderImageTopRightTitleStyled>Kéo và thả ảnh của bạn vào đây</ProviderImageTopRightTitleStyled>
                    <ProviderImageTopRightButtonWrapperStyled>
                      <ProviderImageTopRightButtonInputStyled
                        onChange={(e) => handleImagesChange(e)} 
                        id='images' 
                        name='images' 
                        type="file" 
                        accept='image/*' 
                        multiple
                      />
                      <ProviderImageTopRightButtonStyled htmlFor='images'>CHỌN ẢNH</ProviderImageTopRightButtonStyled>
                    </ProviderImageTopRightButtonWrapperStyled>
                  </ProviderImageTopRightWrapperStyled>
                </ProviderImageTopWrapperStyled>
                <ProviderImageBottomWrapperStyled>
                  {imagesPreview.slice(1).map((item, index) => (
                    <ProviderImageBottomElementWrapperStyled key={index}>
                      <ProviderImageBottomElementImageStyled src={item}/>
                      <ProviderImageBottomElementSelectStyled onChange={(e) => handleChangeImage({title: e.target.value, id: index + 1})}>
                        {optionsImageDescData.map(item => (
                          <ProviderImageBottomElementOptionStyled key={item.id} value={item.title}>{item.title}</ProviderImageBottomElementOptionStyled>
                        ))}
                      </ProviderImageBottomElementSelectStyled>
                    </ProviderImageBottomElementWrapperStyled>
                  ))}
                </ProviderImageBottomWrapperStyled>
              </ProviderImageTopContainerStyled>
            </ProviderDescRightTopWrapperStyled>
            <EnterpriseInfoRightBottomWrapperStyled>
                <EnterpriseInfoRightBottomBackNextWrapperButtonStyled>
                  <EnterpriseInfoRightBottomBackButtonStyled>TRỞ LẠI</EnterpriseInfoRightBottomBackButtonStyled>
                </EnterpriseInfoRightBottomBackNextWrapperButtonStyled>
                <EnterpriseInfoRightBottomBackNextWrapperButtonStyled>
                  {error && (
                    <RegisterpageInputErrorPromptStyled>{error}</RegisterpageInputErrorPromptStyled>
                  )}
                  <EnterpriseInfoRightBottomNextButtonStyled type='submit'>TIẾP THEO</EnterpriseInfoRightBottomNextButtonStyled>
                </EnterpriseInfoRightBottomBackNextWrapperButtonStyled>
            </EnterpriseInfoRightBottomWrapperStyled>
          </ProviderDescRightWrapperStyled>
        </ProviderContentWrapperStyled>
      </ProviderImageWrapperStyled>
    </ProviderImageContainerStyled>
  )
}

export default ProviderImage