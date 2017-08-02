import React from 'react';
import { QueueChoiceList } from '../queueChoiceViews/QueueChoiceList.jsx';
import { Header } from '../components/Header.jsx';


class QueueChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.redux.dispatch.getQueueChoiceList();
  }

  render() {
    return (
      <div>
        <Header redux={this.props.redux}/>
        <QueueChoiceList redux={this.props.redux}/>
      </div>
    );
  }
}

export default QueueChoice;
