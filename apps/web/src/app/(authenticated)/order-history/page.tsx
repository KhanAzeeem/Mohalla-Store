'use client'

import { useEffect, useState } from 'react'
import { Typography, Table, Spin, Row, Col } from 'antd'
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function OrderHistoryPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [orders, setOrders] = useState<Model.Order[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (userId) {
      Api.Order.findManyByUserId(userId, {
        includes: ['orderItems', 'orderItems.product'],
      })
        .then(orders => {
          setOrders(orders)
          setLoading(false)
        })
        .catch(error => {
          enqueueSnackbar('Failed to fetch order history', { variant: 'error' })
          setLoading(false)
        })
    }
  }, [userId])

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Date',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: (date: string) => dayjs(date).format('MMMM D, YYYY'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        if (status === 'delivered') {
          return <CheckCircleOutlined style={{ color: 'green' }} />
        } else if (status === 'pending') {
          return <ClockCircleOutlined style={{ color: 'orange' }} />
        } else {
          return <CloseCircleOutlined style={{ color: 'red' }} />
        }
      },
    },
    {
      title: 'Items',
      dataIndex: 'orderItems',
      key: 'orderItems',
      render: (orderItems: Model.OrderItem[]) => (
        <ul>
          {orderItems?.map(item => (
            <li key={item.id}>
              {item.product?.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>Order History</Title>
          <Text>
            View your past purchases and track the status of your orders.
          </Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={24}>
          {loading ? (
            <Spin size="large" />
          ) : (
            <Table
              columns={columns}
              dataSource={orders}
              rowKey="id"
              pagination={{ pageSize: 5 }}
            />
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
