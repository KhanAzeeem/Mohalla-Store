'use client'

import { useEffect, useState } from 'react'
import { Typography, List, Button, Row, Col, Card, Spin } from 'antd'
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function WishlistPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [wishlist, setWishlist] = useState<Model.Wishlist | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (userId) {
      Api.User.findOne(userId, {
        includes: [
          'wishlists',
          'wishlists.wishlistItems',
          'wishlists.wishlistItems.product',
        ],
      })
        .then(user => {
          if (user.wishlists && user.wishlists.length > 0) {
            setWishlist(user.wishlists[0])
          }
        })
        .catch(error => {
          enqueueSnackbar('Failed to load wishlist', { variant: 'error' })
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [userId])

  const handleRemoveItem = async (itemId: string) => {
    try {
      await Api.WishlistItem.deleteOne(itemId)
      setWishlist(prevWishlist => ({
        ...prevWishlist!,
        wishlistItems: prevWishlist!.wishlistItems!.filter(
          item => item.id !== itemId,
        ),
      }))
      enqueueSnackbar('Item removed from wishlist', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to remove item', { variant: 'error' })
    }
  }

  if (loading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My Wishlist</Title>
      <Text>Here you can view and manage the items you are interested in.</Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {wishlist?.wishlistItems?.map(item => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              cover={
                <img alt={item.product?.name} src={item.product?.imageUrl} />
              }
              actions={[
                <Button
                  type="link"
                  icon={<ShoppingCartOutlined />}
                  onClick={() => router.push(`/products/${item.productId}`)}
                >
                  View
                </Button>,
                <Button
                  type="link"
                  icon={<DeleteOutlined />}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </Button>,
              ]}
            >
              <Card.Meta
                title={item.product?.name}
                description={`Added on: ${dayjs(item.dateCreated).format('MMMM D, YYYY')}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
