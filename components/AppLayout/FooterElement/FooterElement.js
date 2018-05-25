import React from 'react';
import { convert } from '/utilities'

import Link from 'next/link'
import { Col, Row } from "antd";

export default class FooterElement extends React.Component {
    render(){
        let lists = this.props.children.map((item, i) => {
        return (
            <p key={i} style={{fontSize:'0.8em', margin: 'auto'}}>
                <Link 
                key={i} 
                href={'/'+convert(this.props.page)+'/'+convert(item)}>
                    {item}
                </Link>
            </p>
        )})
        return(
            <div style={{margin: 'auto'}}>
                <p style={{fontSize:'1.2em', fontWeight:'bold', margin: 'auto'}}>
                    <Link 
                    href={'/'+convert(this.props.page)}>
                        {this.props.page}
                    </Link>
                </p>
                {lists}
            </div>
        )
    }
}