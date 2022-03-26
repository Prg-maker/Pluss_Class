import { Global } from "./styles/Global"

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { ListTasks } from "./pages/ListTasks"


function App() {

  return (
   <>
    <BrowserRouter>
      <Global/>
      <Routes>

        <Route path="/" element={<ListTasks/>}/>

      </Routes>
    
    </BrowserRouter>
   </>
  )
}

export default App
