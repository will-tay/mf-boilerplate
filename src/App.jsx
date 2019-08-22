import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

class App extends Component {
  static navigate(evt, url) {
    history.pushState({}, null, url)
    evt.preventDefault()
  }

  render() {
    return (
      <Container>Hello Media Library</Container>
    )
  }
}

export default App
