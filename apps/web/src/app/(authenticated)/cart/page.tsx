'use client'

import { useEffect, useState } from 'react'
import {
  Typography,
  Button,
  Table,
  InputNumber,
  Popconfirm,
  Row,
  Col,
} from 'antd'
import {
  ShoppingCartOutlined,
  DeleteOutlined,
  CheckOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ShoppingCartPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [cart, setCart] = useState<Model.Cart | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (userId) {
      Api.Cart.findManyByUserId(userId, {
        includes: ['cartItems', 'cartItems.product'],
      })
        .then(carts => {
          if (carts.length > 0) {
            setCart(carts[0])
          }
        })
        .catch(() => {
          enqueueSnackbar('Failed to load cart', { variant: 'error' })
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [userId])

  const updateCartItemQuantity = (cartItemId: string, quantity: number) => {
    Api.CartItem.updateOne(cartItemId, { quantity })
      .then(() => {
        setCart(prevCart => {
          if (prevCart) {
            const updatedCartItems = prevCart.cartItems?.map(item =>
              item.id === cartItemId ? { ...item, quantity } : item,
            )
            return { ...prevCart, cartItems: updatedCartItems }
          }
          return prevCart
        })
        enqueueSnackbar('Cart updated successfully', { variant: 'success' })
      })
      .catch(() => {
        enqueueSnackbar('Failed to update cart', { variant: 'error' })
      })
  }

  const removeCartItem = (cartItemId: string) => {
    Api.CartItem.deleteOne(cartItemId)
      .then(() => {
        setCart(prevCart => {
          if (prevCart) {
            const updatedCartItems = prevCart.cartItems?.filter(
              item => item.id !== cartItemId,
            )
            return { ...prevCart, cartItems: updatedCartItems }
          }
          return prevCart
        })
        enqueueSnackbar('Item removed from cart', { variant: 'success' })
      })
      .catch(() => {
        enqueueSnackbar('Failed to remove item from cart', { variant: 'error' })
      })
  }

  const proceedToCheckout = () => {
    router.push('/checkout')
  }

  const columns = [
    {
      title: 'Product',
      dataIndex: ['product', 'name'],
      key: 'product',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text: number, record: Model.CartItem) => (
        <InputNumber
          min={1}
          defaultValue={text}
          onChange={value => updateCartItemQuantity(record.id, value as number)}
        />
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: any, record: Model.CartItem) => (
        <Popconfirm
          title="Are you sure to delete this item?"
          onConfirm={() => removeCartItem(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger icon={<DeleteOutlined />} />
        </Popconfirm>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col>
          <Title level={2}>
            <ShoppingCartOutlined /> My Shopping Cart
          </Title>
          <Text>Review your items and proceed to checkout</Text>
        </Col>
      </Row>
      <Table
        dataSource={cart?.cartItems}
        columns={columns}
        rowKey="id"
        loading={loading}
        pagination={false}
      />
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col>
          <Button
            type="primary"
            icon={<CheckOutlined />}
            onClick={proceedToCheckout}
          >
            Proceed to Checkout
          </Button>
        </Col>
      </Row>
    </PageLayout>
  )
}
