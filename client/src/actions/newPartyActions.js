import axios from 'axios';
import {
  CHANGE_PARTY_SIZE,
  CHANGE_FIRST_NAME,
  CHANGE_PHONE_NUMBER
} from './actionTypes';

const changePartySize = partySize => {
  return {
    type: CHANGE_PARTY_SIZE,
    payload: partySize
  }
}

const changeFirstName = firstName => {
  return {
    type: CHANGE_FIRST_NAME,
    payload: firstName
  }
}

const changePhoneNumber = phoneNumber => {
  return {
    type: CHANGE_PHONE_NUMBER,
    payload: phoneNumber
  }
}

export {
  changePartySize,
  changeFirstName,
  changePhoneNumber
};
