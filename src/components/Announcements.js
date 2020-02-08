import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Anncouncement from './Announcement';

class Anncouncements extends React.Component {

    render() {
        this.props.announcements.shift()
        if (this.props.announcements.length > 0) {
            return (
                <section id="two" className="main style2 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Anncouncements</h2>
                            </header>
                        </div>
                    </div>
                    {this.props.announcements.map((announcement, index) => (
                        <div>
                            <Anncouncement key={announcement.id} announcement={announcement}></Anncouncement>
                        </div>
                    ))}
                </section>
            )
        } else {
            return null
        }
    }
}

export default () => (
    <StaticQuery
        query={graphql`
          query Announcements {
            allAnnouncementsYaml {
              edges {
                node {
                  id
                  title
                  description
                  link
                }
              }
            }
          }
        `}
        render={(data) => <Anncouncements announcements={data.allAnnouncementsYaml.edges} />}
    />
);