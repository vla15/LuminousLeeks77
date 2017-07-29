import React from 'react';

import { Row, Col, tr, td } from 'react-bootstrap';

import FontAwesome from 'react-fontawesome';
import moment from 'moment';

export const QueueListItem = props => {
  return (
    <tr>

      <td>
          {props.party.first_name}
      </td>
      <td>
          {moment(moment.utc(props.party.wait_time) - moment())._i < 0 ? 0
            : moment.utc(props.party.wait_time).diff(moment(), 'minutes')}
      </td>
      <td>
          {props.party.party_size}ppl
      </td>
      <td>
          {props.party.phone_number}
      </td>
      <td>
          <FontAwesome
            name="times"
            onClick={() => {
              props.redux.dispatch.dequeueHost(1, props.party.id);
            }}
          />
      </td>
    </tr>
  );
};
