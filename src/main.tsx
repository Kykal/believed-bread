//ReactJS
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


//React router
import { RouterProvider } from "react-router-dom";
import router from './_configurations/router';


//Styles
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
