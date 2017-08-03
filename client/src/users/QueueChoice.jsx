import React from 'react';
import { QueueChoiceList } from '../queueChoiceViews/QueueChoiceList.jsx';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Header } from '../components/Header.jsx';
import QueueChoiceMap from '../components/QueueChoiceMap.jsx';

class QueueChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.redux.dispatch.getQueueChoiceList(this.props.redux.store.user.profile_id);
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
