import React from 'react';
import { Form, Input } from 'antd';
import { Column, Container, ColumnLeft, FormContainer, ButtonLogin, Text, Image} from './Style';

import loginImage from "../../assets/images/login_image.png";

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return (
        <Container>
            <ColumnLeft span={16} bgColor="#000000">
                <Text>Bem-vindo de volta!</Text>
                <FormContainer
                    wrapperCol={{ span: 12 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item label={<label style={{ color: "white" }}>E-mail</label>} name="email" rules={[ { required: true, message: 'Digite seu e-mail' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label={<label style={{ color: "white" }}>Senha</label>} name="password" rules={[ { required: true, message: 'Digite sua senha'}]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item >
                        <ButtonLogin type="primary" htmlType="submit">Login</ButtonLogin>
                    </Form.Item>
                </FormContainer>       
            </ColumnLeft>
            <Column span={8} bgColor="#1B3462">
                <Image src={loginImage} hide={false}/>
            </Column>
        </Container>
    )
};

export default Login;