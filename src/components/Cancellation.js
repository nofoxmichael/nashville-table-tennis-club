import React from 'react';

class Cancellation extends React.Component {
    capitalizeFully(string) {
        return string.toUpperCase();
    }

    render () {
        return (
            <div id="cancellation-wrapper">
                <p>
                    {this.props.cancellation.node.date} at {this.props.cancellation.node.location} is <span className="cancelled">{this.capitalizeFully(this.props.cancellation.node.type)}!</span>
                </p>

                {this.props.cancellation.node.type === "Delayed" ? (
                    <p className="start-time">Play will begin at {this.props.cancellation.node.startTime}</p>
                ) : (null)}
            </div>
        )
    }
}

export default Cancellation;