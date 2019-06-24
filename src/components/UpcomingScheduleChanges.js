import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Cancellations from './Cancellations';

class UpcomingScheduleChanges extends React.Component {
    render() {
        console.log(this.props.cancellations)
        return (
            <div className="col-6">
                <header className="major">
                    <h2>Upcoming Schedule Changes</h2>
                </header>
                {this.props.cancellations ? (
                    <Cancellations cancellations={this.props.cancellations}></Cancellations>
                ) : (
                    <p>No upcoming cancellations!</p>
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
                  cancellation {
                    date(formatString: "MMMM DD")
                    location
                    type
                  }
                }
              }
            }
          }
        }
        `}
        render={(data) => <UpcomingScheduleChanges cancellations={data.allMarkdownRemark.edges[0].node.frontmatter.cancellation} />}
    />
);