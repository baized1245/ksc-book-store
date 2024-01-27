import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LogOut = () => {
    const { logout } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathName || "/"


    const handleLogout = () => {
       logout()
       .then(() => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Logout Successfully",
            showConfirmButton: false,
            timer: 2500
          });    
          navigate(from, { replace: true });
       })
       
       
    }

  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button onClick={handleLogout} className='bg-rose-700 px-8 py-3 text-2xl text-center text-white font-semibold hover:bg-rose-900 transition-all ease-in duration-300 rounded'>Logout</button>
    </div>
  )
}

export default LogOut