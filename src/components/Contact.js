import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <form className="fieldset" action="https://formspree.io/nashvillettc@gmail.com" method="POST">
                <input className="email-form" type="text" name="name" placeholder="name" />
                <input className="email-form" type="email" name="_replyto" placeholder="email" />
                <textarea className="email-text" name="message" placeholder="message"></textarea>
                <input type="submit" value="Send" />
            </form>
        )
    }
}

export default Contact;