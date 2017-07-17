import React from 'react';

export const enqueueForm = (props) => {
  return (
    <div className="row">
      <div className="row">
        <div className="col-xs-12">
          <h6>Party size</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2">
          <button>+</button>
        </div>
        <div className="col-xs-8">
          1
        </div>
        <div className="col-xs-2">
          <button>-</button>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <button>Enqueue</button>
        </div>
      </div>
    </div>
  );
};
