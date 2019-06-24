import React from 'react';

class Cancellation extends React.Component {
    capitalizeFully(string) {
        return string.toUpperCase();
    }

    render () {
        return (
            <p>{this.props.cancellation.day} {this.props.cancellation.date} at {this.props.cancellation.location} is <span className="cancelled">{this.capitalizeFully(this.props.cancellation.type)}!</span></p>
        )
    }
}

export default Cancellation;