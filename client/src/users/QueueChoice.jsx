import React from 'react';
import { QueueChoiceList } from '../queueChoiceViews/QueueChoiceList.jsx';


class QueueChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //axios request out
    //build out a 
    console.log('hi'); 
  }

  render() {
    console.log('does queueChoice render?');
    return (
      <div>
        <QueueChoiceList />
        <QueueChoiceList />
        <QueueChoiceList />
        <QueueChoiceList />
        <QueueChoiceList />
      </div>
    );
  }
}

export default QueueChoice;