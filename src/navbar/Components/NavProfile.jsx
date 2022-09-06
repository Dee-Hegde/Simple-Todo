import React from 'react'
import { Popover} from 'antd';
import { Link } from 'react-router-dom';
import {UserOutlined} from '@ant-design/icons';


function NavProfile() {

  const content = (
    <div>
      <Link to="/profile">Profile</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
    
  return (
    <div>
    <Popover content={content} title="Profile" trigger="click">
    <UserOutlined />
    </Popover>
  </div>
  )
}

export default NavProfile