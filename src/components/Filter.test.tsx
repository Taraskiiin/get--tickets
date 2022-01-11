import React from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter';

it('should render Filter component', () => {
  const component = shallow(<Filter />);
  const link = component.find('a');
  expect(link.length).toBe(2);
});
