import React from 'react';
import ReactDOM from 'react-dom';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    events:[
                {
                    title: 'Academy Park Meeting',
                    start: '2018-11-29T19:00',
                    end: '2018-11-29T21:00',
                    color: 'green'
                },
                {
                    title: 'Nolesnville Rec Center Meeting',
                    start: '2018-11-30T19:00',
                    end: '2018-11-30T21:00',
                    color: 'red'
                },
                {
                    title: 'ISC Meeting',
                    start: '2018-12-02T15:00',
                    end: '2018-12-02T18:00',
                    color: 'yellow'
                }
            ],
    }
  }

  render() {
    return (
      <div id="event-component">
        
      </div>
    );
  }
}

export default Calendar
