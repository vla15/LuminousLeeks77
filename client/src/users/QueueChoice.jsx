import React from 'react';
import { QueueChoiceList } from '../queueChoiceViews/QueueChoiceList.jsx';
import { QueueChoiceMap } from '../components/QueueChoiceMap.jsx';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class QueueChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.redux.dispatch.getQueueChoiceList(this.props.redux.store.user.profile_id);
  }

  render() {
    return (
      <QueueChoiceList redux={this.props.redux}/>
    );
  }
}

export default QueueChoice;