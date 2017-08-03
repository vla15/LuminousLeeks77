
// import jsdomGlobal from 'jsdom-global/register'
import React from 'react';
import expect from 'expect';

import { shallow, mount, render } from 'enzyme';

const MyComponent = (props = {}) => (
  <div className="unique">
    My Component
  </div>
);

describe('A sample react component', function() {

  it('should render My Component', function() {
    expect(shallow(<MyComponent />).contains(<div className="unique">My Component</div>)).toBe(true);
  });

  it('should be selectable by class "unique"', function() {
    expect(shallow(<MyComponent />).is('.unique')).toBe(true);
  });

  // it('should mount MyComponent in a full DOM', function() {
  //   expect(mount(<MyComponent />).find('.unique').length).toBe(1);
  // });

  it('should render to static HTML', function() {
    expect(render(<MyComponent />).text()).toEqual('My Component');
  });
});
