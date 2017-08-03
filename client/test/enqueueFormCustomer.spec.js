import expect from 'expect';
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import EnqueueFormCustomer from '../src/components/EnqueueFormCustomer.jsx';

const setup = function () {
  const props = {
  	redux: {}
  };
  return shallow(<EnqueueFormCustomer {...props}/>);
};

describe('EnqueueFormCustomer ..', () => {

  it('should EnqueueFormCustomer component', () => {
    const wrapper = setup();
    expect(wrapper.find('button').length).toBe(3);
  });
});