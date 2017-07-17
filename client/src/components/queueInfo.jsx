import React from 'react';

export const queueInfo = (props) => {
  return (
    <div className="row">
      <div className="row">
        <div className="col-xs-6">
          <h6>Party Count</h6>
          <div>{props.queue.partyCount}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6">
          <h6>Wait Duration</h6>
          <div>{props.queue.waitDuration}</div>
        </div>
        <div className="col-xs-6">
          <h6>Wait Time</h6>
          <div>{props.queue.waitTime}</div>
        </div>
      </div>
    </div>
  );
};
