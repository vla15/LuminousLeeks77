import React from 'react';

import { EmptyComp } from '../components/EmptyComp.jsx';
import { QueueInfo } from '../components/QueueInfo.jsx';
import { PartyInfo } from '../components/PartyInfo.jsx';

export const Info = props => {
  return (
    <div>
      { props.store.queue === null
      ? <EmptyComp />
      : props.store.party === null
      ? <QueueInfo />
      : <PartyInfo /> }
    </div>
  );
};
