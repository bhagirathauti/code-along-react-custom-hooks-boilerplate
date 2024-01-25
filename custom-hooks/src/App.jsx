import React, { useState } from 'react'
import useStorage from './CustomHooks/UseStorage'

export default function App() {
  const {setStorage} = useStorage()
  return (
    <div>
      <input type="text" placeholder='Enter Something'onChange={(e)=>setStorage(e.target.value)}/>
    </div>
  )
}
