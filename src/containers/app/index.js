import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import Home from '../home';
import About from '../about';
import Page from '../page';
import BookList from '../book_list';
import Edit from '../edit';
import { Layout, Menu } from 'antd';
const { Header, Footer } = Layout;
const App = () => (
  <Router>
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/about-us">About Us</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/page">Add Book</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/booklist">Book List</Link></Menu.Item>
      </Menu>
    </Header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/page" component={Page} />
      <Route exact path="/booklist" component={BookList} />
      <Route exact path="/edit/:id" component={Edit} />
    </main>
    <Footer style={{ textAlign: 'center' }}>
      Interview ©2018 Created by Promphat
    </Footer>
  </Router>
)

export default App
