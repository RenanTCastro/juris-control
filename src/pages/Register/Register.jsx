import React from 'react';
import { Form, Input } from 'antd';
import { Column, Container, ColumnLeft, ButtonRegister, Text, Image} from './Style';

import loginImage from "../../assets/images/register_image.png";

const Register = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return (
        <Container>
            <Column span={14}>
                <Image src={loginImage} hide={false}/>
            </Column>
            <ColumnLeft span={10} bgColor="#000000">
                <Text>Por favor, preencha o formulário para se inscrever!</Text>
                <Form
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item label={<label style={{ color: "white" }}>Nome/Empresa</label>} name="username" rules={[ { required: true, message: 'Digite o noma da empresa' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label={<label style={{ color: "white" }}>Como quer ser chamado</label>} name="name" rules={[ { required: true, message: 'Digite como quer ser chamado' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label={<label style={{ color: "white" }}>E-mail</label>} name="email" rules={[ { required: true, message: 'Digite seu e-mail' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label={<label style={{ color: "white" }}>Senha</label>} name="password" rules={[ { required: true, message: 'Digite sua senha'}]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item label={<label style={{ color: "white" }}>Confirmar senha</label>} name="confirmPassword" rules={[ { required: true, message: 'Digite sua senha novamente'}]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item >
                        <ButtonRegister type="primary" htmlType="submit">Registrar</ButtonRegister>
                    </Form.Item>
                </Form>       
            </ColumnLeft>
        </Container>
    )
};

export default Register;