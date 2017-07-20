import axios from 'axios';
import { GET_PARTY_INFO, INCREMENT_PARTY_SIZE, DECREMENT_PARTY_SIZE } from './actionTypes';

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

const incrementPartySize = () => {
  return {
    type: INCREMENT_PARTY_SIZE,
    payload: 1
  }
}


export { getPartyInfo, incrementPartySize };
