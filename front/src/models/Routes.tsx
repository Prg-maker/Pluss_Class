import {BrowserRouter , Routes , Route} from 'react-router-dom'

import {PageLogin} from './PagesLogin/PageLogin'
import {FormUser} from './PagesLogin/FormUser'


import {DashBoard} from './PagesProfessor/DashBoard'
import {ProferssorActivityDetails} from './PagesProfessor/ProferssorActivityDetails'

export function RoutesWeb(){


  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLogin/>}/>
          <Route path='/formuser' element={<FormUser/>}/>
          <Route path='/dashboard/admin/:name' element={<DashBoard/>}/>
          <Route path='/dashboard/admin/:name/:id' element={<ProferssorActivityDetails/>}/>




        </Routes>
      </BrowserRouter>

    </>
  )


}
