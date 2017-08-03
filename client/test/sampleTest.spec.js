import React from 'react';
import { shallow, mount, render } from 'enzyme';
const SampleComponent = (props = {}) => (
  <div className="sample">
    Sample
  </div>
);

describe('A sample react component', function() {

  it('should render without throwing an error', function() {
    expect(shallow(<SampleComponent />).contains(<div className="sample">Sample</div>)).toBe(true);
  });

  it('should be selectable by class "sample"', function() {
    expect(shallow(<SampleComponent />).is('.sample')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<SampleComponent />).find('.sample').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<SampleComponent />).text()).toEqual('Sample');
  });
});