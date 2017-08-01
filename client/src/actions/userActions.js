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
      });
  };
};

// userActions.setPartyInfo = userId => {
//   return dispatch => {
//     axios.get(`/api/partyInfo/hasparty${userId}`)
//       .then(result => {
//         dispatch({
//           type: actionTypes.SET_HAS_PARTY,
//           payload: result.data.id
//         });
//       });
//   };
// };

module.exports = userActions;
