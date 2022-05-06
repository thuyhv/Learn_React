import React, { useState } from "react";
import "./index.scss";

import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  DatabaseOutlined,
  QuestionCircleOutlined,
  HighlightOutlined

} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const MasterLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu key={"menu_"} theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {
            <SubMenu key="sub_database" title={ <span> <DatabaseOutlined /> <span>Database</span> </span> } >
              <Menu.Item key={"sub_database_oracle"}>
                Oracle
                <Link to={"/database/oracle"} />
              </Menu.Item>
            </SubMenu>
          }
          {
            <SubMenu key="sub_utilities" title={ <span> <SettingOutlined /> <span>Utilities</span> </span> } >
              <Menu.Item key={"sub_utilities_listFileSelected"}>
                List File Selected
                <Link to={"/utilities/listFileSelected"} />
              </Menu.Item>
              <Menu.Item key={"sub_utilities_randomInsertSQL"}>
                Random Insert SQL
                <Link to={"/utilities/randomInsertSQL"} />
              </Menu.Item>
              <Menu.Item key={"sub_utilities_textLoop"}>
                Repeat Text
                <Link to={"/utilities/repeatText"} />
              </Menu.Item>
              <Menu.Item key={"sub_utilities_replaceText"}>
                Replace Text
                <Link to={"/utilities/replaceText"} />
              </Menu.Item>
              <Menu.Item key={"sub_utilities_tinyMCE"}>
                TinyMCE
                <Link to={"/utilities/tinyMCE"} />
              </Menu.Item>
            </SubMenu>
          }
          {
            <SubMenu key="sub_tutorial" title={ <span> <HighlightOutlined /> <span>Tutorials</span> </span> } >
              <Menu.Item key={"sub_tutorial_net_angular"}>
                Net - Angular
                <Link to={"/tutorial/net-angular"} />
              </Menu.Item>
            </SubMenu>
          }
          {
            <SubMenu key="sub_demo" title={ <span> <QuestionCircleOutlined /> <span>Demo</span> </span> } >
              <Menu.Item key={"sub_demo_connect_API"}>
                Connect API
                <Link to={"/demo/connectAPI"} />
              </Menu.Item>
              <Menu.Item key={"sub_demo_highlightcode"}>
                HighLight Code
                <Link to={"/demo/highlightcode"} />
              </Menu.Item>
            </SubMenu>
          }
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsed ? (
            <MenuUnfoldOutlined className="trigger" onClick={toggle} />
          ) : (
            <MenuFoldOutlined className="trigger" onClick={toggle} />
          )}
        </Header>

        <Content className="site-layout-background-content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MasterLayout;
