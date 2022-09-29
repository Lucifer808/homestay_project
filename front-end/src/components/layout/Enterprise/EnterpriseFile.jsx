import React from 'react';
import styled from 'styled-components';
const EnterpriseFileContainerStyled = styled.div``
const EnterpriseFileWrapperStyled = styled.div``
const EnterpriseFileHeaderWrapperStyled = styled.div`
  margin-bottom: 4rem;
`
const EnterpriseFileHeaderStyled = styled.h2``
const EnterpriseFileSubHeaderStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin: 1rem 0;
`
const EnterpriseFileTopHeaderStyled = styled.h4`
  font-size: 1.2rem;
  margin: 1rem 0;
`
const EnterpriseFileTopWrapperStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
`
const EnterpriseFileBottomInputHalfLocationContainerStyled = styled.div``
const EnterpriseFileBottomInputHalfContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const EnterpriseFileBottomInputHalfWrapperStyled = styled.div`
  &:nth-child(2), :nth-child(3){
    margin-left: 4rem;
  }
`
const EnterpriseFileBottomSelectHalfStyled = styled.select`
  width: 15rem;
  padding: .7rem 1rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`
const EnterpriseFileBottomInputHalfStyled = styled.input`
  width: 15rem;
  padding: .7rem 1rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`
// const EnterpriseFileBottomOptionHalfStyled = styled.option``
const EnterpriseFileBottomTitleStyled = styled.p`
  font-size: .9rem;
  font-weight: 500;
  margin: .8rem 0;
`
const EnterpriseFileBottomInputFullContainerStyled = styled.div``
const EnterpriseFileBottomInputFullStyled = styled.input`
  width: 15rem;
  padding: .7rem 1rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`
const EnterpriseFileBottomEmailAuthButtonStyled = styled.button`
  margin-left: 1rem;
  padding: .6rem 1rem;
  color: #1174a6;
  background-color: #fff;
  border: 1px solid #1174a6;
  cursor: pointer;
  border-radius: .2rem;
  &:hover{
    color: #1174a6;
    background-color: #e6e6e6;
    border: 1px solid #1174a6;
  }
`
const EnterpriseFileBottomInputAddressFullStyled = styled.input`
  width: 34rem;
  padding: .7rem 1rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`
