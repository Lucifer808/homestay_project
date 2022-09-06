import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import recommend1 from '../../../assets/recommend1.jpeg';
import recommend2 from '../../../assets/recommend2.jpeg';
import recommend3 from '../../../assets/recommend3.jpeg';
import recommend4 from '../../../assets/recommend4.jpeg';
import recommend5 from '../../../assets/recommend5.png';
import recommend6 from '../../../assets/recommend6.jpeg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
  width: 80vw;
  height: 40vh;
  margin: 2rem 9rem;
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
  object-fit: cover;
  height: 16rem;
  width: 24rem;
  border-radius: .2rem;
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
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
`
const CategoryListContentStyled = styled.h4`
  position: absolute;
  top: -14rem;
  margin-left: 1rem;
`
const CategoryListSubContentStyled = styled.span`
  position: absolute;
  top: -4rem;
  font-weight: 800;
  margin-left: 1rem;
`
const RecommendList = () => {
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
    slidesToShow: 2,
    centerPadding: "194px",
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb custom-indicator",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500
};
  return (
    <CategoryListContainerStyled>
        <CategoryListHeaderWrapperStyled>
          <CategoryListHeaderTitleWrapperStyled>Gợi ý khám phá</CategoryListHeaderTitleWrapperStyled>
          <CategoryListHeaderSubTitleWrapperStyled>Để mỗi chuyến đi là một hành trình truyền cảm hứng, mỗi căn phòng là một khoảng trời an yên</CategoryListHeaderSubTitleWrapperStyled>
        </CategoryListHeaderWrapperStyled>
        <CategoryListSliderContainerStyled>
            <ReactSlickSyled {...settings}>
                <CategoryListImageWrapperStyled>
                    <CategoryListImageStyled src={recommend1} />
                    <CategoryListContentWrapperStyled>
                      <CategoryListContentStyled>Hà Nội</CategoryListContentStyled>
                      <CategoryListSubContentStyled>Những điều nên tuân thủ trước khi trả phòng homestay để lợi cả đôi đường</CategoryListSubContentStyled>
                    </CategoryListContentWrapperStyled>
                </CategoryListImageWrapperStyled>
                <CategoryListImageWrapperStyled>
                    <CategoryListImageStyled src={recommend2} />
                    <CategoryListContentWrapperStyled>
                      <CategoryListContentStyled>Nha Trang</CategoryListContentStyled>
                      <CategoryListSubContentStyled>Những điều nên tuân thủ trước khi trả phòng homestay để lợi cả đôi đường</CategoryListSubContentStyled>
                    </CategoryListContentWrapperStyled>
                </CategoryListImageWrapperStyled>
                <CategoryListImageWrapperStyled>
                    <CategoryListImageStyled src={recommend3} />
                    <CategoryListContentWrapperStyled>
                      <CategoryListContentStyled>TP. Hồ Chí Minh</CategoryListContentStyled>
                      <CategoryListSubContentStyled>Những điều nên tuân thủ trước khi trả phòng homestay để lợi cả đôi đường</CategoryListSubContentStyled>
                    </CategoryListContentWrapperStyled>
                </CategoryListImageWrapperStyled>
                <CategoryListImageWrapperStyled>
                    <CategoryListImageStyled src={recommend4} />
                    <CategoryListContentWrapperStyled>
                      <CategoryListContentStyled>Đà Lạt</CategoryListContentStyled>
                      <CategoryListSubContentStyled>Những điều nên tuân thủ trước khi trả phòng homestay để lợi cả đôi đường</CategoryListSubContentStyled>
                    </CategoryListContentWrapperStyled>
                </CategoryListImageWrapperStyled>
                <CategoryListImageWrapperStyled>
                    <CategoryListImageStyled src={recommend5} />
                    <CategoryListContentWrapperStyled>
                      <CategoryListContentStyled>Quảng Ninh</CategoryListContentStyled>
                      <CategoryListSubContentStyled>Những điều nên tuân thủ trước khi trả phòng homestay để lợi cả đôi đường</CategoryListSubContentStyled>
                    </CategoryListContentWrapperStyled>
                </CategoryListImageWrapperStyled>
                <CategoryListImageWrapperStyled>
                    <CategoryListImageStyled src={recommend6} />
                    <CategoryListContentWrapperStyled>
                      <CategoryListContentStyled>Hội An</CategoryListContentStyled>
                      <CategoryListSubContentStyled>Những điều nên tuân thủ trước khi trả phòng homestay để lợi cả đôi đường</CategoryListSubContentStyled>
                    </CategoryListContentWrapperStyled>
                </CategoryListImageWrapperStyled>
            </ReactSlickSyled>
        </CategoryListSliderContainerStyled>
    </CategoryListContainerStyled>
  )
}

export default RecommendList