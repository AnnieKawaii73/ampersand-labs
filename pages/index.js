import React from 'react';
import AppLayout from '/components/AppLayout/AppLayout'
import stylesheet from "styles/index.less";

class Home extends React.Component {
    render() {
        return(
            <AppLayout>
                <h1>Make the world better.</h1>
                <p>
                    We here at Ampersand Labs believe in a better world. Our planet has a lot of potential, and it is our mission to bring the best out of it and the people that habitate here. We are in a constant search for better alternatives to bad solutions that are currently being applied to important problems, which stops humanity from reaching its true potential. 
                </p>
                <h1>It's the little things that count.</h1>
                <p>
                    We aim to make small but significant changes to the world to make it a better place. Changing something little can inspire a great difference, which is our goal. By giving people the ability to make a small change in their environment, we are giving them the power to make a small section of the world better.
                </p>
            </AppLayout>
        ) 
    }
}

export default Home