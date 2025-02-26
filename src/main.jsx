import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Lp from './routes/Lp.jsx';

const router = createBrowserRouter([
  {
    //Elementos Pai
    path:'/',element:<App/>,
    

    //Elementos Filhos
    children:[
      {path:'/',element:<Lp/>},
    ]

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)