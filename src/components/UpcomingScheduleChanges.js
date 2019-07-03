import React from 'react';

import Cancellations from './Cancellations';

class UpcomingScheduleChanges extends React.Component {
    render() {
        return (
            <div className="col-6">
                <header className="major">
                    <h2>Upcoming Schedule Changes</h2>
                </header>
                {this.props.cancellations ? (
                    <Cancellations></Cancellations>
                ) : (
                    <p>Thursday July, 4th at Academy Park is <span className="cancelled">CANCELLED!</span></p>
                )}
            </div>
        )
    }
}

export default UpcomingScheduleChanges;
