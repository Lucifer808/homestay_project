import React, { useEffect, useState } from 'react'
import Controls from "../components/Controls";
import { useForm, Form } from './useForm';
import styled from 'styled-components';
import { getAllImageById, selectImagesById } from '../../../features/adminSlice';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { rentalRegistrationsData } from '../../../dummyData';
import { Typography } from '@mui/material';
import {
    FormControl,
    InputLabel,
    Select as MuiSelect,
    MenuItem,
  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    menuPaper: {
      maxHeight: 300,
    },
  }));
const PopupContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
`
const PopupLeftContainerStyled = styled.div`
    width: 50%;
`
const PopupRightContainerStyled = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ButtonWWrapperStyled = styled.div`
    text-align: right;
`
const AdminAccommodationsFormImagesWrapperStyled = styled.div`
    max-width: 100%;
`
const AdminAccommodationsFormImagesStyled = styled.img`
  width: 7rem;
  height: 4rem;
  margin: .4rem;
`
const initialFValues = {
    latitude: 0,
    longtitude: 0,
    status: " "
}

export default function AdminAccommodationForm(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selectImagesAccommodationData = useSelector(selectImagesById);
    const [openChildPopup, setOpenChildPopup] = useState(false);
    const { addOrEdit, recordForEdit } = props;
    const {
        values,
        setValues,
        handleInputChange,
        resetForm
    } = useForm(initialFValues);
    const handleSubmit = e => {
        e.preventDefault();
        addOrEdit(values, resetForm, openChildPopup);
    }

    useEffect(() => {
        dispatch(getAllImageById({ac_propertyRegistrationId: recordForEdit.ac_propertyRegistrationId}))
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit, dispatch, recordForEdit.ac_propertyRegistrationId]);
    return (
        <Form onSubmit={handleSubmit}>
            <PopupContainerStyled>
                <PopupLeftContainerStyled>
                    <FormControl disabled variant="standard">
                        <TextField
                            id="standard-read-only-input"
                            label="Mã"
                            value={recordForEdit.ac_propertyRegistrationId || ''}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard"
                        />
                    </FormControl>
                    <FormControl disabled variant="standard">
                        <TextField
                            id="standard-read-only-input"
                            label="Cơ sở kinh doanh"
                            value={recordForEdit.nameOfAccommodation || ''}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard"
                        />
                    </FormControl>
                    <FormControl disabled variant="standard">
                        <TextField
                            id="standard-read-only-input"
                            label="Mô tả"
                            value={recordForEdit.desc || ' '}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard"
                            multiline
                            minRows={6}
                            maxRows={10}
                        />
                    </FormControl>
                    <FormControl disabled variant="standard">
                        <TextField
                            id="standard-read-only-input"
                            label="Địa chỉ"
                            value={recordForEdit.address || ''}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard"
                        />
                    </FormControl>
                    <Typography variant='span' sx={{display: "block", paddingLeft: "18px", fontSize: "14px", color: "#777"}}> Hình ảnh </Typography>
                    <AdminAccommodationsFormImagesWrapperStyled>
                        {selectImagesAccommodationData && selectImagesAccommodationData.map(item => (
                            <AdminAccommodationsFormImagesStyled key={item.id} src={`${process.env.REACT_APP_BACK_END_PUBLIC_URL + item.path}`}/>
                        ))}
                    </AdminAccommodationsFormImagesWrapperStyled>
                </PopupLeftContainerStyled>
                <PopupRightContainerStyled>
                    <FormControl disabled variant="standard">
                        <TextField
                            id="standard-read-only-input"
                            label="Cách đến chỗ nghỉ"
                            value={recordForEdit.howToGetThere || ''}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard"
                            multiline
                            minRows={6}
                            maxRows={10}
                        />
                    </FormControl>
                    <FormControl disabled variant="standard">
                        <TextField
                            id="standard-read-only-input"
                            label="Xếp hạng sao"
                            value={recordForEdit.rating + " sao" || ''}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard"
                        />
                    </FormControl>
                    <FormControl disabled variant="standard">
                        <TextField
                            id="standard-read-only-input"
                            label="Giá từ"
                            value={recordForEdit.priceBase.toLocaleString() + " VND" || ''}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard"
                        />
                    </FormControl>
                    <FormControl disabled variant="standard">
                        <TextField
                            id="standard-read-only-input"
                            label="Chính sách hoàn trả"
                            value={recordForEdit.returnPolicy || ''}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard"
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        <TextField
                            id="standard-read-only-input"
                            label="Vĩ độ"
                            name='latitude'
                            value={values.latitude}
                            onChange={handleInputChange}
                            variant="standard"
                            required={true}
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        <TextField
                            id="standard-read-only-input"
                            label="Kinh độ"
                            name='longtitude'
                            value={values.longtitude}
                            onChange={handleInputChange}
                            variant="standard"
                            required={true}
                        />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel>Duyệt đơn đăng ký chỗ nghỉ</InputLabel>
                        <MuiSelect
                            label="Duyệt đơn đăng ký chỗ nghỉ"
                            name="status"
                            value={values.status}
                            displayEmpty
                            onChange={handleInputChange}
                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                        >
                            <MenuItem value="0">...Chọn...</MenuItem>
                            {rentalRegistrationsData.map((item) => (
                            <MenuItem key={item.id} value={item.value}>
                                {item.title}
                            </MenuItem>
                            ))}
                        </MuiSelect>
                    </FormControl>
                    <ButtonWWrapperStyled>
                        <Controls.Button
                            type="submit"
                            text="Lưu" />
                        <Controls.Button
                            text="Làm mới"
                            color="default"
                            onClick={resetForm} />
                    </ButtonWWrapperStyled>
                </PopupRightContainerStyled>
            </PopupContainerStyled>
        </Form>
    )
}