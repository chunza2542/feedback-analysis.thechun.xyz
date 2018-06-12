import React from 'react'
import ReactDOM from 'react-dom'
import styled, {injectGlobal} from 'styled-components'

import Application from './components/App'
import Header from './components/Header'
import Footer from './components/Footer'
import {media} from './core/styled'
import registerServiceWorker from './registerServiceWorker'

// global style belong here
injectGlobal`
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`

const Wrapper = styled.div`
  min-height: calc(100vh - 45px - 30px);

  &:after {
    content: '';
    display: block;
  }
`

const App = () => (
  <div>
    <Wrapper>
      <Header />
      <Application />
    </Wrapper>
    <Footer />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
