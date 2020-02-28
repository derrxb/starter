import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/layout';
import SEO from '../components/seo';

// eslint-disable-next-line react/prop-types
const MdxPage = ({ children, pageContext: { frontmatter }, pageContext }) => (
  <Layout>
    <SEO title={frontmatter.title} />

    <MDXProvider>{children}</MDXProvider>
  </Layout>
);

MdxPage.propTypes = {
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MdxPage;
