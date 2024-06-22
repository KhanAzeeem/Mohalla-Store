'use client'

import { useState, useEffect } from 'react'
import {
  Input,
  Select,
  Slider,
  Rate,
  Row,
  Col,
  Card,
  Typography,
  Spin,
} from 'antd'
import {
  SearchOutlined,
  ShoppingCartOutlined,
  StarOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [products, setProducts] = useState<Model.Product[]>([])
  const [categories, setCategories] = useState<Model.Category[]>([])
  const [recommendedProducts, setRecommendedProducts] = useState<
    Model.Product[]
  >([])
  const [loading, setLoading] = useState<boolean>(true)
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined,
  )
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
  const [rating, setRating] = useState<number>(0)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsFound = await Api.Product.findMany({
          includes: ['category', 'reviews'],
          filters: {
            name: { ilike: `%${searchKeyword}%` },
            categoryId: selectedCategory,
            price: { gte: priceRange[0], lte: priceRange[1] },
            rating: { gte: rating },
          },
        })
        setProducts(productsFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch products', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    const fetchCategories = async () => {
      try {
        const categoriesFound = await Api.Category.findMany()
        setCategories(categoriesFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch categories', { variant: 'error' })
      }
    }

    const fetchRecommendedProducts = async () => {
      if (!userId) return
      try {
        const user = await Api.User.findOne(userId, {
          includes: [
            'orders',
            'orders.orderItems',
            'orders.orderItems.product',
          ],
        })
        const recommended =
          user.orders?.flatMap(order =>
            order.orderItems?.map(item => item.product),
          ) || []
        setRecommendedProducts(recommended)
      } catch (error) {
        enqueueSnackbar('Failed to fetch recommended products', {
          variant: 'error',
        })
      }
    }

    fetchProducts()
    fetchCategories()
    fetchRecommendedProducts()
  }, [searchKeyword, selectedCategory, priceRange, rating, userId])

  const handleSearch = (value: string) => {
    setSearchKeyword(value)
  }

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
  }

  const handlePriceChange = (value: [number, number]) => {
    setPriceRange(value)
  }

  const handleRatingChange = (value: number) => {
    setRating(value)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Product Listings</Title>
      <Text>Browse and search for products to purchase.</Text>
      <Input.Search
        placeholder="Search products"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={handleSearch}
        style={{ marginBottom: 20 }}
      />
      <Row gutter={16}>
        <Col span={6}>
          <Select
            placeholder="Select Category"
            style={{ width: '100%', marginBottom: 20 }}
            onChange={handleCategoryChange}
            allowClear
          >
            {categories?.map(category => (
              <Option key={category.id} value={category.id}>
                {category.name}
              </Option>
            ))}
          </Select>
          <Text>Price Range</Text>
          <Slider
            range
            defaultValue={priceRange}
            max={1000}
            onChange={handlePriceChange}
            style={{ marginBottom: 20 }}
          />
          <Text>Rating</Text>
          <Rate
            allowHalf
            defaultValue={rating}
            onChange={handleRatingChange}
            style={{ marginBottom: 20 }}
          />
        </Col>
        <Col span={18}>
          {loading ? (
            <Spin size="large" />
          ) : (
            <Row gutter={[16, 16]}>
              {products?.map(product => (
                <Col key={product.id} span={8}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt={product.name}
                        src={'https://via.placeholder.com/150'}
                      />
                    }
                    actions={[
                      <ShoppingCartOutlined
                        key="cart"
                        onClick={() => router.push(`/products/${product.id}`)}
                      />,
                      <StarOutlined key="wishlist" />,
                    ]}
                  >
                    <Card.Meta
                      title={product.name}
                      description={`$${product.price}`}
                    />
                    <Rate disabled defaultValue={product.rating} />
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
      {userId && (
        <>
          <Title level={3} style={{ marginTop: 40 }}>
            Recommended Products
          </Title>
          <Row gutter={[16, 16]}>
            {recommendedProducts?.map(product => (
              <Col key={product.id} span={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={product.name}
                      src={'https://via.placeholder.com/150'}
                    />
                  }
                  actions={[
                    <ShoppingCartOutlined
                      key="cart"
                      onClick={() => router.push(`/products/${product.id}`)}
                    />,
                    <StarOutlined key="wishlist" />,
                  ]}
                >
                  <Card.Meta
                    title={product.name}
                    description={`$${product.price}`}
                  />
                  <Rate disabled defaultValue={product.rating} />
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </PageLayout>
  )
}
