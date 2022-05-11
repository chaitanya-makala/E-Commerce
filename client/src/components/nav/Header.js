import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useDispatch } from "react-redux";

const { Item, SubMenu } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("");
  const handleClick = (event) => {
    setCurrent(event.key);
  };
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
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
        <Item key="logout" icon={<LogoutOutlined />} onClick={logout}>
          Logout
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
