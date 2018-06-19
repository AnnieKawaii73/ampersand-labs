import React from 'react';
import styles from './PersonInfo.module.scss'
import {JeffBezos} from '/global/assets'

export default class PersonInfo extends React.Component {
    render() {
        return(
            <div>
                <h3>Felipe Acosta</h3>
                <p>Líder</p>
                <img src={JeffBezos}/>
            </div>
        );
    }
}