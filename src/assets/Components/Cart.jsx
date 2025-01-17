import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/cartItems')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1 className="text-center font-bold text-3xl">Total: {data.length}</h1>
            {
                data.map(data=>(
                    <div key={data._id}>
                        {data.name} 
                    </div>
                ))
            }
        </div>
    );
};

export default Cart;