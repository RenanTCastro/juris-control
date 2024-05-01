import styled from 'styled-components';
import { Col, Row, Form, Button} from 'antd';

export const Container = styled(Row)`
  height: 100vh;
`
export const Column = styled(Col)`
    background-color: ${(props) => props.bgColor || "red"};
`

export const ColumnLeft = styled(Col)`
    background-color: ${(props) => props.bgColor || "red"};
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Text = styled.h2`
    display: flex;
    color: white;
    margin-left: 280px;

`
export const FormContainer = styled(Form)`
    margin-left: 200px;
`

export const ButtonLogin = styled(Button)`
    background-color: #1B3462;
    margin-top: 20px;
    width: 100%;
`

export const Image = styled.img`
    display: flex;
    width: 40vw;
    height: 40vw;
    margin-left: -20vw;
    display: ${({hide}) => hide ? "none" : ""};
`