import React from 'react';
import { Table, Tag, Button, Space, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface OrderProduct {
  productId: string; // Nombre o ID del producto (puede cambiar según cómo lo traigas del backend)
  quantity: number;
  price: number;
}

interface OrderType {
  key: string;
  IDUser: string;
  createDate: string;
  updateDate: string | null;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled' | 'Deleted';
  products: OrderProduct[];
  total: number;
  subTotal: number;
}

const columns: ColumnsType<OrderType> = [
  {
    title: 'Usuario',
    dataIndex: 'IDUser',
    key: 'IDUser',
  },
  {
    title: 'Fecha de creación',
    dataIndex: 'createDate',
    key: 'createDate',
  },
  {
    title: 'Fecha de actualización',
    dataIndex: 'updateDate',
    key: 'updateDate',
    render: (date) => date || '—',
  },
  {
    title: 'Estado',
    dataIndex: 'status',
    key: 'status',
    render: (status) => {
      const colorMap: Record<string, string> = {
        Pending: 'orange',
        Shipped: 'blue',
        Delivered: 'green',
        Cancelled: 'red',
        Deleted: 'gray',
      };
      return <Tag color={colorMap[status]}>{status.toUpperCase()}</Tag>;
    },
  },
  {
    title: 'Productos',
    dataIndex: 'products',
    key: 'products',
    render: (products: OrderProduct[]) => (
      <Tooltip
        title={products.map(p => `${p.productId} (x${p.quantity}) - $${p.price}`).join('\n')}
      >
        <span>{products.length} productos</span>
      </Tooltip>
    ),
  },
  {
    title: 'Subtotal',
    dataIndex: 'subTotal',
    key: 'subTotal',
    render: (value: number) => `$${value.toFixed(2)}`,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render: (value: number) => `$${value.toFixed(2)}`,
  },
  {
    title: 'Acciones',
    key: 'actions',
    render: () => (
      <Space size="middle">
        <Button type="link">Ver Detalles</Button>
        <Button type="link" danger>
          Cancelar
        </Button>
      </Space>
    ),
  },
];

const data: OrderType[] = [
  {
    key: '1',
    IDUser: 'Luis123',
    createDate: '2025-06-19',
    updateDate: '2025-06-20',
    status: 'Pending',
    products: [
      { productId: 'P001', quantity: 2, price: 100 },
      { productId: 'P002', quantity: 1, price: 150 },
    ],
    subTotal: 350,
    total: 406, // suponiendo impuestos u otros cargos
  },
  {
    key: '2',
    IDUser: 'Maria456',
    createDate: '2025-06-18',
    updateDate: null,
    status: 'Delivered',
    products: [
      { productId: 'P003', quantity: 1, price: 200 },
    ],
    subTotal: 200,
    total: 232,
  },
];

const OrderTable: React.FC = () => <Table<OrderType> columns={columns} dataSource={data} />;

export default OrderTable;
