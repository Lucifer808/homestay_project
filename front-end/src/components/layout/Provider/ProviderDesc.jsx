import React from 'react';
import styled from 'styled-components';
import provider_ec_desc from '../../../assets/provider-ec-description.png';
import Rating from '@mui/material/Rating';
const ProviderDescContainerStyled = styled.div`
  height: 100%;
  width: 100%;
`
const ProviderDescWrapperStyled = styled.div``
const ProviderDescHeaderWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProviderDescHeaderLeftWrapperStyled = styled.div``
const ProviderDescHeaderStyled = styled.h2``
const ProviderDescSubHeaderStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin: 1rem 0;
`
const ProviderDescHeaderRightImageStyled = styled.img`
  width: 20rem;
  height: 8rem;
`
const ProviderDescTopHeaderStyled = styled.h4`
  font-size: 1.2rem;
  margin: 1rem 0;
`
const ProviderDescTopSubHeaderStyled = styled.p`
  font-size: .9rem;
  font-weight: 300;
  margin-bottom: 1rem;
`
const ProviderDescTopWrapperStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
`
const ProviderDescTopInputStyled = styled.input`
  width: 100%;
  padding: .8rem .4rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
  &::placeholder{
    color: #999;
  }
`
const ProviderDescTopTextAreaStyled = styled.textarea`
  width: 100%;
  height: auto;
  padding: .8rem .4rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
  &::placeholder{
    color: #999;
  }
`
const ProviderDesc = () => {
  const ratingOptions = {
    value: 5,
    size: 'medium'
  }
  return (
    <ProviderDescContainerStyled>
      <ProviderDescWrapperStyled>
        <ProviderDescHeaderWrapperStyled>
          <ProviderDescHeaderLeftWrapperStyled>
            <ProviderDescHeaderStyled>Những ưu điểm và nét độc đáo tại chỗ ở của bạn là gì?</ProviderDescHeaderStyled>
            <ProviderDescSubHeaderStyled>Mỗi căn phòng, mỗi ngôi nhà đều có những nét độc đáo riêng. Hãy giới thiệu các đặc điểm nổi bật tại nơi ở của bạn.</ProviderDescSubHeaderStyled>
          </ProviderDescHeaderLeftWrapperStyled>
          <ProviderDescHeaderRightImageStyled src={provider_ec_desc} />
        </ProviderDescHeaderWrapperStyled>
        <ProviderDescTopHeaderStyled>Đặt tên cho nhà</ProviderDescTopHeaderStyled>
        <ProviderDescTopSubHeaderStyled>Hãy tận dụng, và làm cho nó nghe có vẻ hấp dẫn. Đừng lo lắng, chúng tôi sẽ tạo các ngôn ngữ khác bằng mẫu dịch chuẩn.</ProviderDescTopSubHeaderStyled>
        <ProviderDescTopWrapperStyled>
          <ProviderDescTopInputStyled placeholder='Ví dụ: Romantic beach getaway, perfect for honeymooners'/>
        </ProviderDescTopWrapperStyled>
        <ProviderDescTopHeaderStyled>Mô tả nhà của bạn</ProviderDescTopHeaderStyled>
        <ProviderDescTopSubHeaderStyled>Những đặc điểm nổi bật của căn hộ để thu hút du khách.</ProviderDescTopSubHeaderStyled>
        <ProviderDescTopWrapperStyled>
          <ProviderDescTopTextAreaStyled rows={5} placeholder='Ví dụ:&#10;• Cách phương tiện công cộng 5 phút đi bộ &#10;• Phù hợp cho gia đình &#10;• Không gian thoáng đãng với tầm nhìn đẹp và tràn đây ánh sáng tự nhiên'/>
        </ProviderDescTopWrapperStyled>
        <ProviderDescTopHeaderStyled>Gợi ý vui chơi ăn uống tại địa phương (không bắt buộc)</ProviderDescTopHeaderStyled>
        <ProviderDescTopSubHeaderStyled>Có điểm tham quan du lịch, nhà hàng hay hoạt động vui chơi giải trí nào ở gần đây không?</ProviderDescTopSubHeaderStyled>
        <ProviderDescTopWrapperStyled>
          <ProviderDescTopTextAreaStyled rows={5} placeholder='Ví dụ:&#10;• 5 phút đi bộ đến điểm tham quan phổ biến&#10;• Cách quán ăn nổi tiếng 10 phút đi bộ&#10;• Chỉ 5 phút đi bộ đến quán bar nhộn nhịp'/>
        </ProviderDescTopWrapperStyled>
        <ProviderDescTopHeaderStyled>Quy tắc của chỗ nghỉ (tùy chọn)</ProviderDescTopHeaderStyled>
        <ProviderDescTopSubHeaderStyled>Báo trước cho du khách những quy định cụ thể trong nhà</ProviderDescTopSubHeaderStyled>
        <ProviderDescTopWrapperStyled>
          <ProviderDescTopTextAreaStyled rows={5} placeholder='Ví dụ:&#10;• Không tụ tập hay tổ chức tiệc tùng&#10;• Giữ yên lặng sau 11:00 PM&#10;• Không xả rác xuống đường ống'/>
        </ProviderDescTopWrapperStyled>
        <ProviderDescTopHeaderStyled>Khách có thể đến chỗ nghỉ bằng cách nào?</ProviderDescTopHeaderStyled>
        <ProviderDescTopSubHeaderStyled>Hãy giúp khách dễ dàng tìm được chỗ nghỉ và giảm khả năng hủy bỏ và các vấn đề vào ngày nhận phòng. Chúng tôi sẽ gửi những hướng dẫn này cho khách sau khi xác nhận đặt phòng cùng với địa chỉ của quý đối tác và đường dẫn đến bản đồ Google. Quý đối tác cũng</ProviderDescTopSubHeaderStyled>
        <ProviderDescTopWrapperStyled>
          <ProviderDescTopTextAreaStyled rows={5} placeholder='Ví dụ:&#10;• Đi tàu tuyến sân bay đến... (từ sân bay ra thành phố)&#10;• Chuyển tuyến tàu lửa hướng đi đến ga... (đi lại trong thành phố)&#10;• Vui lòng gửi tin nhắn cho tôi sau khi chuyển tàu (hướng dẫn cá nhân)'/>
        </ProviderDescTopWrapperStyled>
        <ProviderDescTopHeaderStyled>Xếp hạng sao</ProviderDescTopHeaderStyled>
        <ProviderDescTopSubHeaderStyled>Đánh giá để giúp khách hàng hình dung cụ thể hơn về nơi ở.</ProviderDescTopSubHeaderStyled>
        <ProviderDescTopWrapperStyled>
          <Rating {...ratingOptions}/>
        </ProviderDescTopWrapperStyled>
      </ProviderDescWrapperStyled>
    </ProviderDescContainerStyled>
  )
}

export default ProviderDesc