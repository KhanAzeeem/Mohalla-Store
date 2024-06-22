'use client'

import { useState } from 'react'
import { Typography, Form, Input, Button, Steps, Card, Row, Col } from 'antd'
import {
  CreditCardOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { Step } = Steps
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CheckoutPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [currentStep, setCurrentStep] = useState(0)
  const [order, setOrder] = useState<Partial<Model.Order>>({})

  const handleNext = async (values: any) => {
    if (currentStep === 0) {
      setOrder({ ...order, shippingInfo: values })
      setCurrentStep(1)
    } else if (currentStep === 1) {
      setOrder({ ...order, paymentInfo: values })
      setCurrentStep(2)
    } else if (currentStep === 2) {
      try {
        await Api.Order.createOneByUserId(userId, {
          ...order,
          status: 'pending',
        })
        enqueueSnackbar('Order placed successfully!', { variant: 'success' })
        router.push('/order-history')
      } catch (error) {
        enqueueSnackbar('Failed to place order. Please try again.', {
          variant: 'error',
        })
      }
    }
  }

  const steps = [
    {
      title: 'Shipping Information',
      content: (
        <Form onFinish={handleNext}>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: 'Please enter your address' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="city"
            label="City"
            rules={[{ required: true, message: 'Please enter your city' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="postalCode"
            label="Postal Code"
            rules={[
              { required: true, message: 'Please enter your postal code' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true, message: 'Please enter your country' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form.Item>
        </Form>
      ),
      icon: <HomeOutlined />,
    },
    {
      title: 'Payment Information',
      content: (
        <Form onFinish={handleNext}>
          <Form.Item
            name="cardNumber"
            label="Card Number"
            rules={[
              { required: true, message: 'Please enter your card number' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="expiryDate"
            label="Expiry Date"
            rules={[
              { required: true, message: 'Please enter your card expiry date' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="cvv"
            label="CVV"
            rules={[{ required: true, message: 'Please enter your card CVV' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form.Item>
        </Form>
      ),
      icon: <CreditCardOutlined />,
    },
    {
      title: 'Review Order',
      content: (
        <Card>
          <Paragraph>
            <Text strong>Shipping Information:</Text>{' '}
            {JSON.stringify(order.shippingInfo)}
          </Paragraph>
          <Paragraph>
            <Text strong>Payment Information:</Text>{' '}
            {JSON.stringify(order.paymentInfo)}
          </Paragraph>
          <Button type="primary" onClick={handleNext}>
            Place Order
          </Button>
        </Card>
      ),
      icon: <ShoppingCartOutlined />,
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Checkout</Title>
      <Text>
        Enter your shipping and payment information to complete your order.
      </Text>
      <Row justify="center">
        <Col xs={24} md={16}>
          <Steps current={currentStep}>
            {steps.map((step, index) => (
              <Step key={index} title={step.title} icon={step.icon} />
            ))}
          </Steps>
          <div style={{ marginTop: 24 }}>{steps[currentStep].content}</div>
        </Col>
      </Row>
    </PageLayout>
  )
}
