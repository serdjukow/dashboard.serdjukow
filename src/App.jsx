import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'
import Loader from './Layouts/Loader/Loader'
import './App.css'

const App = () => {
  const routes = useRoutes()
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>{routes}</Suspense>
    </BrowserRouter>
  )
}

export default App;
