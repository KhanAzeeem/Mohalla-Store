'use client'

import { useState } from 'react'
import { Typography, Form, Input, Button, Row, Col } from 'antd'
import { MailOutlined, MessageOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CustomerSupportPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: { title: string; message: string }) => {
    if (!userId) {
      enqueueSnackbar('You must be logged in to submit a query.', {
        variant: 'error',
      })
      return
    }

    setLoading(true)
    try {
      await Api.Notification.createOneByUserId(userId, {
        title: values.title,
        message: values.message,
        userId: userId,
      })
      enqueueSnackbar('Your query has been submitted successfully!', {
        variant: 'success',
      })
      router.push('/home')
    } catch (error) {
      enqueueSnackbar('Failed to submit your query. Please try again later.', {
        variant: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col xs={24} sm={18} md={12} lg={10} xl={8}>
          <Title level={2} style={{ textAlign: 'center' }}>
            Contact Customer Support
          </Title>
          <Paragraph style={{ textAlign: 'center' }}>
            If you have any issues or questions, please fill out the form below
            and our support team will assist you.
          </Paragraph>
          <Form
            name="support"
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ title: '', message: '' }}
          >
            <Form.Item
              name="title"
              label="Title"
              rules={[
                {
                  required: true,
                  message: 'Please input the title of your query!',
                },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Enter the title of your query"
              />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[
                { required: true, message: 'Please input your message!' },
              ]}
            >
              <Input.TextArea
                prefix={<MessageOutlined />}
                rows={4}
                placeholder="Describe your issue or question"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
