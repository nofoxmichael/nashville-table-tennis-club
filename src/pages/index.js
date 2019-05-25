import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";

import ReactTooltip from "react-tooltip";
import ContactForm from "../components/ContactForm";
import Schedule from '../components/Schedule';
import Welcome from "../components/Welcome";
import Administrators from "../components/Administrators";
import MailingList from "../components/MailingList";

class Homepage extends React.Component {
    handleClick(url) {
        window.open(url, "_blank");
    }

    render() {
        const siteTitle = "Nashville Table Tennis Club";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <Welcome></Welcome>

                <Schedule></Schedule>

                <Administrators></Administrators>

                <MailingList></MailingList>

                <ContactForm></ContactForm>
                
                <ReactTooltip />
            </Layout>
        );
    }
}

export default Homepage;
