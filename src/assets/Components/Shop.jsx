import { Helmet } from 'react-helmet-async';
import useMenu from './CustomHooks/useMenu';
import { useContext } from 'react';
import { AuthContext } from './Firebase/AuthProvider';
import swal from 'sweetalert';
import axios from 'axios';

const Shop = () => {
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    
    const { user } = useContext(AuthContext)

    function handleCart(x) {

        const _id = x._id
        const email = user?.email
        const name = x.name
        const image = x.image
        const description = x.recipe
        const price = x.price
        const values = { _id, email, name, image, description, price }
        if (user) {
            axios.post('http://localhost:3000/addtocart', values)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))

            swal("Added To Cart!", "", "success");           
            
        }
        else {
            swal("Login First", "", "info");
        }

    }


    return (
        <div>
            <Helmet>
                <title>Noor | Shop</title>
            </Helmet>
            <h1 className="text-center text-3xl font-semibold my-4">--Our Shop--</h1>

            {/* name of each tab group should be unique */}
            <div role="tablist" className="tabs tabs-border ">
                <input type="radio" name="my_tabs_2" role="tab" className="tab lg:text-xl font-semibold checked:text-red-700 underline" aria-label="Salad" defaultChecked />
                <div className=" tab-content border-base-300 bg-base-100 p-10 ">
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                        {
                            salad.map(salad => (
                                <div key={drinks._id} className="">
                                    <div className="card bg-base-100 shadow-sm ">
                                        <figure className="px-10 pt-10">
                                            <img
                                                src={salad.image}
                                                className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <div className="flex gap-2">
                                                <h2 className="card-title">{salad.name}</h2>
                                                <h2 className="card-title text-yellow-600">${salad.price}</h2>
                                            </div>
                                            <p>{salad.recipe}</p>
                                            <div className="card-actions">
                                                <button onClick={() => handleCart(salad)} className="text-white btn btn-primary">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab lg:text-xl font-semibold checked:text-red-700 underline" aria-label="Pizza" />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                        {
                            pizza.map(pizza => (
                                <div key={pizza._id} className="">
                                    <div className="card bg-base-100 shadow-sm ">
                                        <figure className="px-10 pt-10">
                                            <img
                                                src={pizza.image}
                                                className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <div className="flex gap-2">
                                                <h2 className="card-title">{pizza.name}</h2>
                                                <h2 className="card-title text-yellow-600">${pizza.price}</h2>
                                            </div>
                                            <p>{pizza.recipe}</p>
                                            <div className="card-actions">
                                                <button onClick={() => handleCart(pizza)} className="text-white btn btn-primary">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab lg:text-xl font-semibold checked:text-red-700 underline" aria-label="Soup" />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                        {
                            soup.map(soup => (
                                <div key={soup._id} className="">
                                    <div className="card bg-base-100 shadow-sm ">
                                        <figure className="px-10 pt-10">
                                            <img
                                                src={soup.image}
                                                className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <div className="flex gap-2">
                                                <h2 className="card-title">{soup.name}</h2>
                                                <h2 className="card-title text-yellow-600">${soup.price}</h2>
                                            </div>
                                            <p>{soup.recipe}</p>
                                            <div className="card-actions">
                                                <button onClick={() => handleCart(soup)} className="text-white btn btn-primary">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab lg:text-xl font-semibold checked:text-red-700 underline" aria-label="Dessert" />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                        {
                            dessert.map(dessert => (
                                <div key={dessert._id} className="">
                                    <div className="card bg-base-100 shadow-sm ">
                                        <figure className="px-10 pt-10">
                                            <img
                                                src={dessert.image}
                                                className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <div className="flex gap-2">
                                                <h2 className="card-title">{dessert.name}</h2>
                                                <h2 className="card-title text-yellow-600">${dessert.price}</h2>
                                            </div>
                                            <p>{dessert.recipe}</p>
                                            <div className="card-actions">
                                                <button onClick={() => handleCart(dessert)} className="btn btn-primary text-white">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab lg:text-xl font-semibold checked:text-red-700 underline " aria-label="Drinks" />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                        {
                            drinks.map(drinks => (
                                <div key={drinks._id} className="">
                                    <div className="card bg-base-100 shadow-sm ">
                                        <figure className="px-10 pt-10">
                                            <img
                                                src={drinks.image}
                                                className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <div className="flex gap-2">
                                                <h2 className="card-title">{drinks.name}</h2>
                                                <h2 className="card-title text-yellow-600">${drinks.price}</h2>
                                            </div>
                                            <p>{drinks.recipe}</p>
                                            <div className="card-actions">
                                                <button onClick={() => handleCart(drinks)} className="text-white btn btn-primary">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shop;