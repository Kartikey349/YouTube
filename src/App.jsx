import './App.css'
import { Header } from './component/Header'
import { Body } from './component/Body'
import {Provider } from "react-redux"
import store from './utils/Store'

function App() {

  return (
    <Provider store={store}>
    <div>
      <Header />
      <Body />
    </div>
   </Provider>
  )
}

export default App
