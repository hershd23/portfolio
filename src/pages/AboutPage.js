import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello Lorem Ipsum.</p>
                <p>I am the best</p>
            </Content>
        </div>
    );
}

export default AboutPage;