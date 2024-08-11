import { Children, Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Aboute from './Pages/Aboute/Aboute'
import Projects from './Pages/Projects/Projects'
import Layout from './Component/Layout/Layout'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
function App(){
let route = createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {path:"/",element:<Home/>},
    {path:"/Aboute",element:<Aboute/>},
    {path:"/Projects",element:<Projects/>},
    {path:"/Contact",element:<Contact/>}
  ]}
  
])
 
  return (
    <>
    <div className='dark:bg-darkdark dark:text-light'>
    <RouterProvider router={route}>
    </RouterProvider>
    </div>
    </>
  )
}

export default App
