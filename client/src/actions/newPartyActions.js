import axios from 'axios';
import { INCREMENT_PARTY_SIZE, DECREMENT_PARTY_SIZE } from './actionTypes';

const incrementPartySize = () => {
  return {
    type: INCREMENT_PARTY_SIZE,
    paylod: null
  }
}

const decrementPartySize = () => {
  return {
    type: DECREMENT_PARTY_SIZE,
    payload: null
  }
}


export { incrementPartySize, decrementPartySize };
