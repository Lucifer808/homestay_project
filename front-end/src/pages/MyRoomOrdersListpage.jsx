import React, { useEffect, useState, useMemo  } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { selectedMyAccommodationsOrers, userGetAllAccommodationOrder } from '../features/userSlice'
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { DataGrid, GridToolbar, gridClasses } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import EditMyRoompage from './EditMyRoompage';
import Popup from '../components/admin/components/Popup';
import { format } from 'date-fns'
const MyRoomListpageContainerStyled = styled.div``
const MyRoomListpageWrapperStyled = styled.div`
    padding: 1rem;
`
const AdminServicespageWrapperStyled = styled.div`
  padding: 1rem;
  background-color: #fff;
`
const AdminServicespageHeaderWrapperStyled = styled.div`
  margin: 1rem;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
`
const AdminAreaRatingStyled = styled.span``

const MyRoomOrdersListpage = () => {
  const dispatch = useDispatch();
  const paramsSearch = useParams();
  const selectedMyAccommodationsOrersData = useSelector(selectedMyAccommodationsOrers);
  const [pageSize, setPageSize] = useState(10);
  const [openPopup, setOpenPopup] = useState(false);
  const [rowId, setRowId] = useState(null);
  const [recordForEdit, setRecordForEdit] = useState(null);
  useEffect(() => {
    dispatch(userGetAllAccommodationOrder({propertyRegistrationId: paramsSearch.id}))
  },[dispatch]);
  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  }
  function NoRowsOverlay() {
    return (
      <Stack height="100%" alignItems="center" justifyContent="center">
        Không có dữ liệu
      </Stack>
    );
  }
  const columns = useMemo(
    () => [
        { 
          field: 'bed',
          headerName: 'Tên phòng', 
          minWidth: 180, 
          flex: 1,
           
        },
        { 
          field: 'createdAt', 
          headerName: 'Ngày đặt', 
          minWidth: 160, 
          flex: 1,
          valueFormatter: params => {
           return format(new Date(params?.value), "dd/MM/yyyy-hh:mm")}
        },
        { 
          field: 'checkIn', 
          headerName: 'Ngày nhận phòng', 
          minWidth: 160, 
          flex: 1,
          valueFormatter: params => {
           return format(new Date(params?.value), "dd/MM/yyyy-hh:mm")}
        },
        { 
          field: 'checkOut', 
          headerName: 'Ngày trả phòng', 
          minWidth: 160, 
          flex: 1,
          valueFormatter: params => {
           return format(new Date(params?.value), "dd/MM/yyyy-hh:mm")}
        },
        {
        field: 'numOfDays',
        headerName: 'Số ngày ở',
        minWidth: 100,
        flex: 1,
        },
        {
        field: 'numOfRooms',
        headerName: 'Số lượng phòng',
        minWidth: 100,
        flex: 1,
        },
        {
        field: 'total',
        headerName: 'Tổng tiền',
        minWidth: 120,
        flex: 1,
        renderCell: (params) =>
            <AdminAreaRatingStyled>{params.value.toLocaleString()} VND</AdminAreaRatingStyled>
        }
    ],
    []);
  return (
    <MyRoomListpageContainerStyled>
        <MyRoomListpageWrapperStyled>
        <AdminServicespageHeaderWrapperStyled>
          <Typography variant='h5'>Danh sách đơn đặt phòng</Typography>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <StyledLink to="/admin">
                Trang chủ
              </StyledLink>
              <Typography color="text.disabled">Danh sách đơn đặt phòng</Typography>
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
                rows={selectedMyAccommodationsOrersData}
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
                  NoRowsOverlay
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
        <Popup
            title="Thêm dịch vụ"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            onClose={() => setOpenPopup(false)} 
            maxWidth="md"
        >
                <EditMyRoompage
                    recordForEdit={recordForEdit}
                />
        </Popup>
    </MyRoomListpageContainerStyled>
  )
}

export default MyRoomOrdersListpage