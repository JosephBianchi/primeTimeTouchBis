import React from 'react';
import { mount } from 'enzyme';

import App from '../App';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <App propsPrimeNumbers={{
      median: [ 3, 2 ],
      primes: [ 2, 3 ],
      errorMessage: ''
    }} />
  );
})

it('should render a list of median numbers that match the list length of the propsPrimeNumbers array', () => {
  expect(wrapped.find('.card').length).toEqual(2);
})

it('should match the snapshot', () => {
  expect(wrapped.html()).toMatchSnapshot();
});
