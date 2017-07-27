import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { EnqueueFormCustomer } from '../components/EnqueueFormCustomer.jsx';
import { QueueStats } from '../components/QueueStats.jsx';

class QueueInfo extends React.Component {

  constructor(props) { super(props); };

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>The queue is open.</h1>
          </Col>
        </Row>
        <QueueStats redux={this.props.redux} />
        <EnqueueFormCustomer redux={this.props.redux} />
      </Grid>
    );
  }

  componentDidMount() {

  }
};

export default QueueInfo;
