import React from 'react'
import Link from 'gatsby-link'
import filter from 'lodash/filter'
import T from 'prop-types';

import { rhythm } from '../utils/typography'
import Cards from './Cards'

const descriptions = {
  "design": "",
  "software": "",
  "leadership": ""
}

export default class Projects extends React.Component {
  static propTypes = {
    posts: T.array.isRequired,
    category: T.string.isRequired
  }
  render() {
    if (!this.props.posts || !this.props.category) { return <div/>; }
    var postsInCategory = filter(this.props.posts,
        (post) => (post.node.frontmatter.category === this.props.category));
    var categoryCamelCase = this.props.category[0].toUpperCase() +
                            this.props.category.substring(1);
    return (
      <div css={styles.projects}>
        <div css={styles.header}> 
          <h1 css={{margin: 0}}> {categoryCamelCase} Projects </h1>
          <hr css={{margin: 0, padding: 0}} />
        </div>
        <Cards posts={postsInCategory} stylesOverride={{}} />
      </div>
    )
  }
}

const styles = {
  header: {
    alignSelf: 'center',
    padding: rhythm(1),
  },
  projects: {
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    flexBasis:'90vw',
    marginTop: rhythm(1),
    marginBottom: rhythm(1),
    marginLeft: '5vw',
    marginRight: '5vw',
    boxShadow: '1px 1px 2px #888',
  }
}
    