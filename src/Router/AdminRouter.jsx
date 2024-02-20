import React from 'react'
import { Route,Routes} from "react-router-dom";
import AdminEditProduct from '../Pages/Admin/AdminEditProduct';
import AdminHome from '../Pages/Admin/AdminHome';
import AdminLogin from '../Pages/Admin/AdminLogin';

function AdminRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AdminHome/>}/>
            <Route path='/login' element={<AdminLogin/>}/>
            <Route path='/edit' element={<AdminEditProduct/>}/>

        </Routes>

    </div>
  )
}

export default AdminRouter