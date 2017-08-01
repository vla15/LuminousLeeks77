import axios from 'axios';
import actionTypes from './actionTypes';
const userActions = {};

userActions.setUserInfo = () => {
  return dispatch => {
    axios.get('/userInfo')
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER_INFO,
          payload: result.data
        });
        dispatch({
          type: 'server/SEND_USER_ID',
          payload: result.data.id
        });
        return result;
      })
      .then(user => {
        axios.get(`/api/partyinfo/hasparty/${user.data.id}`)
          .then(party => {
            dispatch({
              type: actionTypes.SET_HAS_PARTY,
              payload: party.data.queue_id
            });
          });
      });
  };
};

module.exports = userActions;
