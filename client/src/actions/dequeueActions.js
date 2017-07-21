import axios from 'axios';
import { DEQUEUE } from './actionTypes';

const dequeueParty = store => {
  return dispatch => {
    axios.delete('/api/partyinfo/rm/:partyid', { params: { partyid: 1} })
      .then(result => {
        console.log('result------>', result);
        dispatch({
          type: DEQUEUE,
          payload: result.data
        });
      });
  };
};

export { dequeueParty };