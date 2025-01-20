import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../assets/Components/Firebase/AuthProvider'
import { NavLink, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './Firebase/firebase.config';
import axios from 'axios';
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

const Registration = () => {
    
const { createUser } = useContext(AuthContext);
const navigate = useNavigate()

//Info Adding to Database
function AddToDB(name,email){
    const values = {name,email}
    axios.post('http://localhost:3000/userInfo', values)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

}


    //google registration
    function handleGoogleRegi() {
        signInWithPopup(auth, provider)
        .then((result) => {
                //console.log(result.user.displayName,result.user.email)
                AddToDB(result.user.displayName,result.user.email)
                swal(result.user.displayName,"","info")
                navigate('/')
            })
            .catch((error) => {
                swal(error.code,"","warning")
               
                return

            })
    }

    const handleRegi = (e) => {
        e.preventDefault();
       
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;

        createUser(email, password)

            .then((result) => {
                if (result) {
                    AddToDB(name,email)
                    swal(result.user.displayName,"","info")
                    navigate('/')
                    e.target.reset()
                }
            })
            .catch((error) => {
                 e.target.reset()
                swal(error.code,"","warning")
                e.target.reset()
                return
            });

    }


    return (
        <div>
            <Helmet>
                <title>Noor | Registrarion</title>
            </Helmet>
            <div className="text-center bg-pink-500 py-5 ">
                <h1 className="text-center my-4 font-bold text-3xl text-white ">Please Register</h1>
                <div className="lg:flex justify-evenly items-center">
                    <div>
                        <form onSubmit={handleRegi}>
                            <div className=''>
                                <input type="email" required name="email" placeholder="Email" className="input input-error my-2 " /> <br />
                                <input type="text" required name="name" placeholder="Your Name" className="input input-error my-2 " /> <br />
                                <input type="password" required name="password" placeholder="Password" className="input input-error my-2" /> <br />

                                <button className=' btn btn-sm text-black'>Register</button> <br />


                            </div>
                        </form>
                        <button onClick={handleGoogleRegi} className="my-2 btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Register with Google
                        </button> <br />
                        <NavLink to='/login'>Already have an account?</NavLink>
                    </div>
                    <div className="sm:flex justify-center items-center">
                        <img src="../../../public/Img/authentication2.png" alt="" className='' />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Registration;