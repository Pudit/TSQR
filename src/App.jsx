import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
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
      <img src={pic} width="500px" />
      <br />

      <a href="/TSQR/15_418_proposal.pdf" target="_blank">
        <FontAwesomeIcon icon={faFilePdf} /> Proposal
      </a>
      <br />
      <a href="/TSQR/15_418_milestone.pdf" target="_blank">
        <FontAwesomeIcon icon={faFilePdf} /> Midsemester Report
      </a>
      <br />
      <a href="https://github.com/Pudit/TSQR_IMPL/tree/OpenMP" target="_blank">
        <FontAwesomeIcon icon={faGithub} /> OpenMP
      </a>
      <br />
      <a href="https://github.com/Pudit/TSQR_IMPL/tree/OpenMPI" target="_blank">
        <FontAwesomeIcon icon={faGithub} /> OpenMPI
      </a>
    </>
  )
}

export default App
