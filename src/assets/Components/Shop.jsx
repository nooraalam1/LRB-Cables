import { Helmet } from 'react-helmet-async';
import useMenu from './CustomHooks/useMenu';
import { useContext } from 'react';
import { AuthContext } from './Firebase/AuthProvider';

const Shop = () => {
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')

    const {user} = useContext(AuthContext)
    
    function handleCart(){
        console.log("Cart Clicked")
        if(user){
            alert("Added To Cart")
        }
        else{
            alert("Login First")
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
                <input type="radio" name="my_tabs_2" role="tab" className="tab lg:text-xl font-semibold checked:text-red-700 underline" aria-label="Salad" defaultChecked/>
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
                                            <button onClick={handleCart} className="text-white btn btn-primary">Add To Cart</button>
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
                        pizza.map(salad => (
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
                                            <button onClick={handleCart} className="text-white btn btn-primary">Add To Cart</button>
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
                        soup.map(salad => (
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
                                            <button onClick={handleCart} className="text-white btn btn-primary">Add To Cart</button>
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
                        dessert.map(salad => (
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
                                            <button onClick={handleCart} className="btn btn-primary text-white">Add To Cart</button>
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
                        drinks.map(salad => (
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
                                            <button onClick={handleCart} className="text-white btn btn-primary">Add To Cart</button>
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