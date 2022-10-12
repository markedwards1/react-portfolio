import React from 'react'
import NavBar from './nav/Navbar'
// props is what brings the content in 
export default function BaseLayout(props) {
  return (
    <main>
        <NavBar/>


        {props.children}



    </main>
  )
}
