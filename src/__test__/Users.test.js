import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import User from '../Component/User/User';


const mockStore = configureMockStore();

describe('Users component', () => {
  test('renders Users component', () => {
    const initialState = {
      users: {
        users: [
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Jane Smith' },
        ],
        loading: false,
        error: null,
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <User />
      </Provider>
    );


    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });
});