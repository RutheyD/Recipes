
import { RouterProvider } from 'react-router'
import './App.css'
import HomePage from './components/HomePage'
import { myRouter } from './Router'
// import HomePage from './components/homePage'


function App() {

  // const theme[user,dispatch]=useReducer(userReducer,{fName:"ruti",})
 
  return (
    <>
    
<HomePage/>
<RouterProvider router={myRouter} />

 {/* <RouterProvider router={myRouter} /> */}
    </>
  )
}

export default App
