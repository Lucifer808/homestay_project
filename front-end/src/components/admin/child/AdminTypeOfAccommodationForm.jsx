import React, { useEffect } from 'react'
import Controls from "../components/Controls";
import { useForm, Form } from './useForm';
import styled from 'styled-components';
import { getAllTypeOfAccommodationHeader, selectTypeOfAccommodationsHeader } from '../../../features/adminSlice';
import { useDispatch, useSelector } from 'react-redux';
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
const initialFValues = {
    name: '',
    desc: '',
    ta_th: '',
    active: true,
}

export default function AdminTypeOfAccommodationForm(props) {
    const dispatch = useDispatch();
    const selectTypeOfServicesData = useSelector(selectTypeOfAccommodationsHeader);
    const { addOrEdit, recordForEdit } = props;
    const {
        values,
        setValues,
        handleInputChange,
        resetForm
    } = useForm(initialFValues);
    const handleSubmit = e => {
        e.preventDefault();
        addOrEdit(values, resetForm);
    }

    useEffect(() => {
        dispatch(getAllTypeOfAccommodationHeader())
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
                        label="Tên loại chỗ nghỉ"
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
                    />
                </PopupLeftContainerStyled>
                <PopupRightContainerStyled>
                    <PopupRightWrapperStyled>
                        <Controls.Select
                            name="ta_th"
                            label="Đối tượng"
                            value={values.ta_th}
                            onChange={handleInputChange}
                            options={selectTypeOfServicesData}
                            
                        />
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