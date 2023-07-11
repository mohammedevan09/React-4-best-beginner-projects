import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

export const index = () => {
  return (
      <App/>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)