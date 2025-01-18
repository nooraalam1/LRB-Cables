import { useContext, useEffect, useState } from "react";
import {  Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Firebase/AuthProvider";
import { FiShoppingCart } from "react-icons/fi";
import axios from "axios";



const Navbar = () => {
const { user, logoutUser } = useContext(AuthContext)
const [data, setData] = useState([])
useEffect(() => {
  axios.get(`http://localhost:3000/cartItems?email=${user?.email}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
}, [user?.email]);



  function handlelogout() {
    logoutUser()
  }
  return (
    <nav>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><NavLink to='/'>Home</NavLink> </li>
              <li><NavLink to='/menu'>Menu</NavLink> </li>
              <li><NavLink to='/shop'>Shop</NavLink> </li>
              {
              user && <li><NavLink to='/dashboard'>Dashboard</NavLink> </li>
            }
              <li><NavLink to='/contact'>Contact</NavLink> </li>
              <div>
                {
                  user ? <li><button onClick={handlelogout}>Logout</button> </li> : <div>
                    <div className="flex justify-center items-center">
                      <li><NavLink to='/login'>Login</NavLink> </li>
                      <li><NavLink to='/registration'>Registration</NavLink> </li>
                    </div>
                  </div>
                }

              </div>


            </ul>
          </div>
          <a className="btn btn-ghost md:text-xl">Noor's Nourishment</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to='/'>Home</NavLink> </li>
            <li><NavLink to='/menu'>Menu</NavLink> </li>
            <li><NavLink to='/shop'>Shop</NavLink> </li>
            {
              user && <li><NavLink to='/dashboard'>Dashboard</NavLink> </li>
            }
            <li><NavLink to='/contact'>Contact</NavLink> </li>
            <div>
              {
                user ? <li><button onClick={handlelogout}>Logout</button> </li> : <div>
                  <div className="md:flex justify-center items-center">
                    <li><NavLink to='/login'>Login</NavLink> </li>
                    <li><NavLink to='/registration'>Registration</NavLink> </li>
                  </div>
                </div>
              }
            </div>
          </ul>
        </div>
        <div className="flex gap-1 justify-end items-center">
          <div className="">
            
           <Link to='/dashboard' className="flex justify-center items-center btn btn-sm bg-yellow-200"><FiShoppingCart /><p>{user?.email && data.length}</p></Link>
          </div>
          <div><p className="text-xs">{user && user.email}</p></div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;