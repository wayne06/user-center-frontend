import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'Wayne Zhong',
          title: 'Wayne Zhong',
          href: 'http://www.wayne06.top',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/wayne06',
          blankTarget: true,
        },
        {
          key: 'Wayne Blog',
          title: 'Wayne Blog',
          href: 'https://wayne06.github.io',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
