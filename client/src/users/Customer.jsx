import React from 'react';

import { QueueClosed } from '../customerViews/QueueClosed.jsx';
import { QueueInfo } from '../customerViews/QueueInfo.jsx';
import { PartyInfo } from '../customerViews/PartyInfo.jsx';

export const Customer = props => {
    return (
      <div>
        { props.redux.store.queue === null
        ? <QueueClosed />
        : props.redux.store.party === null
        ? <QueueInfo redux={props.redux} />
        : <PartyInfo /> }
      </div>
    )
}
