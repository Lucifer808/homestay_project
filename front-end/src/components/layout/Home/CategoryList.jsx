import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import location_1 from '../../../assets/location_1.png';
import location_2 from '../../../assets/location_2.png';
import location_3 from '../../../assets/location_3.png';
import location_4 from '../../../assets/location_4.png';
import location_5 from '../../../assets/location_5.png';
import location_6 from '../../../assets/location_6.png';
import location_7 from '../../../assets/location_7.png';
import location_16 from '../../../assets/location_16.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
const ReactSlickSyled = styled(Slider)`
    .slick-list {
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
    height: 100% !important;
    overflow: hidden;
    border: none;
    }
    .slick-slide{
        position: relative;
    }
    .slick-arrow.slick-prev,
    .slick-arrow.slick-next {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: .5px solid #ccc;
    }
    .slick-prev{
        left: -20px;
    }
    .slick-next{
        right: -20px;
    }
    .slick-prev::before,
    .slick-next::before{
        display: none;
    }
`
const CategoryListContainerStyled = styled.div`
  width: 79.8vw;
  height: 40vh;
  margin: 0 9rem;
`
const CategoryListSliderContainerStyled = styled.div`
`
const CategoryListImageWrapperStyled = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0rem;
`
const CategoryListImageStyled = styled.img`
  height: 20rem;
  width: 16rem;
  border-radius: .4rem;
  border: none;
`
const CategoryListHeaderWrapperStyled = styled.div`
  margin: 1rem 0;
`
const CategoryListHeaderTitleWrapperStyled = styled.h2``
const CategoryListHeaderSubTitleWrapperStyled = styled.span`
  color: #666;
`
const CategoryListContentWrapperStyled = styled.div`
  position: relative;
  color: #fff;
`
const CategoryListContentStyled = styled.h2`
  position: absolute;
  top: -4rem;
  margin-left: 1rem;
`
const CategoryListSubContentStyled = styled.span`
  position: absolute;
  top: -2rem;
  margin-left: 1rem;
`
const CategoryList = () => {
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <KeyboardArrowRightOutlinedIcon style={{color: "#000"}}/>
      </div>
    );
  }
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <KeyboardArrowLeftOutlinedIcon style={{color: "#000"}}/>  
      </div>
    );
  }
const settings = {
    infinite: true,
    centerMode: true,
    className: "center",
    dots: false,
    slidesToShow: 3,
    centerPadding: "130px",
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb custom-indicator",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500
};
  return (
    <CategoryListContainerStyled>
        <CategoryListHeaderWrapperStyled>
          <CategoryListHeaderTitleWrapperStyled>Địa điểm nổi bật</CategoryListHeaderTitleWrapperStyled>
          <CategoryListHeaderSubTitleWrapperStyled>Cùng booking bắt đầu chuyến hành trình chinh phục thế giới của bạn</CategoryListHeaderSubTitleWrapperStyled>
        </CategoryListHeaderWrapperStyled>
        <CategoryListSliderContainerStyled>
            <ReactSlickSyled {...settings}>
                <CategoryListImageWrapperStyled>
                    <CategoryListImageStyled src={location_2} />
                    <CategoryListContentWrapperStyled>
                      <CategoryListContentStyled>Hà Nội</CategoryListContentStyled>
                      <CategoryListSubContentStyled>8081 Chỗ ở</CategoryListSubContentStyled>
                    </CategoryListContentWrapperStyled>
                </CategoryListImageWrapperStyled>
                <CategoryListImageWrapperStyled>
                    <CategoryListImageStyled src={location_1} />
                    <CategoryListContentWrapperStyled>
                      <CategoryListContentStyled>Nha Trang</CategoryListContentStyled>
                      <CategoryListSubContentStyled>8081 Chỗ ở</CategoryListSubContentStyled>
                    </CategoryListContentWrapperStyled>
                </CategoryListImageWrapperStyled>
                <CategoryListImageWrapperStyled>
                    <CategoryListImageStyled src={location_3} />
                    <CategoryListContentWrapperStyled>
                      <CategoryListContentStyled>TP. Hồ Chí Minh</CategoryListContentStyled>
                      <CategoryListSubContentStyled>5081 Chỗ ở</CategoryListSubContentStyled>
                    </CategoryListContentWrapperStyled>
                </CategoryListImageWrapperStyled>
                <CategoryListImageWrapperStyled>
                    <CategoryListImageStyled src={location_4} />
                    <CategoryListContentWrapperStyled>
                      <CategoryListContentStyled>Đà Lạt</CategoryListContentStyled>
                      <CategoryListSubContentStyled>4081 Chỗ ở</CategoryListSubContentStyled>
                    </CategoryListContentWrapperStyled>
                </CategoryListImageWrapperStyled>
                <CategoryListImageWrapperStyled>
                    <CategoryListImageStyled src={location_5} />
                    <CategoryListContentWrapperStyled>
                      <CategoryListContentStyled>Quảng Ninh</CategoryListContentStyled>
                      <CategoryListSubContentStyled>8081 Chỗ ở</CategoryListSubContentStyled>
                    </CategoryListContentWrapperStyled>
                </CategoryListImageWrapperStyled>
                <CategoryListImageWrapperStyled>
                    <CategoryListImageStyled src={location_6} />
                    <CategoryListContentWrapperStyled>
                      <CategoryListContentStyled>Hội An</CategoryListContentStyled>
                      <CategoryListSubContentStyled>601 Chỗ ở</CategoryListSubContentStyled>
                    </CategoryListContentWrapperStyled>
                </CategoryListImageWrapperStyled>
                <CategoryListImageWrapperStyled>
                    <CategoryListImageStyled src={location_7} />
                    <CategoryListContentWrapperStyled>
                      <CategoryListContentStyled>Vũng Tàu</CategoryListContentStyled>
                      <CategoryListSubContentStyled>402 Chỗ ở</CategoryListSubContentStyled>
                    </CategoryListContentWrapperStyled>
                </CategoryListImageWrapperStyled>
                <CategoryListImageWrapperStyled>
                    <CategoryListImageStyled src={location_16} />
                    <CategoryListContentWrapperStyled>
                      <CategoryListContentStyled>Đà Nẵng</CategoryListContentStyled>
                      <CategoryListSubContentStyled>8281 Chỗ ở</CategoryListSubContentStyled>
                    </CategoryListContentWrapperStyled>
                </CategoryListImageWrapperStyled>
            </ReactSlickSyled>
        </CategoryListSliderContainerStyled>
    </CategoryListContainerStyled>
  )
}

export default CategoryList