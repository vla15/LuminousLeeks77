import React from 'react';
import { QueueChoiceList } from '../queueChoiceViews/QueueChoiceList.jsx';


class QueueChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <QueueChoiceList />
    );
  }
}