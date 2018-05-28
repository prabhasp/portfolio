import React from 'react'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

export default class Bio extends React.Component {
  render() {
    var styles = this.props.asCard ? cardBioStyles : verticalBioStyles;
    var text = (this.props.asCard ?
          <div>
            Hi, I’m Prabhas, and I love catalyzing innovation. I lead teams that design products, develop software, change existing systems, and occassionally break some rules.
            <br/> <br/>
            I am originally from Nepal, have worked across five continents, and just spent two amazing years at the <a href="http://dschool.stanford.edu">Stanford d.school</a>. I get inspiration from the beauty of nature, the playfulness of children, the tenacity of immigrants, and the goodness of humanity. 
          </div> :
          <div>
            <strong>Prabhas Pokharel</strong> loves creating meaningful products for people. <br/> 
            He has designed products, developed software, and created collaborative efforts
            across five continents, and currently lives in the SF Bay Area.
          </div>);
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

const verticalBioStyles = {
  outerContainer: { 
    display: 'flex', 
    justifyContent: 'center', 
    textAlign: 'center',
    background: 'white'
  },
  img: {
    margin: rhythm(1 / 2),
    width: rhythm(3),
    height: rhythm(3),
  },
  innerContainer: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    marginTop: rhythm(.5), 
    marginBottom: rhythm(.5)
  },
  txt: {
    padding: rhythm(1), 
    minWidth: '250px'
  }
}
const cardBioStyles = {
  outerContainer: {
    display: 'flex',
    flexBasis: '40vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    margin: rhythm(1),
    '@media(max-width: 1024px)': { /* desktop and below */
      margin: rhythm(.5),
    },
    '@media(max-width: 768px)': { /* tablet and below */
      margin: rhythm(.25),
    },
    '@media(max-width: 480px)': { /* Mobile and Phablet */
      margin: rhythm(.25),
    },
  },
  img: {
    width: rhythm(4),
    height: rhythm(4),
    margin: rhythm(1),
    '@media(max-width: 768px)': { /* tablet */
      margin: rhythm(1),
      marginRight: rhythm(.5)
    },
    '@media(max-width: 480px)': { /* Mobile and Phablet */
      margin: rhythm(.5),
      marginBottom: 0,
    },
  },
  innerContainer: {
    flexBasis: '80vw',
    background: '#fff',
    boxShadow: '1px 1px 2px #888',
    display: 'flex',
    alignItems: 'center',
    margin: rhythm(1),
    '@media(max-width: 768px)': { /* tablet */
      flexBasis: '80vw',
      fontSize: '0.9em',
      lineHeight: 1.6,
      margin: rhythm(.5),
    },
    '@media(max-width: 480px)': { /* Mobile and Phablet */
      flexDirection: 'column',
      textAlign: 'center',
      flexBasis: '100%',
      margin: rhythm(.25),
    },
  },
  txt: {
    '@media(max-width: 439px)': {
      padding: rhythm(.5),
      paddingBottom: rhythm(1)
    },
    padding: rhythm(1), 
    minWidth: '250px'
  }
}