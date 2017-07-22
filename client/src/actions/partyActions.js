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

const dequeue = (partyid, queueId) => {
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

const enqueue = (user_id, queue_id, party_size, first_name, phone_number) => {
  return dispatch => {
    axios.put(`/api/partyInfo/add/${queue_id}/${user_id}/${party_size}/${first_name}/${phone_number}`)
    .then(result => {
      console.log('result', result);
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
