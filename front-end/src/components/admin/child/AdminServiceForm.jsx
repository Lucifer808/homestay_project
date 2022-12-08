import React, { useEffect, useState } from 'react'
import Controls from "../components/Controls";
import { useForm, Form } from './useForm';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import ChildPopup from '../components/ChildPopup';
import { getAllTypeOfService, selectTypeOfServices } from '../../../features/adminSlice';
import { useDispatch, useSelector } from 'react-redux';
import AdminChildCreateTypeOfService from './AdminChildCreateTypeOfService';
const PopupContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
`
const PopupLeftContainerStyled = styled.div``
const PopupRightContainerStyled = styled.div`
    width: 50%;
`
const PopupRightWrapperStyled = styled.div`
    display: flex;
`
const ButtonWWrapperStyled = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1.2rem;
`
const AdminServicespageAddBtnWrapperStyled = styled.div`
  position: absolute;
  right: 0;
`
const AdminServicespageAddBtnStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .6rem;
  margin-top: .5rem;
  margin-right: 1.2rem;
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
const initialFValues = {
    name: '',
    desc: '',
    sv_ts: '',
    active: true,
}

export default function AdminServieForm(props) {
    const dispatch = useDispatch();
    const selectTypeOfServicesData = useSelector(selectTypeOfServices);
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
        dispatch(getAllTypeOfService())
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit, dispatch]);
    return (
        <Form onSubmit={handleSubmit}>
            <PopupContainerStyled>
                <PopupLeftContainerStyled>
                    <Controls.Input
                        name="name"
                        label="Tên dịch vụ"
                        value={values.name}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        name="desc"
                        label="Mô tả"
                        value={values.desc}
                        onChange={handleInputChange}
                        multiline
                        minRows={6}
                        maxRows={10}
                        required={true}
                    />
                </PopupLeftContainerStyled>
                <PopupRightContainerStyled>
                    <PopupRightWrapperStyled>
                        <Controls.Select
                            name="sv_ts"
                            label="Loại sản phẩm"
                            value={values.sv_ts}
                            onChange={handleInputChange}
                            options={selectTypeOfServicesData}
                            required={true}
                        />
                        <AdminServicespageAddBtnWrapperStyled  onClick={() => { setOpenChildPopup(true)}}>
                            <AdminServicespageAddBtnStyled>
                                <AdminServicespageAddBtnTitleStyled>
                                    Thêm
                                </AdminServicespageAddBtnTitleStyled>
                                <AddIcon />
                            </AdminServicespageAddBtnStyled>
                        </AdminServicespageAddBtnWrapperStyled>
                        <ChildPopup
                            title="Thêm loại dịch vụ"
                            openPopup={openChildPopup}
                            setOpenPopup={setOpenChildPopup}
                            onClose={() => setOpenChildPopup(false)} 
                        >
                            <AdminChildCreateTypeOfService />
                        </ChildPopup>
                    </PopupRightWrapperStyled>
                    <Controls.Checkbox
                        name="active"
                        label="Kích hoạt ngay"
                        value={values.active}
                        onChange={handleInputChange}
                    />
                    <ButtonWWrapperStyled>
                        <Controls.Button
                            type="submit"
                            text="Thêm" />
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