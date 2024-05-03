import React, { useState } from 'react';
import {
  HomeOutlined,
  TeamOutlined,
  AppstoreAddOutlined,
  CalendarOutlined,
  DollarOutlined,
  RubyOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

import { Button, Layout, Menu, theme } from 'antd';

import { ContentContainer, Title } from './Style';
const { Header, Sider } = Layout;

const LayoutBase = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" style={{color: "red"}}>LOGOOOO</div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <HomeOutlined />,
                label: 'Dashboard',
              },
              {
                key: '2',
                icon: <TeamOutlined />,
                label: 'Clientes',
              },
              {
                key: '3',
                icon: <AppstoreAddOutlined />,
                label: 'Demandas',
              },
              {
                key: '4',
                icon: <CalendarOutlined />,
                label: 'Agenda',
              },
              {
                key: '5',
                icon: <DollarOutlined />,
                label: 'Financeiro',
              },
              {
                key: '6',
                icon: <RubyOutlined />,
                label: 'Licença',
              },
              {
                key: '7',
                icon: <SettingOutlined />,
                label: 'Configurações',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <ContentContainer
            style={{
              margin: '24px 16px',
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {props.title && <Title>{props.title}</Title>}
            {props.children}
          </ContentContainer>
        </Layout>
      </Layout>
    );
};

export default LayoutBase;