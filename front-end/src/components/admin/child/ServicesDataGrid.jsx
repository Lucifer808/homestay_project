import React, { useState, useMemo } from 'react'
import { useSelector } from 'react-redux';
import { selectRetal } from '../../../features/adminSlice';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import moment from 'moment';
import { Box } from '@mui/material';
import AdminActions from '../AdminActions';
import { grey } from '@mui/material/colors';
const RentalDataGrid = () => {
  const row = [];
  const selectRetalData = useSelector(selectRetal);
  const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);
  selectRetalData && selectRetalData.rental.map((item) => {
    row.push({
      id: item.id,
      email: item.rr_userId?.email,
      name: item.rr_userId?.userName,
      status: item.name,
      role: item.rr_userId?.uuid?.name,
    })
  });
    const columns = useMemo(
    () => [
        { field: 'id', headerName: 'Id', width: 60 },
        { field: 'name', headerName: 'Tên', width: 170 },
        { field: 'email', headerName: 'Email', width: 200 },
        {
        field: 'role',
        headerName: 'Quyền',
        width: 100,
        type: 'singleSelect',
        valueOptions: ['user', 'enterprise', 'admin'],
        editable: true,
        },
        {
        field: 'status',
        headerName: 'Trạng thái',
        width: 120,
        editable: true,
        },
        {
        field: 'createdAt',
        headerName: 'Ngày đăng ký',
        width: 200,
        renderCell: (params) =>
            moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
        },
        {
        field: 'actions',
        headerName: 'Lưu',
        type: 'actions',
        renderCell: (params) => {
            return(
                <AdminActions {...{ params, rowId, setRowId }} />
            )
        }
        },
    ],
    [rowId]
    );
  return (
    <Box
        sx={{
        height: 400,
        width: '100%',
        }}
    >
        <DataGrid
        columns={columns}
        rows={row}
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
        />
    </Box>
  )
}

export default RentalDataGrid