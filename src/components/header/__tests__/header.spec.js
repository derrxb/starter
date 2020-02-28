import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../index';

describe('Header Spec', () => {
  it('renders correctly', () => {
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

    // Act
    const tree = renderer.create(<Header links={links} />).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
  });
});
