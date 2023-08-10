import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './componenets/Loginpage/LoginPage';
// import Header from './componenets/Header/Header';
import SignupPage from './componenets/SignupPage/SignupPage';
import Main from './componenets/Main/Main';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element: <SignupPage></SignupPage>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      }
    ]
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
