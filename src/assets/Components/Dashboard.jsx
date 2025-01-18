import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Firebase/AuthProvider";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])
    const price = data.reduce((x, y) => x + parseFloat(y.price), 0)
    useEffect(() => {
        axios.get(`http://localhost:3000/cartItems?email=${user?.email}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [user?.email]);

  

    

    function handleDelete(x){
    
       const id = x._id;       
        axios.delete(`http://localhost:3000/cartItems?email=${user?.email}&&id=${id}`) 
        .then(res => console.log(res.data))
        .catch(err => console.log(err));    
         
        
    }

    return (
        <div>
            <Helmet>
                <title>Noor | Dashboard</title>
            </Helmet>
            <div className="lg:flex justify-evenly items-center text-center text-3xl font-semibold my-6 gap-2">
                <h1 className="">Items Added: {data.length}</h1>

                Total Price: {price}

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4">
                {
                    data.map(data => (

                        <div key={data._id} className="">
                            <div className="card bg-base-100 shadow-sm ">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={data.image}
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <div className="flex gap-2">
                                        <h2 className="card-title">{data.name}</h2>
                                        <h2 className="card-title text-yellow-600">${data.price}</h2>
                                    </div>
                                    <p>{data.recipe}</p>
                                    <div className="card-actions">
                                        <button onClick={()=>handleDelete(data)} className="text-white btn bg-red-700">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    ))
                }
            </div>

            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex justify-center items-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary text-white">Open Dashboard</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content md:min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li className="text-center">{user.email}</li> <hr />
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;