import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import ReactTooltip from 'react-tooltip';
import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui/core/Button';
import EmailPage from './email';

import roger_dickson from '../assets/images/roger_dickson.jpg'
import pic03 from '../assets/images/pic03.jpg'
import brian_rassavong from '../assets/images/brian_rassavong.jpg'
import michael_smith from '../assets/images/michael_smith.jpg'
import ball_and_racket from '../assets/images/ball_and_racket.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Nashville Table Tennis Club";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Welcome to NTTC!</h2>
                            </header>
                            <p>
                                We are Nashville's premiere table tennis organization.
                                We meet 3 times a week throughout Willamson county. We welcome all ages and skill levels.
                                Balls are provided by the club, and we do have paddles for those visiting that do not have
                                their own equipment. It costs only $3 per session to play, cash only, no membership required. <br />
                                We hope to see you on the courts!
                            </p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={ball_and_racket} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Schedule</h2>
                            </header>
                            <div class="location">
                                <Button  class="nav" href="https://goo.gl/maps/V6uRMi4NWeK2" data-tip="112 Everbright Ave, Franklin, TN 37064">
                                        <NavigationIcon></NavigationIcon>
                                </Button>
                                <p>Thursday: 7:00 PM - 9:00 PM at Academy Park</p>
                            </div>
                            <div class="location">
                                <Button  class="nav" href="https://goo.gl/maps/enQ7WXaSFXK2" data-tip="112 Everbright Ave, Franklin, TN 37064">
                                        <NavigationIcon></NavigationIcon>
                                </Button>
                                <p>Friday: 5:30 PM - 8:30 PM at Nolesnville Recreation Center</p>
                            </div>
                            <div class="location">
                                <Button  class="nav" href="https://goo.gl/maps/yr8K7kjkjnA2" data-tip="112 Everbright Ave, Franklin, TN 37064">
                                    <NavigationIcon></NavigationIcon>
                                </Button>
                                <p>Sunday: 3:00 PM - 6:00 PM at Brentwood Indoor Sports Complex</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Upcoming Schedule Changes</h2>
                            </header>
                            <p>No upcoming schedule changes!</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Meet our administrative crew</h2>
                            </header>
                            <p>These are the people responsible for making our club possible.</p>
                        </div>
                        <div className="col-3">
                            <span className="image fit admin-image"><img class="admin-image" src={brian_rassavong} alt="" /></span>
                            <h3>President</h3>
                            <p><strong>Brian Rassavong</strong></p>
                        </div>
                        <div className="col-3">
                            <span className="image fit admin-image"><img class="admin-image" src={roger_dickson} alt="" /></span>
                            <h3>Vice President</h3>
                            <p><strong>Roger Dickson</strong></p>
                        </div>
                        <div className="col-3">
                            <span className="image fit"><img class="admin-image" src={michael_smith} alt="" /></span>
                            <h3>IT and Secretary</h3>
                            <p><strong>Michael Smith</strong></p>
                        </div>
                        <div className="col-3">
                            <span className="image fit admin-image"><img class="admin-image" src={pic03} alt="" /></span>
                            <h3>WCPR Coordinator</h3>
                            <p><strong>Bob Gammon</strong></p>
                        </div>
                    </div>
                </section>

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

                <section id="five" class="main style1 special">
                    <div className="container">
                        <header className="major">
                            <h2>Contact Us</h2>
                        </header>
                        <EmailPage></EmailPage>
                    </div>
                </section>
                <ReactTooltip />
            </Layout>
        );
    }
}

export default Homepage;
