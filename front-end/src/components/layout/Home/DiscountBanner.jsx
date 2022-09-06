import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import discount from '../../../assets/discount.png';
import discount1 from '../../../assets/discount1.png';
import discount2 from '../../../assets/discount2.png';
import discount3 from '../../../assets/discount3.png';
import discount4 from '../../../assets/discount4.png';
import discount5 from '../../../assets/discount5.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const ReactSlickSyled = styled(Slider)`
    .slick-list {
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
    height: 100% !important;
    pointer-events: none;
    }
    .custom-indicator li{
        border-radius: 50%;
        height: 10px;
        width: 10px;
        margin-left: .4rem;
        background-color: #ccc;
    }
    .custom-indicator li.slick-active{
        background-color: rgb(83, 146, 249);
    }
    .slick-arrow.slick-prev,
    .slick-arrow.slick-next {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: .5px solid #ccc;
    }
    .slick-prev{
        left: 20px;
    }
    .slick-next{
        right: 20px;
    }
    .slick-prev::before,
    .slick-next::before{
        display: none;
    }
`
const DiscountBannerContainerStyled = styled.div`
    width: 80vw;
    height: 30vh;
    margin: 0 9rem;
`
const DiscountBannerSliderContainerStyled = styled.div`
`
const DiscountBannerImageWrapperStyled = styled.div`
    height: 100%;
    width: 100%;
    margin: 0rem;
    margin-left: 5rem;
`
const DiscountBannerImageStyled = styled.img`
    height: 12rem;
    width: 32rem;
    border-radius: .4rem;
`
const DiscountBanner = () => {
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
        className: "center",
        centerMode: true,
        infinite: true,
        dots: true,
        centerPadding: "70px",
        slidesToShow: 2,
        dotsClass: "slick-dots slick-thumb custom-indicator",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        speed: 500,
        customPaging: i =>(
            <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "15px",
                height: "15px",
                color: "rgb(83, 146, 249)",
                borderRadius: "50%"
            }}
            >
        </div>
        )
    };
  return (
    <DiscountBannerContainerStyled>
        <DiscountBannerSliderContainerStyled>
            <ReactSlickSyled {...settings}>
                <DiscountBannerImageWrapperStyled>
                    <DiscountBannerImageStyled src={discount} />
                </DiscountBannerImageWrapperStyled>
                <DiscountBannerImageWrapperStyled>
                    <DiscountBannerImageStyled src={discount1} />
                </DiscountBannerImageWrapperStyled>
                <DiscountBannerImageWrapperStyled>
                    <DiscountBannerImageStyled src={discount2} />
                </DiscountBannerImageWrapperStyled>
                <DiscountBannerImageWrapperStyled>
                    <DiscountBannerImageStyled src={discount3} />
                </DiscountBannerImageWrapperStyled>
                <DiscountBannerImageWrapperStyled>
                    <DiscountBannerImageStyled src={discount4} />
                </DiscountBannerImageWrapperStyled>
                <DiscountBannerImageWrapperStyled>
                    <DiscountBannerImageStyled src={discount5} />
                </DiscountBannerImageWrapperStyled>
            </ReactSlickSyled>
        </DiscountBannerSliderContainerStyled>
    </DiscountBannerContainerStyled>
  )
}

export default DiscountBanner