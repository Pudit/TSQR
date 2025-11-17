import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import pic from './assets/pic.png'

function App() {
  return (
    <>
      <h2>
        15-418/15-618: The tall, skinny QR (TSQR) decomposition
      </h2>
      Name: Chutchatut Sutichavengkul, Pudit Tempattarachoke
      <br />
      <br />
      <img src={pic} width="500px"/>
      <br />

      Proposal: &nbsp;
      <a href="/TSQR/15_418_proposal.pdf" target="_blank">
        link
      </a>
    </>
  )
}

export default App
