import { Button, Menu } from "antd"
import { Header } from "antd/es/layout/layout"
import Title from "antd/es/typography/Title";
import Typography from "antd/es/typography/Typography";
import React from "react"
import { useAuth } from "../../provider/authProvider";
import Link from "antd/es/typography/Link";

const items = [
  { key: 1, label: 'Home page', path: '/' },
  { key: 2, label: 'Login page', path: '/' },
  { key: 3, label: 'Profile page', path: '/' },
]
const AppHeader = () => {
  const { token, logout } = useAuth()
  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="demo-logo" />
      <Link href="/">My demo page</Link>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
        }} />
      {token && <Button onClick={logout}>Logout</Button>}
    </Header>
  );
}
export default AppHeader