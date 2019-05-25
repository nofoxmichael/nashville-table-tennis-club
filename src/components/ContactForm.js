import React from 'react';

import Contact from './Contact';

class ConactForm extends React.Component {
    render() {
        return (
            <section id="five" class="main style1 special">
                <div className="container">
                    <header className="major">
                        <h2>Contact Us</h2>
                    </header>
                    <p>If you have some questions that aren't answered on our site, please fill out the form below, and we will get back with you as soon as possible.</p>
                    <Contact></Contact>
                </div>
            </section>
        );
    }
}

export default ConactForm;