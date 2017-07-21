import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { EnqueueForm } from '../components/EnqueueForm.jsx';

class QueueInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>The queue is open.</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <h6>Party Count</h6>
            <h1>4</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={5}>
            <h6>Wait Duration</h6>
            <h1>20</h1>
          </Col>
          <Col xs={5}>
            <h6>Wait Time</h6>
            <h1>9:25pm</h1>
          </Col>
        </Row>
        <EnqueueForm redux={this.props.redux} />
      </Grid>
    );
  };

  componentDidMount() {
  }
};

export default QueueInfo;
