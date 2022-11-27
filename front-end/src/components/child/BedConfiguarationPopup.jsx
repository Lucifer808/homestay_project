import React, { useEffect } from 'react'
import styled from 'styled-components'
import { styled as muiStyled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProviderInfoBedConfig from '../layout/Provider/components/ProviderInfoBedConfig';
import { useDispatch, useSelector } from 'react-redux';
import { selectBedTypeList, getAllBedTypeList } from '../../features/userSlice';
import { numberPicker } from '../../dummyData';
const BedConfiguarationPopupContainerStyled = styled.div``
const MyRoompageRightContentInfoTitleStyled = styled.p`
    font-size: 1.2rem;
`
const BedConfiguarationPopupContentContainerStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
  margin: 1rem 0;
`
const ProviderInfoBottomContentSelectStyled = styled.select`
  width: 16rem;
  margin: 1rem;
  border: 1px solid #ccc;
  padding: .8rem;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`
const ProviderInfoBottomContentOptionStyled = styled.option``
const StyledTableCell = muiStyled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = muiStyled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
const BedConfiguarationPopup = () => {
    const dispatch = useDispatch();
    const selectBedTypeListData = useSelector(selectBedTypeList);
    const handleChangeInChild = (e) => {
      const { name, value } = e.target;
      const params = {
        [name]: value,
        // optionId: checkIsActive
      }
    }
    useEffect(() => {
      dispatch(getAllBedTypeList());
    },[dispatch])
    // const handleIncrease = () =>{
    //   dispatch(increaseBedConfig(checkIsActive));
    // }
    // const handleDecrease = () =>{
    //   dispatch(decreaseBedConfig(checkIsActive));
    // }
    // const handleRemove = () =>{
    //   dispatch(removeFromBedConfig(checkIsActive));
    // }
  return (
    <BedConfiguarationPopupContainerStyled>
        <MyRoompageRightContentInfoTitleStyled>Phòng ngủ 1</MyRoompageRightContentInfoTitleStyled>
        <BedConfiguarationPopupContentContainerStyled>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Giường</StyledTableCell>
                        <StyledTableCell align="center">Loại giường trong phòng</StyledTableCell>
                        <StyledTableCell align="center">Số giường</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row, index) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                Hình dạng {index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <ProviderInfoBottomContentSelectStyled name='ro_tb' onChange={handleChangeInChild}>
                                    {selectBedTypeListData && selectBedTypeListData.map(item => (
                                    <ProviderInfoBottomContentOptionStyled key={item.id} value={item.id}>{item.name}</ProviderInfoBottomContentOptionStyled>
                                    ))}
                                </ProviderInfoBottomContentSelectStyled>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <ProviderInfoBottomContentSelectStyled name='quantity' onChange={handleChangeInChild}>
                                    {numberPicker && numberPicker.map(item => (
                                    <ProviderInfoBottomContentOptionStyled key={item.value} value={item.value}>{item.value}</ProviderInfoBottomContentOptionStyled>
                                    ))}
                                </ProviderInfoBottomContentSelectStyled>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </BedConfiguarationPopupContentContainerStyled>
    </BedConfiguarationPopupContainerStyled>
  )
}

export default BedConfiguarationPopup