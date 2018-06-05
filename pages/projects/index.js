import React from 'react';
import AppLayout from '/components/AppLayout/AppLayout'

export default class extends React.Component {
    render(){
        return(
            <AppLayout>
                <h1>Projects</h1>
                <p>
                    We are currently working in developing Purplished, a tool designed to give teachers more time for creating awesome classes. There is more information on the "Purplished" tab below the "Projects" one.
                </p>
            </AppLayout>
        )
    }
}