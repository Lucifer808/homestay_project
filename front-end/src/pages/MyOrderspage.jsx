import React, { useEffect, useState, useMemo  } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { selectedAllMyOrders, userGetAllOrder } from '../features/userSlice'
import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { DataGrid, GridToolbar, gridClasses } from '@mui/x-data-grid';
import {format} from 'date-fns'
import ConfirmDialog from '../components/admin/components/ConfirmDialog';
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
const AdminAreaRatingStyled = styled.span``
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #0055ff;
    &:focus, &:hover {
        text-decoration: underline;
    }
`;
const AdminServicesBorderButtonDeleteStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .8rem;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid rgb(255, 0, 0);
  margin-right: .5rem;
  color: rgb(255, 0, 0);
  cursor: pointer;
  &:hover{
    background-color: rgb(255, 0, 0);
    border: 1px solid #fff;
    color: #fff;
  }
`
const MyOrderspage = () => {
    const dispatch = useDispatch();
    const selectedAllMyOrdersData = useSelector(selectedAllMyOrders);
    const [pageSize, setPageSize] = useState(10);
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
    const [rowId, setRowId] = useState(null);
    const onDelete = id => {
      setConfirmDialog({
          ...confirmDialog,
          isOpen: false
      })
      console.log(id)
    }
    useEffect(() => {
      dispatch(userGetAllOrder())
    },[dispatch]);
    const columns = useMemo(
      () => [
          { 
            field: 'nameOfAccomodations',
            headerName: 'Tên chỗ ở', 
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
            field: 'bed',
            headerName: 'Loại phòng',
            minWidth: 140,
            flex: 1,
            },
          {
          field: 'total',
          headerName: 'Tổng tiền',
          minWidth: 120,
          flex: 1,
          renderCell: (params) =>
              <AdminAreaRatingStyled>{params.value.toLocaleString()} VND</AdminAreaRatingStyled>
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
                  <AdminServicesBorderButtonDeleteStyled 
                    onClick={() => {
                      setConfirmDialog({
                          isOpen: true,
                          title: 'Bạn có chắc chắn muốn hủy đơn đặt phòng?',
                          subTitle: "Sau khi hủy bạn sẽ không thễ khôi phục",
                          onConfirm: () => {onDelete(params.getValue(params.id, "id"))}
                      })
                    }}>
                    <AiOutlineDelete />
                  </AdminServicesBorderButtonDeleteStyled>
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
                  rows={selectedAllMyOrdersData}
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
          <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
      </MyRoomListpageContainerStyled>
    )
}

export default MyOrderspage