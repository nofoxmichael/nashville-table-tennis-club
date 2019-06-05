import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Cancellations from './Cancellations';

class UpcomingScheduleChanges extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: cancellations } = data.allMarkdownRemark;

        return (
            <div className="col-6">
                <header className="major">
                    <h2>Upcoming Schedule Changes</h2>
                </header>
                {this.props.cancellations ? (
                    <Cancellations cancellations={cancellations}></Cancellations>
                ) : (
                    <p>No upcoming cancellations!</p>
                )}
            </div>
        )
    }
}


UpcomingScheduleChanges.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array
        })
    })
}

export default () => (
    <StaticQuery
        query={graphql`
            {
                cancellations {
                    date
                    location
                    type
                }
            }
        `}
        render={(data) => <UpcomingScheduleChanges cancellations={data} />}
    />
);