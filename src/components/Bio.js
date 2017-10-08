import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

export default class Bio extends React.Component {
  render() {
    var styles = this.props.asCard ? cardBioStyles : verticalBioStyles;
    var text = (this.props.asCard ?
          <div>
            Hi, I’m Prabhas, and I love creating meaningful products for people.
            I design products, develop software, and lead teams.
            <br/>
            I get inspiration from the beauty of nature, the playfulness of children, the tenacity of immigrants, and the goodness of humanity. 
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
    width: rhythm(2),
    height: rhythm(2),
  },
  innerContainer: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    marginTop: rhythm(.5), 
    marginBottom: rhythm(.5)
  },
  text: {
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
    '@media(max-width: 439px)': { /* Mobile and Phablet */
      margin: 0
    },
    '@media(min-width: 440px) and (max-width: 800px)': { /* tablet */
      margin: rhythm(.5)
    },
  },
  img: {
    width: rhythm(3),
    height: rhythm(3),
    margin: rhythm(1),
    '@media(max-width: 439px)': { /* Mobile and Phablet */
      margin: 0,
      marginTop: rhythm(.5)
    },
    '@media(min-width: 440px) and (max-width: 800px)': { /* tablet */
      margin: rhythm(1),
      marginBottom: 0
    }
  },
  innerContainer: {
    flexBasis: '60vw',
    background: '#fff',
    boxShadow: '1px 1px 2px #888',
    display: 'flex',
    alignItems: 'center',
    margin: rhythm(1),
    '@media(max-width: 439px)': { /* Mobile and Phablet */
      boxShadow: 'none',
      flexDirection: 'column',
      textAlign: 'center',
      flexBasis: '100%',
      margin: 0,
    },
    '@media(min-width: 440px) and (max-width: 800px)': { /* tablet */
      flexDirection: 'column',
      textAlign: 'center',
    }
  },
  txt: {
    '@media(max-width: 439px)': {
      padding: rhythm(.5)  ,
      paddingBottom: rhythm(1)
    },
    padding: rhythm(1), 
    minWidth: '250px'
  }
}