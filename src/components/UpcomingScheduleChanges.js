import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Cancellations from './Cancellations';

class UpcomingScheduleChanges extends React.Component {
    render() {
      this.props.cancellations.shift()
      return (
          <div className="col-6">
              <header className="major">
                  <h2>Upcoming Schedule Changes</h2>
              </header>
              {this.props.cancellations.length > 0 ? (
                  <Cancellations cancellations={this.props.cancellations}></Cancellations>
              ) : (
                  <p>There are no upcomimng schedule changes!</p>
              )}
          </div>
      )
    }
}

export default () => (
    <StaticQuery
        query={graphql`
          query ScheduleChanges {
            allCancellationsYaml {
              edges {
                node {
                  date(formatString: "MMMM DD")
                  day
                  location
                  type
                  startTime
                }
              }
            }
          }
        `}
        render={(data) => <UpcomingScheduleChanges cancellations={data.allCancellationsYaml.edges} />}
    />
);
