import React, {Component} from 'react'
import styled from 'styled-components'

import Card from './ReviewModal'
import CreateNewModal from './CreateNewModal'
import * as helper from '../core/helper'
import {Container, media} from '../core/styled'

const AppContainer = styled.div`
  padding: 20px 0;

  ${media.tablet`
    padding: 10px 0;
  `}
`

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  ${media.desktop`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.tablet`
    grid-template-columns: auto;
  `}
`

class App extends Component {
  render = () => (
    <AppContainer>
      <Container>
        <Grid>
          <CreateNewModal />
          {helper.get().map((item, i) => {
            return <Card data={item} key={`card_${i}`}/>
          })}
        </Grid>
      </Container>
    </AppContainer>
  )
}

export default App
