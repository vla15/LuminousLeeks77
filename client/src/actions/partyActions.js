import axios from 'axios';
import { GET_PARTY_INFO } from './actionTypes';

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

export { getPartyInfo };
