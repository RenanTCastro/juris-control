import React from 'react';
import { Space, Table, Tag } from 'antd';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';

import LayoutBase from "../../components/LayoutBase/LayoutBase";

const columns = [
    {
      title: 'Cód. do cliente',
      dataIndex: 'client_code',
      key: 'client_code',
    },
    {
      title: 'Nome do cliente',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'N° do processo',
      dataIndex: 'process_number',
      key: 'process_number',
    },
    // {
    //     title: 'Descrição do processo',
    //     dataIndex: 'description',
    //     key: 'description',
    // },
    {
        title: 'Data de abertura',
        dataIndex: 'opening_date',
        key: 'opening_date',
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (_, { status }) => (
          <>
            {status.map((tag) => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
            <EyeOutlined style={{ fontSize: '20px'}}/>
            <DeleteOutlined style={{ fontSize: '20px', color: 'red' }}/>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      client_code: 32,
      name: 'John Brown',
      process_number: 2231231,
    //   description: "Processo de Divórcio por mútuo acordo. Inclui partilha de bens, definição de guarda compartilhada para seus dois filhos menores, elaboração de pensão alimentícia e acordo de visitação. Objetivo: Encerrar o casamento de forma amigável e equitativa. Tempo estimado: 3 meses. Responsável: Advogados de família de ambas as partes",
      opening_date: "27/03/2024",
      status: ['Aguardando senteça do juiz'],
    },
    {
        key: '1',
        client_code: 32,
        name: 'Luzia Grey',
        process_number: 2323523,
      //   description: "Processo de Divórcio por mútuo acordo. Inclui partilha de bens, definição de guarda compartilhada para seus dois filhos menores, elaboração de pensão alimentícia e acordo de visitação. Objetivo: Encerrar o casamento de forma amigável e equitativa. Tempo estimado: 3 meses. Responsável: Advogados de família de ambas as partes",
        opening_date: "13/02/2024",
        status: ['Recurso solicitado'],
      },
  ];
const Dashboard = () => {

    return (
      <LayoutBase title="Demandas">
        <Table columns={columns} dataSource={data} />
      </LayoutBase>
    );
};

export default Dashboard;