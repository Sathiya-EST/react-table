import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Components/Parent'
import { CardProvider } from './Context/CardContext'
import { Provider } from 'react-redux'
import { store } from './store/services'

function App() {

  return (
    <Provider store={store}>
     <Parent/>
    </Provider>
  )
}

export default App
