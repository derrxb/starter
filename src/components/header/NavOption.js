import styled from 'styled-components';
import { Link } from 'gatsby';
import Media from '../shared/Media';

export default styled(Link)`
  font-size: 1em;
  color: ${({ nature }) => (nature === 'default' ? '#444' : 'white')};
  text-decoration: none;
  margin-left: 1em;

  &:hover {
    border-bottom: 2px solid ${({ nature }) => (nature === 'default' ? '#444' : 'white')};
  }

  ${Media.greaterThan('bigMonitor')`
    font-size: 2em;
  `};

  ${Media.lessThan('laptop')`
    width: 100%;
    height: 100%;
    display: block;
    padding: 0.5em 1em;
    color: #444;
    font-weight: 700;
    text-decoration: none;

    &:focus,
    &:hover {
      border-bottom: none;
      text-decoration: none;
    }
  `};
`;
