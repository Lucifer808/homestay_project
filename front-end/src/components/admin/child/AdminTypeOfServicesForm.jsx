import React, { useEffect } from 'react'
import Controls from "../components/Controls";
import { useForm, Form } from './useForm';
import styled from 'styled-components';
const PopupContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
`
const PopupLeftContainerStyled = styled.div``
const ButtonWWrapperStyled = styled.div`
    position: relative;
    bottom: 0;
    right: 0;
    margin-left: .2rem;
`

const initialFValues = {
    name: '',
    desc: '',
    active: true,
}
export default function AdminServiesForm(props) {
    const {addOrEdit, recordForEdit} = props;
    const {
        values,
        setValues,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true);
    const handleSubmit = e => {
        e.preventDefault();
        addOrEdit(values, resetForm);
    };
    useEffect(() =>{
        if(recordForEdit != null){
            setValues({
                ...recordForEdit
            });
        }
    },[recordForEdit, setValues])
    return (
        <Form onSubmit={handleSubmit}>
            <PopupContainerStyled>
                <PopupLeftContainerStyled>
                    <Controls.Input
                        name="name"
                        label="Tên loại dịch vụ"
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
                    <Controls.Checkbox
                        name="active"
                        label="Kích hoạt ngay"
                        value={values.active}
                        onChange={handleInputChange}
                    />
                    <ButtonWWrapperStyled>
                        <Controls.Button
                            type="submit"
                            text="Xác nhận" />
                        <Controls.Button
                            text="Làm mới"
                            color="default"
                            onClick={resetForm} />
                    </ButtonWWrapperStyled>
                </PopupLeftContainerStyled>
            </PopupContainerStyled>
        </Form>
    )
}