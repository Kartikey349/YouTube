import './App.css'
import { Header } from './component/Header'
import { Body } from './component/Body'
import {Provider } from "react-redux"
import store from './utils/Store'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { WatchPage } from './component/WatchPage'
import { MainContainer } from './component/MainContainer'
import { SearchShow } from './component/SearchShow'

const appRouter = createBrowserRouter([{
    path:"/",
    element: <Body />,
    children: [{
      path:"/",
      element: (
        <div className='w-full'>  
        <Header />
        <MainContainer />
        </div>
      )
    },{
      path:"/watch",
      element:(
        <div className='w-full'>  
        <Header />
        <WatchPage />
        </div>
      )
    }, {
      path: "result",
      element: (
        <div className='w-full'>  
        <Header />
        <SearchShow />
        </div>
      )
    }]
}])

function App() {

  return (
    <Provider store={store}>
    <div>
      <RouterProvider router={appRouter} />
    </div>
   </Provider>
  )
}

export default App
