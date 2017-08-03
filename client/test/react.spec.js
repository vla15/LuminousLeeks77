import React from 'react';
import { shallow } from 'enzyme';


const Queue = (props = {}) => (
  <div className="queue">
    Queue
  </div>
);

describe('A queue react component', function() {

  it('should render', function() {
    expect(shallow(< Queue />).contains(<div className="queue">Queue</div>)).toBe(true);
  });

});



/*'use strict';
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const app = require('../app.js');

import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils'
import EnqueueFormCustomer from '../src/components/EnqueueFormCustomer,jsx'

console.log(')))))))EnqueueFormCustomer', EnqueueFormCustomer)
function setup() {
  const props = {
  	redux: {}
  }
  return shallow(<EnqueueFormCustomer {...props}/>);
}

describe('EnqueueFormCustomer ..', () => {

    it('passport passes false if email and password do not match', () => {
      const wrapper = setup();
      expect(wrapper.find('button').length).toBe(3)
    });

});
*/
