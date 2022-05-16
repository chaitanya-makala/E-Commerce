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
import { useDispatch, useSelector } from "react-redux";

const { Item, SubMenu } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("");
  const handleClick = (event) => {
    setCurrent(event.key);
  };
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
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

      {user && (
        <SubMenu
          key="SubMenu"
          title={user.email && user.email.split("@")[0]}
          icon={<SettingOutlined />}
          style={{ marginLeft: "auto" }}
        >
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
      )}
      {!user && (
        <Item
          style={{ marginLeft: "auto" }}
          key="login"
          icon={<UserOutlined />}
        >
          <Link to="/login">Login</Link>
        </Item>
      )}
      {!user && (
        <Item key="register" icon={<UserAddOutlined />}>
          <Link to="/register">Register</Link>
        </Item>
      )}
    </Menu>
  );
};

export default Header;
