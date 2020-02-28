import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Media from '../shared/Media';
import NavMobile from './NavMobile';
import NavOption from './NavOption';

const HeaderNav = styled.nav`
  margin: 0;
  background: white;
  height: 4.5em;
  padding: 0 5em;
  display: flex;
  align-items: center;
  ${Media.lessThan('laptop')`
    padding: 0 1em;
  `};
`;

const Title = styled(Link)`
  text-decoration: none;
  font-family: 'Oswald';
  color: ${({ nature }) => (nature === 'default' ? '#444' : 'white')};
  align-self: center;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1em;
  margin-right: auto;
  letter-spacing: 0.06em;

  ${Media.greaterThan('bigMonitor')`
    font-size: 2em;
  `};
`;

const Links = styled.div`
  margin-left: auto;

  ${Media.lessThan('laptop')`
    display: none;
  `};
`;

const Header = ({ siteTitle, links, nature, ...rest }) => (
  <HeaderNav>
    <Title to="/" nature={nature}>
      {siteTitle}
    </Title>

    <Links>
      {links.map(item => (
        <NavOption
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
          data-testid="nav-link"
          key={`${item.name}`}
          to={item.to}
          nature={nature}
          activeStyle={{
            textDecoration: 'underline',
          }}
        >
          {item.name}
        </NavOption>
      ))}
    </Links>

    <NavMobile links={links} nature={nature} />
  </HeaderNav>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  nature: PropTypes.oneOf(['default', 'fixed']),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Header.defaultProps = {
  siteTitle: ``,
  nature: 'default',
};

export default Header;
