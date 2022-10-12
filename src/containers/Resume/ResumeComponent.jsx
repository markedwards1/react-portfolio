import React from 'react'
import { Container } from '@mui/material'
import { Box } from '@mui/system'
// import css from './ResumeComponent.module.css'
export default function ResumeComponent() {
  return (
 
<Container >
<Box
color={'white'}>
<h2 >Download Resume <a  href="./pdf/mark-resume.pdf">here</a>.</h2>


    <h2>Front-end Proficiencies</h2>
    <ol>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>Responsive Design</li>
      <li>React</li>
      <li>Bootstrap</li>
      <li>MUI</li>
      <li>Wordpress</li>

    </ol>

</Box>

<Box
color={'white'}>

    <h2>Back-end Proficiencies</h2>
    <ol>
      <li>API's</li>
      <li>Node</li>
      <li>Express</li>
      <li>MySQL, Sequellize</li>
      <li>MongoDB, Mongoose</li>
      <li>Rest</li>
      <li>GraphQL</li>

    </ol>

</Box>
</Container>


   

  )
}

