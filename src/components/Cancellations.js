import React from 'react';
import Cancellation from './Cancellation';

class Cancellations extends React.Component {
    render() {
        console.log(this.props.cancellations)
        return (
            <div>
                {this.props.cancellations.map(cancellation => (
                    <Cancellation cancellation={cancellation}></Cancellation>
                ))}
            </div>
        )
    }
}

export default Cancellations;