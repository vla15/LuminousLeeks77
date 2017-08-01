import React from 'react';
import { QueueChoiceList } from '../queueChoiceViews/QueueChoiceList.jsx';


class QueueChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('hi'); 
  }

  render() {
    console.log('does queueChoice render?');
    return (
      <QueueChoiceList />
    );
  }
}

export default QueueChoice;