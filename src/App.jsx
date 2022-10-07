import { Suspense } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(route)
import route from './route';

function App() {

  return <Suspense>
    <RouterProvider router={router} />
  </Suspense>


}

export default App
