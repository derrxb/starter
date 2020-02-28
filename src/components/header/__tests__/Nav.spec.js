import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, fireEvent } from '@testing-library/react';
import ReactModal from 'react-modal';
import NavMobile from '../NavMobile';

afterEach(cleanup);

ReactModal.setAppElement(document.createElement('div'));

describe('NavModal Specs', () => {
  test('renders the menu modal on `menu` click', () => {
    // Arrange
    const links = [
      {
        name: 'About',
        to: '/about',
      },
      {
        name: 'Contact',
        to: '/book',
      },
    ];

    const { getByTestId, getByText } = render(<NavMobile links={links} />);

    // Act
    fireEvent.click(getByText(/menu/i));

    // Assert
    expect(getByTestId('menu-nav-modal')).toBeInTheDocument();
  });
});
