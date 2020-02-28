import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import theme from '../utils/theme';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
`;

const Body = styled.div`
  margin: 1em 5em;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  padding: 0 5em;
`;

const Layout = ({ children }) => (
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
          <Header siteTitle={data.site.siteMetadata.title} />

          <Body>{children}</Body>

          <Footer>© 2018 Derrick Bol</Footer>
        </Wrapper>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
