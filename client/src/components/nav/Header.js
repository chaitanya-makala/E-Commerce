import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Item, SubMenu } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("");
  const handleClick = (event) => {
    setCurrent(event.key);
  };

  return (
    <Menu mode="horizontal" defaultSelectedKeys={current} onClick={handleClick}>
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
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
        <Link to="/login">Login</Link>
      </Item>
      <Item key="register" icon={<UserAddOutlined />}>
        <Link to="/register">Register</Link>
      </Item>
    </Menu>
  );
};

export default Header;
