import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Bio from '../components/Bio'
import { rhythm, scale } from '../utils/typography'

export default class BlogPost extends React.Component {
  redoTableOfContents(tocHTML) {
    
  }
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    var postTitle = post.frontmatter.title || siteTitle;
    console.log(post);
    var joinWithCommasAndAnd = (strs) => (
      strs.map(
        (str, idx) => {
        if (idx === strs.length - 1) {
          return str;
        } else if (idx === strs.length - 2)  {
          return str + " & ";
        } else {
          return str + ", ";
        }
      }
    ));
    return (
      <div css={styles.blogPostPage}>
        <Helmet title={postTitle} />
        <div css={styles.blogPostBody}>
          <div css={styles.titleBar}>
            <h1 css={styles.title}> 
              {post.frontmatter.title} 
            </h1>
          
            <div css={styles.roles}>
              {joinWithCommasAndAnd(post.frontmatter.role)}
            </div>  
          </div>
          <hr/>
      
        {/*  <div css={styles.toc}>
              <div css={styles.tocDiv} 
                   dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
          </div>
          <hr/>
          */}
            
          <p style={{...scale(-1/5)}} css={styles.blogParagraph} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          
          <hr style={{marginBottom: rhythm(1) }} />
          <Bio />
        </div>
      </div>
    )
  }
}

const styles = {
  blogPostPage: {
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
  blogPostBody: { 
    flex: '1 1 800px',
    margin: '3rem auto',
    maxWidth: 600,
    backgroundColor: 'white',
  },
  leftSideBar: {
    flex: '2 5 100px',
    height: '100%',
    top: rhythm(5),
    left: 0,
    '@media(max-width: 768px)': {
      display: 'none'
    },
    '> a' : {
      textDecoration: 'none',
    }
  },
  toc: {
    width: '`100%',
    marginBottom: rhythm(1),
  },
  tocDiv: {
    " ul": {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      textAlign: 'center',
    },
    " ul li ": {
      display: "inline-block",
      paddingLeft: 10, paddingRight: 10,
      marginBottom: 4,
      marginLeft: 5,
      fontWeight: 700,
    },
    " ul li a": {
      textDecoration: 'none',
      color: 'inherit',
    },
    " ul li a:hover": {
      textDecoration: 'underline',
    },
    margin: 0,
    clear: "both",
  },
  sidebar: {
    flex: '2 1 200px',
    '@media(max-width: 768px)': {
      display: 'none'
    },
  },
  blogParagraph: {
    display: 'block',
    marginBottom: rhythm(2),
    marginTop: rhythm(-1),
  },
  titleBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: rhythm(1)
  },
  title: {
    margin: 0,
  },
  roles: {
    textAlign: 'right',
  },
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      tableOfContents
      frontmatter {
        title
        role
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
