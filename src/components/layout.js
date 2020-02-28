import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import ReactModal from 'react-modal';
import Header from './header';
import theme from '../utils/theme';

typeof window !== 'undefined' &&
  ReactModal.setAppElement(document.getElementById('___gatsby'));

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  background: rgb(256, 256, 256);
`;

const Body = styled.div`
  margin: 1em 5em;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

const Footer = styled.div`
  padding: 2em 5em;
`;

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

const Layout = ({ children, header }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header
            siteTitle={data.site.siteMetadata.title}
            links={links}
            nature={header}
          />

          <Body>{children}</Body>

          <Footer>© 2018 Derrick Bol</Footer>
        </Wrapper>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.oneOf(['default', 'fixed']),
};

Layout.defaultProps = {
  header: 'default',
};

export default Layout;
