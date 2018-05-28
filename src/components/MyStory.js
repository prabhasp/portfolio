import React from 'react'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'
import styles from '../Bio'

export default class Bio extends React.Component {
  render() {
    
    var styles = this.props.asCard ? cardBioStyles : verticalBioStyles;
    var text = (this.props.asCard ?
          <div>
            Hi, I’m Prabhas, and I love creating meaningful products for people.
            I design products, develop software, and lead teams.
            <br/>
            I get inspiration from the beauty of nature, the playfulness of children, the tenacity of immigrants, and the goodness of humanity. 
          </div>;
    return (
      <div css={styles.outerContainer}>
        <div css={styles.innerContainer} >
          <img
            src={profilePic}
            alt={`Prabhas Pokharel`}
            css={styles.img} />
          <div css={styles.txt}> {text} </div>
        </div>
      </div>
    )
  }
}