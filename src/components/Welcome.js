import React from 'react';

import ball_and_racket from "../assets/images/ball_and_racket.jpg";

class Welcome extends React.Component {
    render() {
        return (
            <section id="one" className="main style1">
                <div className="grid-wrapper">
                    <div className="col-6">
                        <header className="major">
                            <h2>Welcome to NTTC!</h2>
                        </header>
                        <p>
                            We are Nashville's premiere table tennis organization, and have been for 30 years.
                            In partnership with Williamson County Parks and Recreation, we meet 3 times a week for 3 hours per session.
                            Tournament-grade Butterfly Europa 25 tables and nets, and Nittaku 40+ balls are provided by the club.
                            For those that may be new to the sport or visiting, the club also has spare paddles at each facility for players to use.
                            It costs only $3 per session to play, cash only, no membership required.
                                All ages and skill levels are welcomed. <br /> <br />
                            We hope to see you on the courts!
                            </p>
                    </div>
                    <div className="col-6">
                        <span className="image fit"><img src={ball_and_racket} alt="" /></span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Welcome;