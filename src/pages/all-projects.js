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
      <div css={styles.projectsContainer}>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Projects posts={posts} category={"design"}/>
        <Projects posts={posts} category={"software"}/>
        <Projects posts={posts} category={"leadership"}/>
      </div>
    )
  }
}

const styles = {
  projectsContainer: {
    /*display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'space-between',*/
    backgroundColor: '#eee'
  }
}

export const pageQuery = graphql`
  query allProjectsQuery {
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