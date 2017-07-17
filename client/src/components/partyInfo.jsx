import React from 'react';

export const queueInfo = (props) => {
  return (
    <div className="row">
      <div className="row">
        <div className="col-xs-6">
          <h6>Parties Ahead</h6>
          <div>{props.party.partiesAhead}</div>
        </div>
        <div className="col-xs-6">
          <h6>Parties Behind</h6>
          <div>{props.party.partiesBehind}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6">
          <h6>My Wait Duration</h6>
          <div>{props.party.myWaitDuration}</div>
        </div>
        <div className="col-xs-6">
          <h6>My Wait Time</h6>
          <div>{props.party.myWaitTime}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <button>Dequeue</button>
        </div>
      </div>
    </div>
  );
};
