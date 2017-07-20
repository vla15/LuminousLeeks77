import React from 'react';

import { QueueOpen } from '../hostViews/QueueOpen.jsx';
import { QueueClosedEmpty } from '../hostViews/QueueClosedEmpty.jsx';
import { QueueClosedFull } from '../hostViews/QueueClosedFull.jsx';

export const Host = props => {
  return (
    <div>
      { props.redux.store.queue.isOpen
      ? <QueueOpen />
      : props.redux.store.queue.isEmpty
      ? <QueueClosedEmpty />
      : <QueueClosedFull />}
    </div>
  )
}
