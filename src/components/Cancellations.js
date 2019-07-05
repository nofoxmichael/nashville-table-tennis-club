import React from 'react';
import Cancellation from './Cancellation';

class Cancellations extends React.Component {
    render() {
        return (
            <div>
                {this.props.cancellations.map(cancellation => (
                    <Cancellation key={cancellation.date} cancellation={cancellation}></Cancellation> 
                ))}
            </div>
        )
    }
}

export default Cancellations;