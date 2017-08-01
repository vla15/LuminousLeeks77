import React from 'react';
import { QueueChoiceList } from '../queueChoiceViews/QueueChoiceList.jsx';


class QueueChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.redux.dispatch.getQueueChoiceList();
  }

  render() {
    return (
      <QueueChoiceList redux={this.props.redux}/>
    );
  }
}

export default QueueChoice;