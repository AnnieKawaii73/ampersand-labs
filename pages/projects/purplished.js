import React from 'react';
import AppLayout from '/components/AppLayout/AppLayout'

export default class extends React.Component {
    render(){
        return(
            <AppLayout>
                <h1>Purplished, a tool for teachers.</h1>
                <h2>What?</h2>
                <p>
                    Purplished is all about giving teachers more time to be creative and work on making better classes. One of the biggest issues teachers have is not being able to spend their desired amount of time in planning their classes, because they must make sure the works of their students are graded. Purplished is a tool for teachers aimed at making the creation and revision of exams as simple as possible so that they can spend their time doing better things, such as improving their classes.
                </p>
                <h2>Why?</h2>
                <p>
                    We here at Ampersand Labs believe education is a key component of our society. Unfortunately, the area is often overlooked and seen as less important. Such an important part of our society should be constantly improving, but it has remained the same for over 100 years. By doing something as simple as reducing the amount of time teachers waste at making and grading tests, we can be sure that they will spend their free time in making their classes better.
                </p>
                <h2>How?</h2>
                <p>We divide it in three parts:</p>
                <h3>1. Creation:</h3>
                <p>
                    In this part, the user, through our website, will create their exams. We believe that making exams is an extremely repetitive task, even more when the teacher has multiple groups and wants to make sure there is no cheating. Purplished require the data to be entered only once, and it can create thousands of different combinations for each set of concepts, including true or false questions and multiple-choice ones.
                </p>
                <h3>2. Application:</h3>
                <p>
                    Purplished divides the students into classes and is capable of making a different exam for each student. The exams are built automatically using the data from step one and are delivered in pdf format for teachers to print and use. It can be modified, in case teachers want to incorporate essay-based questions into their tests.
                </p>
                <h3>3. Revision:</h3>
                <p>
                    Purplished is not only about creating tests with ease, but also about making the revision process as effortless as possible. With the Purplished app, teachers will be able to scan the tests, and the app will automatically grade them and store the scores directly in the website, so that the teacher only has to open her computer to retrieve the data.
                </p>
            </AppLayout>
        )
    }
}