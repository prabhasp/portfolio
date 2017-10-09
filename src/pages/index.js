import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'
import Bio from '../components/Bio'
import Projects from '../components/Projects'


export default class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    return (
      <div css={{backgroundColor: '#eee'}}>
        <Bio asCard={true} />
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Projects posts={posts} category={"design"}/>
        <Projects posts={posts} category={"software"}/>
        <Projects posts={posts} category={"leadership"}/>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fileAbsolutePath
          frontmatter {
            path
            img
            title
            excerpt
            category
          }
        }
      }
    }
  }
`
