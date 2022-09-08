import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { Drawer } from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';

function LogoContainer() {
  const [visible, setVisible] = useState(false);
 

  const showDrawer = () => {
      setVisible(!visible);
    };
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
    <Link to="/">
     <img style={{width:"100px",height:"5vh"}} src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="" />
    </Link>
    <div 
    style={{marginLeft:"20px"}}
    onClick={showDrawer}>
        {!visible?<MenuUnfoldOutlined/>:<MenuFoldOutlined/>}
        <Drawer
          width={230}
          title="Menu"
          closable={false}
          placement="left"
          open={visible}
          autoFocus={false}
          maskClosable={!visible}>
      </Drawer>
    </div>
    </div>
  )
}

export default LogoContainer