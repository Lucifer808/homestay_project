import React, { useEffect, useState, useMemo  } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { userGetAllAccommodation,selectUserAllAccommodation } from '../features/userSlice'
import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { AiOutlineEdit } from 'react-icons/ai';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { DataGrid, GridToolbar, gridClasses } from '@mui/x-data-grid';

const MyRoomListpageContainerStyled = styled.div``
const MyRoomListpageWrapperStyled = styled.div`
    padding: 1rem;
`
const AdminServicesBorderButtonEditStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .8rem;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid rgb(112, 88, 132);
  margin-right: .5rem;
  color: rgb(112, 88, 132);
  cursor: pointer;
  &:hover{
    background-color: rgb(112, 88, 132);
    border: 1px solid #fff;
    color: #fff;
  }
`
const AdminServicespageWrapperStyled = styled.div`
  padding: 1rem;
  background-color: #fff;
`
const AdminServicespageHeaderWrapperStyled = styled.div`
  margin: 1rem;
`
const AdminStatusWrapperStyled = styled.div`
  padding: .2rem .4rem;
  border-radius: .1rem;
  width: 8rem;
  text-align: center;
  color: ${props => props.status === "Đang chờ duyệt" ? "#000" : "#fff"};
  background-color: ${props => (props.status === "Đang chờ duyệt" && "rgb(236, 195, 58)") 
                   || (props.status === "Đang hoạt động" && "rgb(77, 155, 31)")
                   || (props.status === "Không hợp lệ" && "rgb(178, 35, 35)")
                   || (props.status === "Ngừng hoạt động" && "rgb(117, 113, 113)")};
`
const AdminAreaWrapperStyled = styled.span``
const AdminAreaRatingStyled = styled.span``
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #0055ff;
    &:focus, &:hover {
        text-decoration: underline;
    }
`;
const MyRoomListpage = () => {
  const dispatch = useDispatch();
  const selectUserGetAllAccommodation = useSelector(selectUserAllAccommodation);
  const [pageSize, setPageSize] = useState(10);
  const [rowId, setRowId] = useState(null);
  useEffect(() => {
    dispatch(userGetAllAccommodation())
  },[dispatch]);
  const columns = useMemo(
    () => [
        { 
          field: 'nameOfAccommodation',
          headerName: 'Cơ sở kinh doanh', 
          minWidth: 140, 
          flex: 1,
           
        },
        { 
          field: 'acrr_id', 
          headerName: 'Trạng thái', 
          minWidth: 200, 
          flex: 1,
          valueGetter: (params) => {
            if(params.value){
              return params.value.status;
            }else{
              return "";
            }
          },
          renderCell: (params) => <AdminStatusWrapperStyled status={params.value}>{params.value}</AdminStatusWrapperStyled>
        },
        { field: 'ac_propertyRegistrationId', headerName: 'Mã', minWidth: 120, flex: 1 },
        {
        field: 'area',
        headerName: 'Diện tích',
        minWidth: 120,
        flex: 1,
        renderCell: (params) => <AdminAreaWrapperStyled>{params.value} mét vuông</AdminAreaWrapperStyled>
        },
        {
          field: 'address',
          headerName: 'Địa chỉ',
          minWidth: 200,
          flex: 1,
        },
        {
        field: 'rating',
        headerName: 'Xếp hạng sao',
        minWidth: 120,
        flex: 1,
        renderCell: (params) =>
            <AdminAreaRatingStyled>{params.value} sao</AdminAreaRatingStyled>
        },
        {
          field: 'howToGetThere',
          headerName: 'Cách đến chỗ ở',
          minWidth: 160,
          flex: 1,
        },
        {
          field: 'priceBase',
          headerName: 'Giá mỗi đêm từ',
          minWidth: 160,
          flex: 1,
          renderCell: (params) =>
              <AdminAreaRatingStyled>{params.value?.toLocaleString()} VND</AdminAreaRatingStyled>
        },
        {
          field: 'paymentMethod',
          headerName: 'Phương thức thanh toán',
          minWidth: 180,
          flex: 1,
        },
        {
        field: 'actions',
        headerName: 'Hành động',
        minWidth: 220,
        type: 'actions',
        flex: 1,
        renderCell: (params) => {
            return(
                <>
                {/* <AdminServiceActions {...{ params, rowId, setRowId }}/> */}
                {/* onClick={() => openInPopup(params.row)} */}
                <AdminServicesBorderButtonEditStyled >
                  <AiOutlineEdit />
                </AdminServicesBorderButtonEditStyled>
              </>
            )
        }
        },
    ],
    );
  return (
    <MyRoomListpageContainerStyled>
        <MyRoomListpageWrapperStyled>
        <AdminServicespageHeaderWrapperStyled>
          <Typography variant='h5'>Danh sách chỗ nghỉ</Typography>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <StyledLink to="/admin">
                Trang chủ
              </StyledLink>
              <Typography color="text.disabled">Danh sách chỗ nghỉ</Typography>
            </Breadcrumbs>
          </div>
        </AdminServicespageHeaderWrapperStyled>
        <AdminServicespageWrapperStyled>
            <Box
                sx={{
                height: 600,
                width: '100%',
                }}
            >
                <DataGrid
                columns={columns}
                rows={selectUserGetAllAccommodation}
                getRowId={(row) => row.id}
                rowsPerPageOptions={[5, 10, 20]}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                getRowSpacing={(params) => ({
                    top: params.isFirstVisible ? 0 : 5,
                    bottom: params.isLastVisible ? 0 : 5,
                })}
                checkboxSelection
                onCellEditCommit={(params) => setRowId(params.id)}
                sx={{
                    [`& .${gridClasses.row}`]: {
                    bgcolor: (theme) =>
                        theme.palette.mode === 'light' ? grey[200] : grey[900],
                    },
                }}
                components={{
                  Toolbar: GridToolbar,
                }}
                componentsProps={{
                  toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 500 },
                  },
                }}
                />
            </Box>
        </AdminServicespageWrapperStyled>
        </MyRoomListpageWrapperStyled>
    </MyRoomListpageContainerStyled>
  )
}

export default MyRoomListpage