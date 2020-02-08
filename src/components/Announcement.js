import React from 'react';

class Announcement extends React.Component {
    render() {
        return (
            <div className="grid-wrapper">
                <div className="col-12">
                    <h4 className="announcement-header">{this.props.announcement.node.title}</h4>
                </div>
                <div className="col-12">
                    <p>{this.props.announcement.node.description}</p>
                </div>
                {this.props.announcement.node.link ? (
                    <div className="col-12">
                        <ul className="actions uniform">
                            <li><a href={this.props.announcement.node.link} target="_blank" rel="noopener noreferrer" className="button special">More Info</a></li>
                        </ul>
                    </div>
                ) : (null) }
            </div>
        )
    }
}

export default Announcement;