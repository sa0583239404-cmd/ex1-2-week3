import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App1.css'
import ListItem from './compenents/CompA'
import Clock from './compenents/CompB'
import ThreeMessageButton from './compenents/CompC'

export default function App() {
  return (
    <>
      <h1> שלום תלמידה! </h1>
      <ListItem />
      <Clock />
      <ThreeMessageButton />
    </>
  )
}

