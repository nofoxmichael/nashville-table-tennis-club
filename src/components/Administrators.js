import React from 'react';

import roger_dickson from "../assets/images/roger_dickson.jpg";
import pic03 from "../assets/images/pic03.jpg";
import brian_rassavong from "../assets/images/brian_rassavong.png";
import michael_smith from "../assets/images/michael_smith.jpg";

class Administrators extends React.Component {
    render () {
        return (
            <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Meet our administrative crew</h2>
                            </header>
                            <p>These are the people responsible for making our club possible.</p>
                        </div>
                        <div className="col-3">
                            <span className="image fit admin-image"><img className="admin-image" src={brian_rassavong} alt="" /></span>
                            <h3>President</h3>
                            <p><strong>Brian Rassavong</strong></p>
                        </div>
                        <div className="col-3">
                            <span className="image fit admin-image"><img className="admin-image" src={roger_dickson} alt="" /></span>
                            <h3>Vice President</h3>
                            <p><strong>Roger Dickson</strong></p>
                        </div>
                        <div className="col-3">
                            <span className="image fit"><img className="admin-image" src={michael_smith} alt="" /></span>
                            <h3>IT and Secretary</h3>
                            <p><strong>Michael Smith</strong></p>
                        </div>
                        <div className="col-3">
                            <span className="image fit admin-image"><img className="admin-image" src={pic03} alt="" /></span>
                            <h3>WCPR Coordinator</h3>
                            <p><strong>Bob Gammon</strong></p>
                        </div>
                    </div>
                </section>
        );
    }
}

export default Administrators;