import React from 'react';
import styled from 'styled-components';
import location_ec_amenities from '../../../assets/location-ec-amenities.png'
const EnterpriseServiceContainerStyled = styled.div``
const EnterpriseServiceWrapperStyled = styled.div``
const EnterpriseServiceHeaderWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`
const EnterpriseServiceHeaderLeftWrapperStyled = styled.div``
const EnterpriseServiceHeaderStyled = styled.h2``
const EnterpriseServiceSubHeaderStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin: 1rem 0;
`
const EnterpriseServiceHeaderRightImageStyled = styled.img`
  width: 20rem;
  height: 8rem;
`
const EnterpriseServiceTopHeaderStyled = styled.h4`
  font-size: 1.2rem;
  margin: 1rem 0;
`
const EnterpriseServiceTopSubHeaderStyled = styled.p`
  font-size: .9rem;
  font-weight: 300;
  margin: 1rem 0;
`
const EnterpriseServiceTopWrapperStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
`
const EnterpriseServiceTopChoiceContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const EnterpriseServiceTopChoiceWrapperStyled = styled.div`
  margin: .6rem;
  display: flex;
  justify-content: flex-start;
  width: 15rem;
`
const EnterpriseServiceTopChoiceStyled = styled.input`
  top: 0;
  margin-bottom: auto;
  margin-top: .1rem;
  cursor: pointer;
`
const EnterpriseServiceTopChoiceTitleStyled = styled.span`
  display: block;
  margin-left: .4rem;
  font-size: .9rem;
  color: #666;
`
const EnterpriseService = () => {
  return (
    <EnterpriseServiceContainerStyled>
      <EnterpriseServiceWrapperStyled>
        <EnterpriseServiceHeaderWrapperStyled>
          <EnterpriseServiceHeaderLeftWrapperStyled>
            <EnterpriseServiceHeaderStyled>Có gì độc đáo và tuyệt vời về chỗ nghỉ của quý đối tác?</EnterpriseServiceHeaderStyled>
            <EnterpriseServiceSubHeaderStyled>Mỗi phòng và nhà đều có nét độc đáo riêng. Hãy cho chúng tôi biết tại sao phòng và nhà của quý đối tác lại nổi bật.</EnterpriseServiceSubHeaderStyled>
          </EnterpriseServiceHeaderLeftWrapperStyled>
          <EnterpriseServiceHeaderRightImageStyled src={location_ec_amenities} />
        </EnterpriseServiceHeaderWrapperStyled>
        <EnterpriseServiceTopHeaderStyled>Lối vào</EnterpriseServiceTopHeaderStyled>
        <EnterpriseServiceTopSubHeaderStyled>Đây là những cách khách vào chỗ nghỉ.</EnterpriseServiceTopSubHeaderStyled>
        <EnterpriseServiceTopWrapperStyled>
          <EnterpriseServiceTopChoiceContainerStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Nhận/trả phòng [riêng]</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Khóa điện tử</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Bàn tiếp tân [24 giờ]</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Nhận phòng [24 giờ]</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Bãi để xe</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
          </EnterpriseServiceTopChoiceContainerStyled>
        </EnterpriseServiceTopWrapperStyled>
        <EnterpriseServiceTopHeaderStyled>Thông tin quan trọng</EnterpriseServiceTopHeaderStyled>
        <EnterpriseServiceTopSubHeaderStyled>Các dịch vụ này có trong hầu hết các chỗ nghỉ thành công của chúng tôi</EnterpriseServiceTopSubHeaderStyled>
        <EnterpriseServiceTopWrapperStyled>
          <EnterpriseServiceTopChoiceContainerStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Điều hòa</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Được phép đưa thú nuôi vào</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Đưa đón sân bay</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Wi-Fi miễn phí trong tất cả các phòng!</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Bữa sáng [miễn phí]</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Bếp chung</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Dọn phòng hằng ngày</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Dịch vụ giặt là</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
          </EnterpriseServiceTopChoiceContainerStyled>
        </EnterpriseServiceTopWrapperStyled>
        <EnterpriseServiceTopHeaderStyled>Bếp</EnterpriseServiceTopHeaderStyled>
        <EnterpriseServiceTopSubHeaderStyled>Những tiện nghi và trang thiết bị phục vụ cho hoạt động ăn uống.</EnterpriseServiceTopSubHeaderStyled>
        <EnterpriseServiceTopWrapperStyled>
          <EnterpriseServiceTopChoiceContainerStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Đồ dùng làm bếp</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Tủ đông</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Tủ lạnh</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Máy rửa bát</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Lò vi sóng</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Bếp</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Đồ dùng cơ bản trong nhà bếp (dụng cụ nấu ăn, dầu, nước sốt)</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Lò nướng</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
          </EnterpriseServiceTopChoiceContainerStyled>
        </EnterpriseServiceTopWrapperStyled>
        <EnterpriseServiceTopHeaderStyled>Độ an toàn và sạch sẽ</EnterpriseServiceTopHeaderStyled>
        <EnterpriseServiceTopSubHeaderStyled>Cho khách thấy rằng quý đối tác coi trọng sự an toàn và sức khỏe của họ với các tiện nghi này.</EnterpriseServiceTopSubHeaderStyled>
        <EnterpriseServiceTopWrapperStyled>
          <EnterpriseServiceTopChoiceContainerStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Bảo vệ [24 giờ]</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Khẩu trang miễn phí</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Nhận/trả phòng không tiếp xúc</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Điều hòa cá nhân</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Sản phẩm vệ sinh</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Được làm sạch bởi công ty làm sạch chuyên nghiệp</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Vật dụng làm vệ sinh được cung cấp cho khách</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Nước rửa tay</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
          </EnterpriseServiceTopChoiceContainerStyled>
        </EnterpriseServiceTopWrapperStyled>
        <EnterpriseServiceTopHeaderStyled>Thông tin thanh toán</EnterpriseServiceTopHeaderStyled>
        <EnterpriseServiceTopSubHeaderStyled>Khách có thể chọn thanh toán tại chỗ nghỉ, hãy đảm bảo cho du khách biết những phương thức quý đối tác chấp nhận</EnterpriseServiceTopSubHeaderStyled>
        <EnterpriseServiceTopWrapperStyled>
          <EnterpriseServiceTopChoiceContainerStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Visa</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>MasterCard</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>American Express</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>Tiền mặt</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>UnionPay</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
            <EnterpriseServiceTopChoiceWrapperStyled>
              <EnterpriseServiceTopChoiceStyled type="checkbox" />
              <EnterpriseServiceTopChoiceTitleStyled>JCB</EnterpriseServiceTopChoiceTitleStyled>
            </EnterpriseServiceTopChoiceWrapperStyled>
          </EnterpriseServiceTopChoiceContainerStyled>
        </EnterpriseServiceTopWrapperStyled>
      </EnterpriseServiceWrapperStyled>
    </EnterpriseServiceContainerStyled>
  )
}

export default EnterpriseService