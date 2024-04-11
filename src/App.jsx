import { Toaster } from 'react-hot-toast'
import router from './Router'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
