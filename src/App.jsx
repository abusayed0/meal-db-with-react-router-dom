
import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/common-routes';

function App() {
  

  return (
    <div className="flex justify-center">
      <div className="max-w-[1440px] mx-2 md:mx-5 lg:mx-16">
      <RouterProvider router={router}>
    </RouterProvider>
    </div>
    </div>
  )
}

export default App
