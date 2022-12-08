import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { DataGrid, GridToolbar, gridClasses } from '@mui/x-data-grid';
import { getAllTypeOfService,
         selectTypeOfServices, 
         selectIsLoading, 
         selectSuccess, 
         createTypeOfServicesReset, 
         updateTypeOfService, 
         createTypeOfService,
         deleteTypeOfService } from '../../../features/adminSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import AdminActions from '../AdminActions';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Toolbar } from '@material-ui/core';
import Popup from '../components/Popup';
import AdminTypeOfServicesForm from '../child/AdminTypeOfServicesForm';
import Loader from '../../child/Loader';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ConfirmDialog from '../components/ConfirmDialog';
const AdminServicespageContainerStyled = styled.div`
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
const AdminServicespageWrapperStyled = styled.div`
  padding: 1rem;
  background-color: #fff;
`
const AdminServicespageHeaderWrapperStyled = styled.div`
  margin: 1rem 0;
`
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
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #0055ff;
    &:focus, &:hover {
        text-decoration: underline;
    }
`;
const AdminTypeOfServicespage = () => {
  const dispatch = useDispatch();
  const selectTypeOfServicesData = useSelector(selectTypeOfServices);
  const selectIsLoadingData = useSelector(selectIsLoading);
  const selectSuccessData = useSelector(selectSuccess);
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [rowId, setRowId] = useState(null);
  useEffect(() =>{
    dispatch(getAllTypeOfService());
    if(selectSuccessData){
      dispatch(createTypeOfServicesReset());
      setOpenPopup(false);
    }
  },[dispatch, selectSuccessData]);

  const addOrEdit = (item, resetForm) => {
    if (item.id){
      dispatch(updateTypeOfService(item));
    }
    else{
      dispatch(createTypeOfService(item));
    }
    resetForm()
    setRecordForEdit(null)
    setOpenPopup(false)
  }

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  }
  const onDelete = id => {
    setConfirmDialog({
        ...confirmDialog,
        isOpen: false
    })
    dispatch(deleteTypeOfService(id));
  }
  const columns = useMemo(
    () => [
        { field: 'id', headerName: 'Mã', minWidth: 20, flex: 1 },
        { field: 'name', headerName: 'Tên', minWidth: 200, flex: 1 },
        { field: 'desc', headerName: 'Mô tả', minWidth: 300, flex: 1 },
        {
        field: 'active',
        headerName: 'Hiện hành',
        minWidth: 120,
        editable: true,
        flex: 1,
        type: "boolean"
        },
        {
        field: 'createdAt',
        headerName: 'Ngày thêm',
        minWidth: 200,
        flex: 1,
        renderCell: (params) =>
            moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
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
                <AdminActions {...{ params, rowId, setRowId }}/>
                <AdminServicesBorderButtonEditStyled onClick={() => openInPopup(params.row)}>
                  <AiOutlineEdit />
                </AdminServicesBorderButtonEditStyled>
                <AdminServicesBorderButtonDeleteStyled 
                  onClick={() => {
                    setConfirmDialog({
                        isOpen: true,
                        title: 'Bạn có chắc chắn muốn xóa?',
                        subTitle: "Sau khi xóa bạn sẽ không thễ khôi phục",
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
    [rowId]
    );
  return (
    <>
    { selectIsLoadingData ? <Loader /> : 
      <AdminServicespageContainerStyled>
        <AdminServicespageHeaderWrapperStyled>
          <Typography variant='h5'>Danh sách loại dịch vụ</Typography>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <StyledLink to="/admin">
                Trang chủ
              </StyledLink>
              <Typography color="text.disabled">Danh sách loại dịch vụ</Typography>
            </Breadcrumbs>
          </div>
        </AdminServicespageHeaderWrapperStyled>
        <AdminServicespageWrapperStyled>
        <Toolbar>
            <AdminServicespageAddBtnWrapperStyled>
              <AdminServicespageAddBtnStyled  onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}>
                <AdminServicespageAddBtnTitleStyled>
                  Thêm mới
                </AdminServicespageAddBtnTitleStyled>
                <AddIcon />
              </AdminServicespageAddBtnStyled>
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
                rows={selectTypeOfServicesData}
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
                    }
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
        <Popup
            title="Loại dịch vụ"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            onClose={() => setOpenPopup(false)}
            maxWidth = "sm"
        >
                <AdminTypeOfServicesForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} 
                />
        </Popup>
        <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
    </AdminServicespageContainerStyled>
    }
    </>
  )
}

export default AdminTypeOfServicespage