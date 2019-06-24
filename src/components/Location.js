import React from "react";
import NavigationIcon from '@material-ui/icons/Directions';
import Button from '@material-ui/core/Button';

import locationStyles from '../assets/css/location.module.css';

class Location extends React.Component {
    render () {
        return (
            <div className="location">
                <Button target="_blank" rel="noopener noreferror" href={this.props.url} data-tip={this.props.address}>
                    <NavigationIcon className={locationStyles.nav}></NavigationIcon>
                </Button>
                <p>{this.props.time} at {this.props.venue}</p>
                <p className="address">{this.props.address}</p>
            </div>
        )
    }
}

export default Location;