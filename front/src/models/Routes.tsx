import {BrowserRouter , Routes , Route} from 'react-router-dom'

import {PageLogin} from '../pages/PageLogin'
import {FormUser} from '../pages/FormUser'


import {DashBoard} from './PagesProfessor/DashBoard'
import {ProferssorActivityDetails} from './PagesProfessor/ProferssorActivityDetails'
import {CreateClass} from './PagesProfessor/CreateActivy'
import {CreateNewActivy} from './PagesProfessor/CreateNewActivy'

export function RoutesWeb(){


  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLogin/>}/>
          <Route path='/formuser' element={<FormUser/>}/>


          <Route path='/dashboard/admin/:name' element={<DashBoard/>}/>
          <Route path='/dashboard/admin/:name/:materia/:turma/:id' element={<ProferssorActivityDetails/>}/>
          <Route path='/admin/create' element={<CreateClass/>}/>
          <Route path='/admin/create/activy' element={<CreateNewActivy/>}/>




        </Routes>
      </BrowserRouter>

    </>
  )


}
