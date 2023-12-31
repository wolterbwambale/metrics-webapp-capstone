import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../components/Redux/store';
import HomePage from '../components/pages/HomePage';

test('HomePage matches snapshot', () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <HomePage />
      </Router>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
