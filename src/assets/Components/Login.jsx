import { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from './Firebase/AuthProvider';
import {   NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
import app from './Firebase/firebase.config';
import swal from 'sweetalert';


const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const Login = () => {

    const navigate = useNavigate()

//Google Login
function handleGoogleLogin(){
    signInWithPopup(auth, provider)
    .then((result) => {
        swal(result?.user?.displayName,"","success")
        navigate('/')
    })
    .catch((error) => {
        swal(error.code,"","warning")
       
        return

    })
}

    const {loginUser} = useContext(AuthContext)
    function handleLogin(e) {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const captcha = e.target.captcha.value;
        if (validateCaptcha(captcha)==false) {
            alert('Captcha Did not Match');
            return;
        }
   
       
       

        loginUser(email,password)
        .then((result) => {
            console.log(result)
            swal(result?.user?.displayName,"","success")
            navigate('/')
        })
        .catch((error) => {
            swal(error.code,"","warning")
           
            return;
    
        })
          
    }

    useEffect(() => {
        loadCaptchaEnginge(7);
    }, [])
    return (
        <div>
            <Helmet>
                <title>Noor | Login</title>
            </Helmet>
            <div className="text-center bg-purple-500 py-5 ">
                <h1 className="text-center my-4 font-bold text-3xl text-white ">Please Login</h1>
                <div className="lg:flex justify-evenly items-center">
                   <div>
                   <form onSubmit={handleLogin}>
                        <div className=''>
                            <input type="email" name="email" placeholder="Email" className="input input-error my-2 " /> <br />
                            <input type="password" name='password' placeholder="Password" className="input input-error my-2" /> <br />
                            <div className='flex justify-center items-center'>
                                <LoadCanvasTemplateNoReload />
                            </div> <br />
                            <input type="text" name='captcha' placeholder="Enter The Captcha" className="input input-error my-2" /> <br />
                            <button className=' btn btn-sm text-black'>Login</button> <br />
                           

                        </div>
                    </form>
                     <button onClick={handleGoogleLogin} className="my-2 btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button> <br />
                            <NavLink to='/registration'>Don't have an account?</NavLink>

                   </div>
                    <div className="sm:flex justify-center items-center">
                        <img src="../../../public/Img/authentication2.png" alt="" className='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;