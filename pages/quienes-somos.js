import React from 'react';
import AppLayout from '/components/AppLayout/AppLayout';
import {Col, Row} from 'antd';
import PersonInfo from '/global/UI/PersonInfo/PersonInfo';

export default class extends React.Component {
    render(){
        return(
            <AppLayout>
                <h1>Quiénes Somos.</h1>
                <p>
                Somos un grupo de estudiantes que quieren que el mundo sea mejor. Como  estudiantes, sabemos mejor que nadie que el sistema educativo de hoy no funciona como debería. Estamos dispuestos a intentar mejorarlo a través de la experimentación. 
                </p>
                <p>
                Al enterarnos de la Feria Nacional de Ciencias e Ingenierías supimos que era una gran oportunidad para empezar a cambiar el mundo. Nos dimos cuenta de que muchas escuelas no tienen los recursos necesarios para invertir en equipos caros que puedan mejorar la educación, y también nos dimos cuenta de que no son necesarios. Al pensar en maneras de mejorar el sistema nos dimos cuenta de que cambiar algo pequeño, la manera de enseñar, es la mejor manera de hacerlo.
                </p>
                <Row>
                    <Col span={6} >
                        <PersonInfo />
                    </Col>
                </Row>
            </AppLayout>
        )
    }
}