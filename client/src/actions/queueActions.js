import axios from 'axios';
import { GET_QUEUE_INFO, CHANGE_PARTY_SIZE } from './actionTypes';

const getQueueInfo = (userId, queueId, partySize) => {
  return dispatch => {
    axios.get('/api/queueInfo/1/1')
    .then(result => {
      dispatch({
        type: GET_QUEUE_INFO,
        payload: result.data
      })
    })
  };
};

export { getQueueInfo };
