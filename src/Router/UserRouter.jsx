import React from 'react'
import { Route,Routes} from "react-router-dom";
import UserHome from '../Pages/User/UserHome';
import UserLogin from '../Pages/User/UserLogin';
import UserSignUp from '../Pages/User/UserSignUp';
import UserProductDetails from '../Pages/User/UserProductDetails';

function UserRouter() {
  return (
    <div>
         <Routes>
            <Route path='/' element={<UserHome/>}/>
            <Route path='/login' element={<UserLogin/>}/>
            <Route path='/signup' element={<UserSignUp/>}/>
            <Route path='/single' element={<UserProductDetails/>}/>

        </Routes>

    </div>
  )
}

export default UserRouter