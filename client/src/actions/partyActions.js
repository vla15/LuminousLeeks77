import axios from 'axios';
import {
  GET_PARTY_INFO,
  ENQUEUE, 
  DEQUEUE
} from './actionTypes';

const getPartyInfo = store => {
  // return dispatch => {
  //   axios.get('/api/partyInfo', { params: { queueId: 1, userId: store.user.id } })
  //   .then(result => {
  //     dispatch({
  //       type: GET_PARTY_INFO,
  //       payload: result.data
  //     });
  //   });
  // };
};

const dequeueParty = (partyid, queueId) => {
  return dispatch => {
    axios.delete('/api/partyinfo//rm/1/8')
      .then(result => {
        dispatch({
          type: DEQUEUE,
          payload: null
        });
      });
  };
};

const enqueue = (userId, queueId, partySize, firstName, phoneNumber) => {
  return dispatch => {
    axios.post('/api/enqueue/1/1/1/')
    .then(result => {
      dispatch({
        type: ENQUEUE,
        payload: result.data
      });
    });
  };
};

export { getPartyInfo, enqueue, dequeueParty };
