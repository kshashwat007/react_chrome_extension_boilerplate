import React from 'react'
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client'
import '../style.css'

const App: React.FC<{}> = () => {
  return (
    <div>
      <img src='icon.png'/>
    </div>
  )
}


const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)