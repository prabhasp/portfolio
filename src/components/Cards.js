import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import { rhythm } from '../utils/typography'
import Card from './Card'

export default class Cards extends React.Component {
  render() {
    var posts = this.props.posts;
    if (!posts) { return <div/>; }
    return (
      <div className="card-container" css={styles.cardContainer}>
          {posts.map((post, index) => {
            if (post.node.path !== '/404/') {
              const title = get(post, 'node.frontmatter.title') || post.node.path;
              return (
                <Card key={index}
                      title={title}
                      thumbnail={post.node.frontmatter.img}
                      excerpt={post.node.frontmatter.excerpt}
                      link={post.node.frontmatter.path} />
              )
            }
          })}
        </div>
    )
  }
}

const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '5vw',
    background: '#eee'
  }
}
    