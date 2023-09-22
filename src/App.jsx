
import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/common-routes';

function App() {
  

  return (
    <div className="max-w-[1440px] mx-auto px-2 md:px-6 lg:px-20">
      <RouterProvider router={router}>
    </RouterProvider>
    </div>
  )
}

export default App
