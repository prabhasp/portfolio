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
      <div className="cards-base-layer"
             style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: rhythm(1)
             }}>
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
    