import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import FeedbackCards from '../FeedbackCards/FeedbackCards';
import customer1 from '../../../images/customer-1.png'
import customer2 from '../../../images/customer-2.png'
import customer3 from '../../../images/customer-3.png'
import { useState } from 'react';

const clientFeedback = [
    {
        img:customer1,
        name:'Nash Patric',
        job_title:'CEO, Manpol',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorem impedit labore saepe dicta sunt.'
    },
    {
        img:customer2,
        name:'Miriam Barron',
        job_title:'CEO, Manpol',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam cumque eos quos iusto labore. Cumque!'
    },
    {
        img:customer3,
        name:'Bria Malone',
        job_title:'CEO, Manpol',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, doloribus. Aspernatur esse ad eum culpa!'
    }
]

const Feedback = () => {
    const [allFeedback, setAllFeedback] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allfeedback')
        .then(res => res.json())
        .then(data => setAllFeedback(data))
    },[])
    return (
        <Container>
            <Row className="justify-content-center">
                <h3 >Clients <span style={{color: '#7AB259'}}>Feedback</span> </h3>
            </Row>
            <Row className="justify-content-center">
                {
                    // clientFeedback.map(client => <FeedbackCards client={client} ></FeedbackCards>)
                    allFeedback.map(feedback => <FeedbackCards feedback={feedback}></FeedbackCards> )
                }
            </Row>
        </Container>
    );
};

export default Feedback;