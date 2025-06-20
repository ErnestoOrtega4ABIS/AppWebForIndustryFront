import React from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface ProductType {
  key: string;
  productName: string;
  price: number;
  quantity: number;
  status: boolean;
  description: string;
  createDate: string;
  deleteDate: string;
}

const columns: ColumnsType<ProductType> = [
  {
    title: 'Nombre del producto',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: 'Precio',
    dataIndex: 'price',
    key: 'price',
    render: (price: number) => `$${price.toFixed(2)}`,
  },
  {
    title: 'Cantidad',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Estado',
    dataIndex: 'status',
    key: 'status',
    render: (status: boolean) => (
      <Tag color={status ? 'green' : 'red'}>
        {status ? 'Activo' : 'Inactivo'}
      </Tag>
    ),
  },
  {
    title: 'Descripción',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Fecha de creación',
    dataIndex: 'createDate',
    key: 'createDate',
  },
  {
    title: 'Fecha de eliminación',
    dataIndex: 'deleteDate',
    key: 'deleteDate',
  },
  {
    title: 'Acciones',
    key: 'actions',
    render: () => (
      <Space size="middle">
        <Button type="link">Actualizar</Button>
        <Button type="link" danger>
          Borrar
        </Button>
      </Space>
    ),
  },
];

const data: ProductType[] = [
  {
    key: '1',
    productName: 'Lámpara LED',
    price: 199.99,
    quantity: 10,
    status: true,
    description: 'Lámpara LED blanca de escritorio',
    createDate: '2025-06-01',
    deleteDate: '',
  },
  {
    key: '2',
    productName: 'Silla ergonómica',
    price: 899.5,
    quantity: 5,
    status: false,
    description: 'Silla de oficina ergonómica negra',
    createDate: '2025-05-15',
    deleteDate: '2025-06-10',
  },
];

const ProductTable: React.FC = () => <Table<ProductType> columns={columns} dataSource={data} />;

export default ProductTable;
