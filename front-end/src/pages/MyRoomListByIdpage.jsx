import React, { useEffect, useState, useMemo  } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { selectedAllTypeRoom, userGetAllTypeRoom } from '../features/userSlice'
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { AiOutlineEdit } from 'react-icons/ai';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { DataGrid, GridToolbar, gridClasses } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import { Toolbar } from '@material-ui/core';
import EditMyRoompage from './EditMyRoompage';
import Popup from '../components/admin/components/Popup';
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
  color: #fff;
  background-color: ${props => (props.status === true && "rgb(77, 155, 31)")
                   || (props.status === false && "rgb(117, 113, 113)")};
`
const AdminAreaWrapperStyled = styled.span``
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
`;
const AdminServicespageAddBtnWrapperStyled = styled.div`
  position: absolute;
  right: 0rem;
`
const AdminServicespageAddBtnStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .4rem 1.4rem;
  background-color: #fff;
  border: 1px solid #00b3ff;
  color: #00b3ff;
  border-radius: .2rem;
  cursor: pointer;
  &:hover{
    color: #fff;
    background-color: #00b3ff;
  }
`
const AdminServicespageAddBtnTitleStyled = styled.p`
  margin-right: .4rem;
`
const MyRoomListByIdpage = () => {
  const dispatch = useDispatch();
  const paramsSearch = useParams();
  const selectUserAllTypeRoomData = useSelector(selectedAllTypeRoom);
  const [pageSize, setPageSize] = useState(10);
  const [openPopup, setOpenPopup] = useState(false);
  const [rowId, setRowId] = useState(null);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const roomTypeId = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
  useEffect(() => {
    dispatch(userGetAllTypeRoom({propertyRegistrationId: paramsSearch.id}))
  },[dispatch]);
  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  }
  const columns = useMemo(
    () => [
        { 
          field: 'name',
          headerName: 'Tên phòng', 
          minWidth: 180, 
          flex: 1,
           
        },
        { 
          field: 'isActive', 
          headerName: 'Trạng thái', 
          minWidth: 200, 
          flex: 1,
          renderCell: (params) => <AdminStatusWrapperStyled status={params.value}>{params.value === true ? "Đang hoạt động" : "Ngừng hoạt động"}</AdminStatusWrapperStyled>
        },
        { field: 'tr_roomTypeId', headerName: 'Mã', minWidth: 120, flex: 1 },
        {
        field: 'area',
        headerName: 'Diện tích',
        minWidth: 120,
        flex: 1,
        valueGetter: (params) => {
        if(params.row){
            return params.row?.trro_id[0]?.area;
        }else{
            return "";
        }
        },
        renderCell: (params) => <AdminAreaWrapperStyled>{params.row?.trro_id[0]?.area} mét vuông</AdminAreaWrapperStyled>
        },
        {
          field: 'noOfAdult',
          headerName: 'Số người được phép ở phòng này',
          minWidth: 100,
          flex: 1,
          valueGetter: (params) => {
            if(params.row){
                return params.row?.trro_id[0]?.noOfAdult;
            }else{
                return "";
            }
            },
        },
        {
            field: 'numTypeOfRoom',
            headerName: 'Số lượng loại phòng này',
            minWidth: 100,
            flex: 1,
            valueGetter: (params) => {
              if(params.row){
                  return params.row?.trro_id[0]?.numTypeOfRoom;
              }else{
                  return "";
              }
              },
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
                  <AdminServicesBorderButtonEditStyled onClick={() => openInPopup(params.row)}>
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
          <Typography variant='h5'>Danh sách phòng</Typography>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <StyledLink to="/admin">
                Trang chủ
              </StyledLink>
              <Typography color="text.disabled">Danh sách phòng</Typography>
            </Breadcrumbs>
          </div>
        </AdminServicespageHeaderWrapperStyled>
        <AdminServicespageWrapperStyled>
        <Toolbar>
            <AdminServicespageAddBtnWrapperStyled>
                <StyledLink to={`/provider/myroom/${paramsSearch.id}?roomTypeId=${roomTypeId}`}>
                    <AdminServicespageAddBtnStyled>
                        <AdminServicespageAddBtnTitleStyled>
                        Thêm mới
                        </AdminServicespageAddBtnTitleStyled>
                        <AddIcon />
                    </AdminServicespageAddBtnStyled>
                </StyledLink>
            </AdminServicespageAddBtnWrapperStyled>
        </Toolbar>
            <Box
                sx={{
                height: 600,
                width: '100%',
                }}
            >
                <DataGrid
                columns={columns}
                rows={selectUserAllTypeRoomData}
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
        <Popup
            title="Cập nhật thông tin giường"
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

export default MyRoomListByIdpage