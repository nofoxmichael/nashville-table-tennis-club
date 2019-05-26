import React from 'react';

class MailingList extends React.Component {
    render() {
        return (
            <section id="four" className="main style2 special">
                <div className="container">
                    <header className="major">
                        <h2>Join our mailing list</h2>
                    </header>
                    <p>We send out monthly newsletters to keep players informed and up to date!</p>
                    <ul className="actions uniform">
                        <li><a href="http://eepurl.com/c5NPiv" target="_blank" rel="noopener noreferrer" className="button special">Sign Up</a></li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default MailingList;