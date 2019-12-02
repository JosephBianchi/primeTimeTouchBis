import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';
import Header from '../HeaderComponent';
import Form from '../FormComponent';
import PrimeNumbers from '../PrimeNumbersComponent';

describe('dumb component rendering', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<App />);
  })

  it('shows a header', () => {
    expect(wrapped.find(Header).length).toEqual(1);
  })

  it('shows a form', () => {
    expect(wrapped.find(Form).length).toEqual(1);
  })

  it('does not initially show a list of prime numbers', () => {
    expect(wrapped.find(PrimeNumbers).length).toEqual(0);
  })
})

it('should match the snapshot', () => {
  const wrapped = mount(<Form />);
  expect(wrapped.html()).toMatchSnapshot();
});
