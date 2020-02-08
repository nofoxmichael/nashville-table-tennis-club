import React from 'react';

import Location from './Location';
import UpcomingScheduleChanges from './UpcomingScheduleChanges';
import Announcements from "../components/Announcements";

class Schedule extends React.Component {
    render() {
        return (
            <section id="two" className="main style2">
                <div className="grid-wrapper">
                    <div className="col-6">
                        <header className="major">
                            <h2>Schedule</h2>
                        </header>
                        <Location url="https://goo.gl/maps/V6uRMi4NWeK2" address="112 Everbright Avenue Franklin, TN 37064" time="Thursday: 6:00 PM - 9:00 PM" venue="Academy Park"></Location>
                        <Location url="https://goo.gl/maps/3LuJE47J1ty" address="7250 Nolensville Road Nolensville, TN 37135" time="Friday: 5:30 PM - 8:30 PM" venue="Nolensville Rec Center"></Location>
                        <Location url="https://goo.gl/maps/9gQqLFvfpxD2" address="920 Heritage Way Brentwood, TN 37027" time="Sunday: 3:00 PM - 6:00 PM" venue="Indoor Sports Complex"></Location>
                    </div>
                    <UpcomingScheduleChanges></UpcomingScheduleChanges>
                </div>
                <Announcements></Announcements>
            </section>
        );
    }
}

export default Schedule;