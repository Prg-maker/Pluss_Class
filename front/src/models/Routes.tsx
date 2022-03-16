import {BrowserRouter , Routes , Route} from 'react-router-dom'

import {PageLogin} from './PagesLogin/PageLogin'
import {FormUser} from './PagesLogin/FormUser'


import {DashBoard} from './PagesProfessor/DashBoard'

export function RoutesWeb(){


  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLogin/>}/>
          <Route path='/formuser' element={<FormUser/>}/>



          <Route path='/dashboard' element={<DashBoard/>}/>

        </Routes>
      </BrowserRouter>

    </>
  )


}
