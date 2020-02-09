import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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
                            {this.props.welcomeText}
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

export default () => {
    <StaticQuery
        query={graphql`
          query MyQuery {
            allContentfulWelcome {
              edges {
                node {
                  welcomeText {
                    welcomeText
                  }
                }
              }
            }
          }
        `}
        render={(data) => <Welcome welcomeText={data.allContentfulWelcome.edges.node.welcomeText.welcomeText} />}
    />
};
