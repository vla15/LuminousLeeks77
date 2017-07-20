import React from 'react';

import { QueueOpen } from '../hostViews/QueueOpen.jsx';
import { QueueClosedEmpty } from '../hostViews/QueueClosedEmpty.jsx';
import { QueueClosedFull } from '../hostViews/QueueClosedFull.jsx';

export const Host = props => {
  return (
    <div>
      { props.store.queue.isOpen
      ? <QueueOpen />
      : props.store.queue.isEmpty
      ? <QueueClosedEmpty />
      : <QueueClosedFull />}
    </div>
  )
}
