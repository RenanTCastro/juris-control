import styled from 'styled-components';
import { Col, Row, Button} from 'antd';

export const Container = styled(Row)`
  height: 100vh;
`
export const Column = styled(Col)`
    background-color: black;
`

export const ColumnLeft = styled(Col)`
    background-color: ${(props) => props.bgColor || "red"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0px;
`
export const Text = styled.h3`
    display: flex;
    color: white;
`

export const ButtonRegister = styled(Button)`
    background-color: #1B3462;
    margin-top: 20px;
    width: 100%;
`

export const Image = styled.img`
    display: flex;
    width: 40vw;
    height: 40vw;
    margin-left: 10vw;
    display: ${({hide}) => hide ? "none" : ""};
`