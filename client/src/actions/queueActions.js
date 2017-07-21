import axios from 'axios';
import { GET_QUEUE_INFO } from './actionTypes';

const getQueueInfo = store => {
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