const EnterpriseFileTopSubHeaderStyled = styled.p`
  font-size: .9rem;
  font-weight: 300;
  margin: 1rem 0;
`
const EnterpriseFileTopChoiceWrapperStyled = styled.div`
  display: flex;
  margin: 1rem 0;
`
const EnterpriseFileTopChoiceStyled = styled.input`
  margin-bottom: auto;
  margin-top: .1rem;
  cursor: pointer;
`
const EnterpriseFileTopChoiceTitleWrapperStyled = styled.div`
  margin-left: .4rem;
`
const EnterpriseFileTopChoiceTitleStyled = styled.p`
  font-size: .9rem;
  font-weight: 600;
`
const EnterpriseFileTopChoiceSubTitleStyled = styled.span`
  font-size: .9rem;
  font-weight: 300;
`
const EnterpriseFile = () => {
  return (
    <EnterpriseFileContainerStyled>
      <EnterpriseFileWrapperStyled>
        <EnterpriseFileHeaderWrapperStyled>
          <EnterpriseFileHeaderStyled>Chi tiết tài khoản</EnterpriseFileHeaderStyled>
          <EnterpriseFileSubHeaderStyled>Vui lòng cung cấp đầy đủ họ tên pháp lý chính thức để lập hợp đồng với Agoda. Chúng tôi sẽ liên hệ với bạn nếu cần có thêm các thông tin khác.</EnterpriseFileSubHeaderStyled>
        </EnterpriseFileHeaderWrapperStyled>
        <EnterpriseFileTopHeaderStyled>Họ tên</EnterpriseFileTopHeaderStyled>
        <EnterpriseFileTopWrapperStyled>
          <EnterpriseFileBottomInputHalfLocationContainerStyled>
            <EnterpriseFileBottomInputHalfContainerStyled>
              <EnterpriseFileBottomInputHalfWrapperStyled>
                <EnterpriseFileBottomTitleStyled>Tên</EnterpriseFileBottomTitleStyled>
                <EnterpriseFileBottomInputHalfStyled placeholder='Duy'/>
              </EnterpriseFileBottomInputHalfWrapperStyled>
              <EnterpriseFileBottomInputHalfWrapperStyled>
                <EnterpriseFileBottomTitleStyled>Họ</EnterpriseFileBottomTitleStyled>
                <EnterpriseFileBottomInputHalfStyled placeholder='Nguyen'/>
              </EnterpriseFileBottomInputHalfWrapperStyled>
            </EnterpriseFileBottomInputHalfContainerStyled>
            <EnterpriseFileBottomInputFullContainerStyled>
              <EnterpriseFileBottomTitleStyled>Tên hiển thị (không bắt buộc)</EnterpriseFileBottomTitleStyled>
              <EnterpriseFileBottomInputFullStyled placeholder='Duy Nguyen' />
            </EnterpriseFileBottomInputFullContainerStyled>
          </EnterpriseFileBottomInputHalfLocationContainerStyled>
        </EnterpriseFileTopWrapperStyled>
        <EnterpriseFileTopHeaderStyled>Chi tiết liên lạc</EnterpriseFileTopHeaderStyled>
        <EnterpriseFileTopWrapperStyled>
          <EnterpriseFileBottomInputHalfLocationContainerStyled>
            <EnterpriseFileBottomInputHalfContainerStyled>
              <EnterpriseFileBottomInputHalfWrapperStyled>
                <EnterpriseFileBottomTitleStyled>Quốc gia</EnterpriseFileBottomTitleStyled>
                <EnterpriseFileBottomSelectHalfStyled />
              </EnterpriseFileBottomInputHalfWrapperStyled>
              <EnterpriseFileBottomInputHalfWrapperStyled>
                <EnterpriseFileBottomTitleStyled>Số điện thoại</EnterpriseFileBottomTitleStyled>
                <EnterpriseFileBottomInputHalfStyled />
              </EnterpriseFileBottomInputHalfWrapperStyled>
            </EnterpriseFileBottomInputHalfContainerStyled>
            <EnterpriseFileBottomInputFullContainerStyled>
              <EnterpriseFileBottomTitleStyled>Email</EnterpriseFileBottomTitleStyled>
              <EnterpriseFileBottomInputFullStyled placeholder='autochess1235@gmail.com' />
              <EnterpriseFileBottomEmailAuthButtonStyled>Xác thực email</EnterpriseFileBottomEmailAuthButtonStyled>
            </EnterpriseFileBottomInputFullContainerStyled>
          </EnterpriseFileBottomInputHalfLocationContainerStyled>
        </EnterpriseFileTopWrapperStyled>
        <EnterpriseFileTopHeaderStyled>Địa chỉ</EnterpriseFileTopHeaderStyled>
        <EnterpriseFileTopWrapperStyled>
          <EnterpriseFileBottomInputHalfLocationContainerStyled>
            <EnterpriseFileBottomInputHalfContainerStyled>
              <EnterpriseFileBottomInputHalfWrapperStyled>
                <EnterpriseFileBottomTitleStyled>Quốc gia</EnterpriseFileBottomTitleStyled>
                <EnterpriseFileBottomSelectHalfStyled />
              </EnterpriseFileBottomInputHalfWrapperStyled>
              <EnterpriseFileBottomInputHalfWrapperStyled>
                <EnterpriseFileBottomTitleStyled>Thành phố</EnterpriseFileBottomTitleStyled>
                <EnterpriseFileBottomSelectHalfStyled />
              </EnterpriseFileBottomInputHalfWrapperStyled>
              <EnterpriseFileBottomInputHalfWrapperStyled>
                <EnterpriseFileBottomTitleStyled>Tỉnh</EnterpriseFileBottomTitleStyled>
                <EnterpriseFileBottomSelectHalfStyled />
              </EnterpriseFileBottomInputHalfWrapperStyled>
            </EnterpriseFileBottomInputHalfContainerStyled>
          </EnterpriseFileBottomInputHalfLocationContainerStyled>
          <EnterpriseFileBottomInputHalfLocationContainerStyled>
            <EnterpriseFileBottomInputHalfContainerStyled>
              <EnterpriseFileBottomInputHalfWrapperStyled>
                <EnterpriseFileBottomTitleStyled>Địa chỉ chính (nơi quý đối tác ở ít nhất 8 tháng của năm)</EnterpriseFileBottomTitleStyled>
                <EnterpriseFileBottomInputAddressFullStyled />
              </EnterpriseFileBottomInputHalfWrapperStyled>
              <EnterpriseFileBottomInputHalfWrapperStyled>
                <EnterpriseFileBottomTitleStyled>Mã vùng</EnterpriseFileBottomTitleStyled>
                <EnterpriseFileBottomInputHalfStyled />
              </EnterpriseFileBottomInputHalfWrapperStyled>
            </EnterpriseFileBottomInputHalfContainerStyled>
          </EnterpriseFileBottomInputHalfLocationContainerStyled>
          <EnterpriseFileBottomInputHalfLocationContainerStyled>
            <EnterpriseFileBottomInputHalfContainerStyled>
              <EnterpriseFileBottomInputHalfWrapperStyled>
                <EnterpriseFileBottomTitleStyled>Quốc tịch</EnterpriseFileBottomTitleStyled>
                <EnterpriseFileBottomSelectHalfStyled />
              </EnterpriseFileBottomInputHalfWrapperStyled>
            </EnterpriseFileBottomInputHalfContainerStyled>
          </EnterpriseFileBottomInputHalfLocationContainerStyled>
        </EnterpriseFileTopWrapperStyled>
        <EnterpriseFileTopHeaderStyled>Mô tả nhà của bạn</EnterpriseFileTopHeaderStyled>
        <EnterpriseFileTopSubHeaderStyled>Vui lòng chọn phương thức chi tiền ưa thích của quý đối tác. Thông tin thêm có thể được yêu cầu một khi được xuất bản trên Agoda.</EnterpriseFileTopSubHeaderStyled>
        <EnterpriseFileTopWrapperStyled>
          <EnterpriseFileTopChoiceWrapperStyled>
            <EnterpriseFileTopChoiceStyled type="radio" />
            <EnterpriseFileTopChoiceTitleWrapperStyled>
              <EnterpriseFileTopChoiceTitleStyled>UPC</EnterpriseFileTopChoiceTitleStyled>
              <EnterpriseFileTopChoiceSubTitleStyled>Thẻ Tín Dụng Ảo do Agoda tạo ra, quý đối tác sẽ có thể dễ dàng lấy số Thẻ Thanh toán Đặc biệt thông qua mạng diện rộng Agoda (YCS) với từng đơn đặt phòng riêng.</EnterpriseFileTopChoiceSubTitleStyled>
            </EnterpriseFileTopChoiceTitleWrapperStyled>
          </EnterpriseFileTopChoiceWrapperStyled>
          <EnterpriseFileTopChoiceWrapperStyled>
            <EnterpriseFileTopChoiceStyled type="radio" />
            <EnterpriseFileTopChoiceTitleWrapperStyled>
              <EnterpriseFileTopChoiceTitleStyled>Upc trên Epass</EnterpriseFileTopChoiceTitleStyled>
              <EnterpriseFileTopChoiceSubTitleStyled>Tự quản lý các giao dịch đặt phòng bằng cách thu tiền một lần cho nhiều đơn đặt phòng, không cần tính tiền VCC cho từng đơn đặt phòng riêng rẽ.</EnterpriseFileTopChoiceSubTitleStyled>
            </EnterpriseFileTopChoiceTitleWrapperStyled>
          </EnterpriseFileTopChoiceWrapperStyled>
          <EnterpriseFileTopChoiceWrapperStyled>
            <EnterpriseFileTopChoiceStyled type="radio" />
            <EnterpriseFileTopChoiceTitleWrapperStyled>
              <EnterpriseFileTopChoiceTitleStyled>Thẻ điện tử</EnterpriseFileTopChoiceTitleStyled>
              <EnterpriseFileTopChoiceSubTitleStyled>Thẻ hữu hình có chip. Tự quản lý các giao dịch đặt phòng bằng cách thu tiền một lần cho nhiều đơn đặt phòng, không cần tính tiền VCC cho từng đơn đặt phòng riêng rẽ.</EnterpriseFileTopChoiceSubTitleStyled>
            </EnterpriseFileTopChoiceTitleWrapperStyled>
          </EnterpriseFileTopChoiceWrapperStyled>
          <EnterpriseFileTopChoiceWrapperStyled>
            <EnterpriseFileTopChoiceStyled type="radio" />
            <EnterpriseFileTopChoiceTitleWrapperStyled>
              <EnterpriseFileTopChoiceTitleStyled>Tiền gửi trực tiếp vào ngân hàng</EnterpriseFileTopChoiceTitleStyled>
              <EnterpriseFileTopChoiceSubTitleStyled>Chúng tôi sẽ gửi tiền thanh toán trực tiếp vào tài khoản ngân hàng của quý đối tác sau khi khách hàng rời đi, ghi có trong 30 ngày.</EnterpriseFileTopChoiceSubTitleStyled>
            </EnterpriseFileTopChoiceTitleWrapperStyled>
          </EnterpriseFileTopChoiceWrapperStyled>
        </EnterpriseFileTopWrapperStyled>
      </EnterpriseFileWrapperStyled>
    </EnterpriseFileContainerStyled>
  )
}

export default EnterpriseFile