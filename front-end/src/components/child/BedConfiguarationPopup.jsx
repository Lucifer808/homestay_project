import React, { useEffect, useState } from 'react'
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
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { 
  selectBedTypeList, 
  getAllBedTypeList, 
  selectedBedDetailConfigurations, 
  addDetailBedConfig, 
  removeFromDetailBedConfig, 
  changeNoOfDetailBedConfig,
  addDetailBedConfigSeccond,
  changeNoOfDetailBedConfigSeccond,
  removeFromDetailBedConfigSeccond,} from '../../features/userSlice';
import { numberPicker } from '../../dummyData';
import { useParams, useSearchParams } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti'

const BedConfiguarationPopupContainerStyled = styled.div``
const MyRoompageRightContentInfoTitleStyled = styled.p`
    font-size: 1.2rem;
    margin-top: 1rem;
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
const ProviderInfoBottomAddStyled = styled.button`
  cursor: pointer;
  color: #1174a6;
  background-color: transparent;
  border: 1px solid #1174a6;
  padding: .6rem .3rem;
  border-radius: .1rem;
`
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


const BedConfiguarationPopup = (props) => {
    const dispatch = useDispatch();
    const { setOpenPopup } = props;
    const selectBedTypeListData = useSelector(selectBedTypeList);
    const selectedBedDetailConfigurationsData = useSelector(selectedBedDetailConfigurations);
    const [addOptions, setAddOptions] = useState(1);
    const [addOptionsSeccond, setAddOptionsSeccond] = useState(1);
    const params = useParams();
    const [searchParams] = useSearchParams();
    const roomTypeId = searchParams.get('roomtypeid');
    useEffect(() => {
      dispatch(getAllBedTypeList());
    },[dispatch])
    const handleChangeBedConfig = (e, itemIndex) =>{
      const { name, value } = e.target;
      const params = {
        [name]: value,
        nameOfBed: e.target.options[e.target.selectedIndex].text,
        optionId: itemIndex
      }
      dispatch(addDetailBedConfig(params))
    }
    const handleChangeNoOfBedConfig = (e, itemIndex) =>{
      const { name, value } = e.target;
      const params = {
        [name]: parseInt(value),
        nameOfBed: e.target.options[e.target.selectedIndex].text,
        optionId: itemIndex
      };
      dispatch(changeNoOfDetailBedConfig(params));
    }
    const handleRemove = (itemIndex) =>{
      dispatch(removeFromDetailBedConfig(itemIndex));
    }
    const autoInsertData = () => {
      const tempItem = {
        ro_tb: "1",
        noOfBed: 1,
        nameOfBed: "Giường đơn",
        optionId: addOptions,
        tbr_roomTypeId: roomTypeId
      };
      dispatch(addDetailBedConfig(tempItem));
    }
    const handleChangeBedConfigSeccond = (e, itemIndex) =>{
      const { name, value } = e.target;
      const params = {
        [name]: value,
        nameOfBed: e.target.options[e.target.selectedIndex].text,
        optionId: itemIndex
      };
      dispatch(addDetailBedConfigSeccond(params))
    }
    const handleChangeNoOfBedConfigSeccond = (e, itemIndex) =>{
      const { name, value } = e.target;
      const params = {
        [name]: parseInt(value),
        nameOfBed: e.target.options[e.target.selectedIndex].text,
        optionId: itemIndex
      }
      dispatch(changeNoOfDetailBedConfigSeccond(params));
    }
    const handleRemoveSeccond = (itemIndex) =>{
      dispatch(removeFromDetailBedConfigSeccond(itemIndex));
    }
    const autoInsertDataSeccond = () => {
      const tempItem = {
        ro_tb: "1",
        noOfBed: 1,
        nameOfBed: "Giường đơn",
        optionId: addOptionsSeccond,
        tbr_roomTypeId: roomTypeId
      }
      dispatch(addDetailBedConfigSeccond(tempItem));
    }
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
                    {selectedBedDetailConfigurationsData && selectedBedDetailConfigurationsData.firstRoom.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                Hình dạng {index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <ProviderInfoBottomContentSelectStyled name='ro_tb' onChange={(e) => handleChangeBedConfig(e, row.optionId)}>
                                    {selectBedTypeListData && selectBedTypeListData.map(item => (
                                    <ProviderInfoBottomContentOptionStyled key={item.id} value={item.id}>{item.name}</ProviderInfoBottomContentOptionStyled>
                                    ))}
                                </ProviderInfoBottomContentSelectStyled>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <ProviderInfoBottomContentSelectStyled name='noOfBed' onChange={(e) => handleChangeNoOfBedConfig(e, row.optionId)}>
                                    {numberPicker && numberPicker.map(item => (
                                    <ProviderInfoBottomContentOptionStyled key={item.value} value={item.value}>{item.value}</ProviderInfoBottomContentOptionStyled>
                                    ))}
                                </ProviderInfoBottomContentSelectStyled>
                                {selectedBedDetailConfigurationsData.firstRoom.length > 1 && 
                                  <TiDelete style={{cursor: 'pointer'}} onClick={() => handleRemove(row.optionId)}/>
                                }
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </BedConfiguarationPopupContentContainerStyled>
        <ProviderInfoBottomAddStyled type='button' onClick={() => { setAddOptions(addOptions + 1); autoInsertData(); }}>THÊM LOẠI GIƯỜNG KHÁC</ProviderInfoBottomAddStyled>
        <MyRoompageRightContentInfoTitleStyled>Phòng ngủ 2</MyRoompageRightContentInfoTitleStyled>
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
                    {selectedBedDetailConfigurationsData && selectedBedDetailConfigurationsData.seccondRoom.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                Hình dạng {index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <ProviderInfoBottomContentSelectStyled name='ro_tb' onChange={(e) => handleChangeBedConfigSeccond(e, row.optionId)}>
                                    {selectBedTypeListData && selectBedTypeListData.map(item => (
                                    <ProviderInfoBottomContentOptionStyled key={item.id} value={item.id}>{item.name}</ProviderInfoBottomContentOptionStyled>
                                    ))}
                                </ProviderInfoBottomContentSelectStyled>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <ProviderInfoBottomContentSelectStyled name='noOfBed' onChange={(e) => handleChangeNoOfBedConfigSeccond(e, row.optionId)}>
                                    {numberPicker && numberPicker.map(item => (
                                    <ProviderInfoBottomContentOptionStyled key={item.value} value={item.value}>{item.value}</ProviderInfoBottomContentOptionStyled>
                                    ))}
                                </ProviderInfoBottomContentSelectStyled>
                                {selectedBedDetailConfigurationsData.seccondRoom.length > 1 && 
                                  <TiDelete style={{cursor: 'pointer'}} onClick={() => handleRemoveSeccond(row.optionId)}/>
                                }
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </BedConfiguarationPopupContentContainerStyled>
          <ProviderInfoBottomAddStyled type='button' onClick={() => { setAddOptionsSeccond(addOptionsSeccond + 1); autoInsertDataSeccond(); }}>THÊM LOẠI GIƯỜNG KHÁC</ProviderInfoBottomAddStyled>
          <DialogActions>
            <Button variant="outlined" onClick={() => setOpenPopup(false)}>
              Lưu
            </Button>
          </DialogActions>
    </BedConfiguarationPopupContainerStyled>
  )
}

export default BedConfiguarationPopup