import React from 'react'


export default class HardCodedImage extends React.Component {
  render() {
    return(
      <img src={"/" + this.props.thumbnail} css={{margin: 0}} alt="" />
    )
  }
}