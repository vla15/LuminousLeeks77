import React from 'react';

import { QueueClosed } from '../views/QueueClosed.jsx';
import { QueueInfo } from '../views/QueueInfo.jsx';
import { PartyInfo } from '../views/PartyInfo.jsx';

export const Customer = props => {
    return (
      <div>
        { props.store.queue !== null
        ? <QueueClosed />
        : props.store.party === null
        ? <QueueInfo />
        : <PartyInfo /> }
      </div>
    )
}
