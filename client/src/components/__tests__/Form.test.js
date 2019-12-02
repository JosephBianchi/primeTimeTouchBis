import React from 'react';
import { mount } from 'enzyme';

import App from '../App';
import Form from '../FormComponent';

it('should have an numeric field', () => {
  const wrapped = mount(<Form />);
  expect(wrapped.find('input[type="number"]').length).toEqual(1);
});

it('has a text area that updates when users type in it and the value updates', () => {
  const wrapped = mount(<App />);
  wrapped.find('.form-control').simulate('change', {
    target: { value: 34234}
  })
  wrapped.update();
  expect(wrapped.find('.form-control').prop('value')).toEqual(34234);
  wrapped.unmount();
})

it('should match the snapshot', () => {
  const wrapped = mount(<Form />);
  expect(wrapped.html()).toMatchSnapshot();
});
