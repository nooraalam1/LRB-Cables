import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Firebase/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/cartItems?email=${user?.email}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [user?.email]);

    return (
        <div>
            {data.length}
        </div>
    );
};

export default Dashboard;