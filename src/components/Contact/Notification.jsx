// import React from 'react';
import {
  RadiusUprightOutlined
} from '@ant-design/icons';
import { Button, Divider, notification, Space } from 'antd';

const Notification = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Notification ${placement}`,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
    });
  };
  return (
    <>
      {contextHolder}
      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('topRight')}
          icon={<RadiusUprightOutlined />}
        >
          topRight
        </Button>
      </Space>
      <Divider />
    </>
  );
};
export default Notification;
