import { expect } from 'chai';
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import App from '../src/containers/App.jsx';


describe('<App />', () => {
  it('should call componentDidMount', () => {
    const wrapper = mount(App);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});