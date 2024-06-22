'use client'

import { useEffect, useState } from 'react'
import {
  Typography,
  Button,
  Rate,
  Input,
  List,
  Row,
  Col,
  Card,
  Space,
} from 'antd'
import {
  ShoppingCartOutlined,
  HeartOutlined,
  CommentOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { TextArea } = Input
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ProductDetailPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [product, setProduct] = useState<Model.Product | null>(null)
  const [reviews, setReviews] = useState<Model.Review[]>([])
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' })

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await Api.Product.findOne(params.productId, {
          includes: ['reviews', 'reviews.user'],
        })
        setProduct(productData)
        setReviews(productData.reviews || [])
      } catch (error) {
        enqueueSnackbar('Failed to load product details', { variant: 'error' })
      }
    }

    fetchProduct()
  }, [params.productId])

  const handleAddToCart = async () => {
    try {
      await Api.CartItem.createOneByProductId(params.productId, {
        quantity: 1,
        cartId: userId,
      })
      enqueueSnackbar('Product added to cart', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to add product to cart', { variant: 'error' })
    }
  }

  const handleAddToWishlist = async () => {
    try {
      await Api.WishlistItem.createOneByProductId(params.productId, {
        wishlistId: userId,
      })
      enqueueSnackbar('Product added to wishlist', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to add product to wishlist', { variant: 'error' })
    }
  }

  const handleReviewSubmit = async () => {
    if (newReview.rating === 0 || newReview.comment === '') {
      enqueueSnackbar('Please provide a rating and a comment', {
        variant: 'error',
      })
      return
    }

    try {
      await Api.Review.createOneByProductId(params.productId, {
        ...newReview,
        userId,
      })
      setReviews([...reviews, { ...newReview, user: authentication.user }])
      setNewReview({ rating: 0, comment: '' })
      enqueueSnackbar('Review submitted', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to submit review', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col xs={24} md={16}>
          <Title level={2}>{product?.name}</Title>
          <Paragraph>{product?.description}</Paragraph>
          <Text strong>Price: ${product?.price}</Text>
          <div>
            <Rate disabled value={product?.rating} />
          </div>
          <Space>
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button icon={<HeartOutlined />} onClick={handleAddToWishlist}>
              Add to Wishlist
            </Button>
          </Space>
          <Title level={3}>Reviews</Title>
          <List
            itemLayout="vertical"
            dataSource={reviews}
            renderItem={review => (
              <List.Item key={review.id}>
                <List.Item.Meta
                  title={<Text strong>{review.user?.name}</Text>}
                  description={<Rate disabled value={review.rating} />}
                />
                <Paragraph>{review.comment}</Paragraph>
              </List.Item>
            )}
          />
          {authentication.isLoggedIn && (
            <Card title="Leave a Review">
              <Rate
                value={newReview.rating}
                onChange={value =>
                  setNewReview(prev => ({ ...prev, rating: value }))
                }
              />
              <TextArea
                rows={4}
                value={newReview.comment}
                onChange={e =>
                  setNewReview(prev => ({ ...prev, comment: e.target.value }))
                }
                placeholder="Write your review here..."
              />
              <Button
                type="primary"
                icon={<CommentOutlined />}
                onClick={handleReviewSubmit}
                style={{ marginTop: '10px' }}
              >
                Submit Review
              </Button>
            </Card>
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
