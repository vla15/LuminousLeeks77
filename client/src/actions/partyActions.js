import axios from 'axios';
import { ENQUEUE, DEQUEUE, GET_PARTY_INFO, UPDATE_PARTY_SIZE, UPDATE_FIRST_NAME, UPDATE_PHONE_NUMBER } from './actionTypes.js';

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

const dequeue = partyid => {
  return dispatch => {
    axios.delete('/api/partyinfo/rm/1', { params: { partyid: 1} })
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


const updatePartySize = partySize => {
  if (0 < partySize && partySize < 9) {
    return {
      type: UPDATE_PARTY_SIZE,
      payload: partySize
    }
  }
}

const updateFirstName = firstName => {
  return {
    type: UPDATE_FIRST_NAME,
    payload: firstName
  }
}

const updatePhoneNumber = phoneNumber => {
  return {
    type: UPDATE_PHONE_NUMBER,
    payload: phoneNumber
  }
}

export { enqueue, dequeue, getPartyInfo, updatePartySize, updateFirstName, updatePhoneNumber };
