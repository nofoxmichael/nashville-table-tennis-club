import React from 'react';

class Cancellation extends React.Component {
    capitalizeFully(string) {
        return string.toUpperCase();
    }

    render () {
        console.log(this.props);
        return (
            <p>{this.props.cancellation.node.day} {this.props.cancellation.node.date} at {this.props.cancellation.node.location} is <span className="cancelled">{this.capitalizeFully(this.props.cancellation.node.type)}!</span></p>
        )
    }
}

export default Cancellation;