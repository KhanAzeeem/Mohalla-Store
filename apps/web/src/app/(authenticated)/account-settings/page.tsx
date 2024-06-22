'use client'

import { useEffect, useState } from 'react'
import { Form, Input, Button, Upload, Row, Col, Typography } from 'antd'
import { UploadOutlined, UserOutlined, MailOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AccountSettingsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [user, setUser] = useState<Model.User | null>(null)
  const [fileList, setFileList] = useState<any[]>([])

  useEffect(() => {
    if (userId) {
      Api.User.findOne(userId, {
        includes: ['notifications', 'reviews', 'wishlists', 'carts', 'orders'],
      })
        .then(setUser)
        .catch(() =>
          enqueueSnackbar('Failed to fetch user data', { variant: 'error' }),
        )
    }
  }, [userId])

  const handleUpload = async (options: any) => {
    const { file } = options
    const url = await Api.Upload.upload(file)
    setFileList([{ url, status: 'done' }])
  }

  const handleFinish = async (values: any) => {
    if (userId) {
      try {
        const updatedUser = await Api.User.updateOne(userId, {
          ...values,
          pictureUrl: fileList[0]?.url,
        })
        setUser(updatedUser)
        enqueueSnackbar('Account updated successfully', { variant: 'success' })
      } catch {
        enqueueSnackbar('Failed to update account', { variant: 'error' })
      }
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Title level={2}>Account Settings</Title>
          <Text>Update your personal information and preferences</Text>
        </Col>
        <Col span={24}>
          <Form layout="vertical" initialValues={user} onFinish={handleFinish}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item name="pictureUrl" label="Profile Picture">
              <Upload
                fileList={fileList}
                customRequest={handleUpload}
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
