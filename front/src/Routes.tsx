import {BrowserRouter , Routes , Route} from 'react-router-dom'

import {PageLogin} from './pages/PageLogin'
import {FormUser} from './pages/FormUser'


import {DashBoard} from './pages/DashBoard'
import {ProferssorActivityDetails} from './pages/ProferssorActivityDetails'
import {CreateClass} from './pages/CreateClass'
import {CreateNewActivy} from './pages/CreateNewActivy'

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
