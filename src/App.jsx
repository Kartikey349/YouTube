import './App.css'
import { Header } from './component/Header'
import { Body } from './component/Body'
import {Provider } from "react-redux"
import store from './utils/Store'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { WatchPage } from './component/WatchPage'
import { MainContainer } from './component/MainContainer'

const appRouter = createBrowserRouter([{
    path:"/",
    element: <Body />,
    children: [{
      path:"/",
      element: <MainContainer />
    },{
      path:"/watch",
      element:<WatchPage />
    }]
}])

function App() {

  return (
    <Provider store={store}>
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
   </Provider>
  )
}

export default App
