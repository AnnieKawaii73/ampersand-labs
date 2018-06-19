import React from 'react';
import FooterElement from './FooterElement/FooterElement';
import { convert } from '/utilities'

import Link from 'next/link'
import { Layout, Menu, Breadcrumb, Col, Row } from "antd";
const { Header, Content, Footer } = Layout;

export default class AppLayout extends React.Component {
    state = {
        current: 'home',
        pages: [
            {page: 'Quiénes Somos', subs: ['']},
            {page: 'Proyecto', subs: ['Plan de Investigación', 'Preguntas de Investigación', 'Metas de Ingeniería', 'Hipótesis y Resultados Esperados', 'Metodología']},
            {page: 'Documentación', subs: ['Fase 1', 'Fase 2']},
        ],
    }
    handleClick = (event) => {
        this.setState({
          current: event.key,
        });
      }
    render() {
        let footerLinks = this.state.pages.map((page, i) => {
            return(
                <Col key={i} xs={24} sm={8} md={8} lg={8} xl={8} style={{margin: 'auto', padding:'0.8em'}}>
                    <FooterElement key={i} page={page['page']}>
                     {page['subs']}
                    </FooterElement>
                </Col>
                
            )
        });
        let navbarLinks = this.state.pages.map((page, i) => {
            if (i<6) {
                return(
                    <Menu.Item key={i}>
                        <Link key={i} href={'/'+convert(page['page'])}>{page['page']}</Link>
                    </Menu.Item>
                )
            }else{
                return null
            }
        });
        return(
            <Layout justify="space-between">
                    <div className="logo" />
                    <Menu
                    theme="light"
                    onClick={this.handleClick}
                    selectedKeys={this.state.current}
                    mode="horizontal">
                        {navbarLinks}
                    </Menu>
                <Content style={{padding: '4em 2em 4em', backgroundColor: 'white'}}>
                        {this.props.children}
                </Content>
                <Footer style={{backgroundColor:' #b2bec3', margin:'auto', width:'100%'}}>
                    <Row align="top" justify="center">
                        {footerLinks}
                    </Row>
                </Footer>
            </Layout>
        )
       
    }
}