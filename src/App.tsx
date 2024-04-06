import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Main } from './pages/Main'
import { Sell } from './pages/Sell'
import { Root } from './pages/Root'
import { ErrorPage } from './pages/ErrorPage'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: '/sell',
        element: <Sell />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
