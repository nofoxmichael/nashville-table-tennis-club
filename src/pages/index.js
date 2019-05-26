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
                <Helmet title={siteTitle}>
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                </Helmet>

                <Welcome></Welcome>

                <Schedule></Schedule>

                <Administrators></Administrators>

                <MailingList></MailingList>

                <ContactForm></ContactForm>

                <ReactTooltip />

                <script>
                    {`if (window.netlifyIdentity) {
                        window.netlifyIdentity.on("init", user => {
                            if (!user) {
                                window.netlifyIdentity.on("login", () => {
                                    document.location.href = "/admin/";
                                });
                            }
                        });
                    }`}
                </script>
            </Layout>
        );
    }
}

export default Homepage;
