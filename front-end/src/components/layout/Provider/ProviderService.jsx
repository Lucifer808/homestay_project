import React, { useState } from 'react';
import styled from 'styled-components';
import location_ec_amenities from '../../../assets/location-ec-amenities.png'
const ProviderServiceContainerStyled = styled.div``
const ProviderServiceWrapperStyled = styled.div``
const ProviderServiceHeaderWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProviderServiceHeaderLeftWrapperStyled = styled.div``
const ProviderServiceHeaderStyled = styled.h2``
const ProviderServiceSubHeaderStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin: 1rem 0;
`
const ProviderServiceHeaderRightImageStyled = styled.img`
  width: 20rem;
  height: 8rem;
`
const ProviderServiceTopHeaderStyled = styled.h4`
  font-size: 1.2rem;
  margin: 1rem 0;
`
const ProviderServiceTopSubHeaderStyled = styled.p`
  font-size: .9rem;
  font-weight: 300;
  margin: 1rem 0;
`
const ProviderServiceTopWrapperStyled = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
`
const ProviderServiceTopChoiceContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ProviderServiceTopChoiceWrapperStyled = styled.div`
  margin: .6rem;
  display: flex;
  justify-content: flex-start;
  width: 15rem;
`
const ProviderServiceTopChoiceStyled = styled.input`
  top: 0;
  margin-bottom: auto;
  cursor: pointer;
`
const ProviderServiceTopChoiceTitleStyled = styled.span`
  display: block;
  margin-left: .4rem;
  font-size: .9rem;
  color: #666;
`
const ProviderServiceTopMoreChoiceButtonStyled = styled.button`
  color: #1174a6;
  background-color: #fff;
  border: 1px solid #1174a6;
  padding: .8rem;
  border-radius: .2rem;
  cursor: pointer;
  &:hover{
    color: #1174a6;
    background-color: #e6e6e6;
    border-color: #0b4d6e;
  }
`
const ProviderService = () => {
  const [openService, setOpenService] = useState(false);
  return (
    <ProviderServiceContainerStyled>
      <ProviderServiceWrapperStyled>
        <ProviderServiceHeaderWrapperStyled>
          <ProviderServiceHeaderLeftWrapperStyled>
            <ProviderServiceHeaderStyled>Tất cả các tiện nghi và những vật dụng nhỏ bạn cung cấp.</ProviderServiceHeaderStyled>
            <ProviderServiceSubHeaderStyled>Nhà bạn có sẵn những vật dụng và tiện nghi gì?</ProviderServiceSubHeaderStyled>
          </ProviderServiceHeaderLeftWrapperStyled>
          <ProviderServiceHeaderRightImageStyled src={location_ec_amenities} />
        </ProviderServiceHeaderWrapperStyled>
        <ProviderServiceTopHeaderStyled>Khuyến nghị</ProviderServiceTopHeaderStyled>
        <ProviderServiceTopSubHeaderStyled>Du khách thích các tiện nghi này hơn khi đặt nhà.</ProviderServiceTopSubHeaderStyled>
        <ProviderServiceTopWrapperStyled>
          <ProviderServiceTopChoiceContainerStyled>
            <ProviderServiceTopChoiceWrapperStyled>
              <ProviderServiceTopChoiceStyled type="checkbox" />
              <ProviderServiceTopChoiceTitleStyled>Khăn các loại</ProviderServiceTopChoiceTitleStyled>
            </ProviderServiceTopChoiceWrapperStyled>
            <ProviderServiceTopChoiceWrapperStyled>
              <ProviderServiceTopChoiceStyled type="checkbox" />
              <ProviderServiceTopChoiceTitleStyled>Bàn/không gian làm việc</ProviderServiceTopChoiceTitleStyled>
            </ProviderServiceTopChoiceWrapperStyled>
            <ProviderServiceTopChoiceWrapperStyled>
              <ProviderServiceTopChoiceStyled type="checkbox" />
              <ProviderServiceTopChoiceTitleStyled>Đậu xe miễn phí</ProviderServiceTopChoiceTitleStyled>
            </ProviderServiceTopChoiceWrapperStyled>
            <ProviderServiceTopChoiceWrapperStyled>
              <ProviderServiceTopChoiceStyled type="checkbox" />
              <ProviderServiceTopChoiceTitleStyled>Đồ dùng cơ bản trong nhà bếp (dụng cụ nấu ăn, dầu, nước sốt)</ProviderServiceTopChoiceTitleStyled>
            </ProviderServiceTopChoiceWrapperStyled>
            <ProviderServiceTopChoiceWrapperStyled>
              <ProviderServiceTopChoiceStyled type="checkbox" />
              <ProviderServiceTopChoiceTitleStyled>Máy điều hòa</ProviderServiceTopChoiceTitleStyled>
            </ProviderServiceTopChoiceWrapperStyled>
            <ProviderServiceTopChoiceWrapperStyled>
              <ProviderServiceTopChoiceStyled type="checkbox" />
              <ProviderServiceTopChoiceTitleStyled>Chìa khóa thông minh</ProviderServiceTopChoiceTitleStyled>
            </ProviderServiceTopChoiceWrapperStyled>
            <ProviderServiceTopChoiceWrapperStyled>
              <ProviderServiceTopChoiceStyled type="checkbox" />
              <ProviderServiceTopChoiceTitleStyled>Wifi miễn phí</ProviderServiceTopChoiceTitleStyled>
            </ProviderServiceTopChoiceWrapperStyled>
            <ProviderServiceTopChoiceWrapperStyled>
              <ProviderServiceTopChoiceStyled type="checkbox" />
              <ProviderServiceTopChoiceTitleStyled>Lối vào riêng</ProviderServiceTopChoiceTitleStyled>
            </ProviderServiceTopChoiceWrapperStyled>
            <ProviderServiceTopChoiceWrapperStyled>
              <ProviderServiceTopChoiceStyled type="checkbox" />
              <ProviderServiceTopChoiceTitleStyled>Ban công hoặc sân hiên</ProviderServiceTopChoiceTitleStyled>
            </ProviderServiceTopChoiceWrapperStyled>
            <ProviderServiceTopChoiceWrapperStyled>
              <ProviderServiceTopChoiceStyled type="checkbox" />
              <ProviderServiceTopChoiceTitleStyled>Khu đối diện bãi biển</ProviderServiceTopChoiceTitleStyled>
            </ProviderServiceTopChoiceWrapperStyled>
            <ProviderServiceTopChoiceWrapperStyled>
              <ProviderServiceTopChoiceStyled type="checkbox" />
              <ProviderServiceTopChoiceTitleStyled>Máy sưởi</ProviderServiceTopChoiceTitleStyled>
            </ProviderServiceTopChoiceWrapperStyled>
            <ProviderServiceTopChoiceWrapperStyled>
              <ProviderServiceTopChoiceStyled type="checkbox" />
              <ProviderServiceTopChoiceTitleStyled>Tivi</ProviderServiceTopChoiceTitleStyled>
            </ProviderServiceTopChoiceWrapperStyled>
          </ProviderServiceTopChoiceContainerStyled>
        </ProviderServiceTopWrapperStyled>
        <ProviderServiceTopHeaderStyled>Có nhiều tiện nghi hơn nữa ư?</ProviderServiceTopHeaderStyled>
        <ProviderServiceTopMoreChoiceButtonStyled onClick={() => setOpenService(!openService)}>{ openService ? "Ẩn các tiện nghi" : "Xem danh sách tất cả các tiện nghi" }</ProviderServiceTopMoreChoiceButtonStyled>
        { openService && (
          <>
            <ProviderServiceTopHeaderStyled>Tiêu chuẩn</ProviderServiceTopHeaderStyled>
            <ProviderServiceTopSubHeaderStyled>Các tiện nghi này có trong hầu hết các chỗ nghỉ thành công của chúng tôi.</ProviderServiceTopSubHeaderStyled>
            <ProviderServiceTopWrapperStyled>
              <ProviderServiceTopChoiceContainerStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Tủ áo</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Bàn ủi (bàn là)</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Máy giặt</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Máy sấy</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Bộ ga giường</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Quạt (trần hoặc đứng)</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Tiệm giặt là gần đây</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
              </ProviderServiceTopChoiceContainerStyled>
            </ProviderServiceTopWrapperStyled>
            <ProviderServiceTopHeaderStyled>Gia đình</ProviderServiceTopHeaderStyled>
            <ProviderServiceTopSubHeaderStyled>Các tiện nghi này quan trọng đối với những gia đình đi du lịch cùng nhau, đặc biệt là với trẻ nhỏ.</ProviderServiceTopSubHeaderStyled>
            <ProviderServiceTopWrapperStyled>
              <ProviderServiceTopChoiceContainerStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Bồn tắm trẻ em</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Sách và đồ chơi cho trẻ em</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Ghế cao cho trẻ con ngồi ăn</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Thiết bị giám sát trẻ</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Bát đĩa cho trẻ</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Cũi vải</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Bàn thay tã</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Cũi em bé</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Cửa chặn cầu thang</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
              </ProviderServiceTopChoiceContainerStyled>
            </ProviderServiceTopWrapperStyled>
            <ProviderServiceTopHeaderStyled>Độ an toàn và sạch sẽ</ProviderServiceTopHeaderStyled>
            <ProviderServiceTopSubHeaderStyled>Cho khách thấy rằng quý đối tác coi trọng sự an toàn và sức khỏe của họ với các tiện nghi này.</ProviderServiceTopSubHeaderStyled>
            <ProviderServiceTopWrapperStyled>
              <ProviderServiceTopChoiceContainerStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Bảo vệ [24 giờ]</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Được làm sạch theo hướng dẫn về y tế hoặc của chúng tôi</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Nhận phòng/trả phòng không tiếp xúc</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Bộ sơ cấp cứu</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Đồ che mặt bảo vệ cho nhân viên</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Cảm biến báo khói</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Cảm biến báo khí CO</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Sản phẩm làm sạch được sử dụng dựa trên hướng dẫn về y tế</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Khẩu trang được cung cấp cho khách</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Nước rửa tay và xà phòng được cung cấp</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Màn bảo vệ ở khu vực chung</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Kiểm tra nhiệt độ cho khách và nhân viên</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Được làm sạch bởi công ty làm sạch chuyên nghiệp</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Vật dụng làm vệ sinh được cung cấp cho khách</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Bình chữa cháy</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Các quy định giãn cách vật lý được chấp hành</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Được khử trùng theo nguyên tắc về y tế</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
              </ProviderServiceTopChoiceContainerStyled>
            </ProviderServiceTopWrapperStyled>
            <ProviderServiceTopHeaderStyled>Khác</ProviderServiceTopHeaderStyled>
            <ProviderServiceTopSubHeaderStyled>Các dịch vụ khác mà có thể đáp ứng nhu cầu của du khách nhất định.</ProviderServiceTopSubHeaderStyled>
            <ProviderServiceTopWrapperStyled>
              <ProviderServiceTopChoiceContainerStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Phòng tập gym</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Hồ bơi trong nhà</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Hồ bơi riêng</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Bồn tắm nước nóng</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Cho phép vật nuôi</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Được hút thuốc</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Lò sưởi trong nhà</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
                <ProviderServiceTopChoiceWrapperStyled>
                  <ProviderServiceTopChoiceStyled type="checkbox" />
                  <ProviderServiceTopChoiceTitleStyled>Hồ bơi ngoài trời</ProviderServiceTopChoiceTitleStyled>
                </ProviderServiceTopChoiceWrapperStyled>
              </ProviderServiceTopChoiceContainerStyled>
            </ProviderServiceTopWrapperStyled>
          </>
        )}
      </ProviderServiceWrapperStyled>
    </ProviderServiceContainerStyled>
  )
}

export default ProviderService