import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Cancellations from './Cancellations';

class UpcomingScheduleChanges extends React.Component {
    render() {
        console.log("cancellations: " + this.props.cancellations)
        return (
            <div className="col-6">
                <header className="major">
                    <h2>Upcoming Schedule Changes</h2>
                </header>
                {this.props.cancellations ? (
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
            allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  cancellations {
                    date(formatString: "MMMM DD")
                    day
                    location
                    type
                  }
                }
              }
            }
          }
        }
        `}
        render={(data) => <UpcomingScheduleChanges cancellations={data.allMarkdownRemark.edges[0].node.frontmatter.cancellations} />}
    />
);
