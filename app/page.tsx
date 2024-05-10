import React from 'react'
import Navbar from './components/Navbar'
import Details from './components/Details'
import Experiences from './components/Experiences'
import Journey from './components/Journey'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Details/>
      <Experiences/>
      <Journey/>
    </div>
  )
}
