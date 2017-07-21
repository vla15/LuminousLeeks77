import axios from 'axios';
import { CHANGE_PARTY_SIZE } from './actionTypes';

const changePartySize = newPartySize => {
  return {
    type: CHANGE_PARTY_SIZE,
    payload: newPartySize
  }
}

export { changePartySize };
