import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Item, SubMenu } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("");
  const handleClick = (event) => {
    setCurrent(event.key);
  };

  return (
    <Menu mode="horizontal" defaultSelectedKeys={current} onClick={handleClick}>
      <Item key="home" icon={<AppstoreOutlined />}>
        Home
      </Item>

      <SubMenu key="SubMenu" title="User" icon={<SettingOutlined />}>
        <Item key="setting:1" icon={<AppstoreOutlined />}>
          Option 1
        </Item>
        <Item key="setting:2" icon={<AppstoreOutlined />}>
          Option 2
        </Item>
      </SubMenu>
      <Item style={{ marginLeft: "auto" }} key="login" icon={<UserOutlined />}>
        Login
      </Item>
      <Item key="register" icon={<UserAddOutlined />}>
        Register
      </Item>
    </Menu>
  );
};

export default Header;
