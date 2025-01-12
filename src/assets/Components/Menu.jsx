import { Helmet } from 'react-helmet-async';
import useMenu from './CustomHooks/useMenu';

const Menu = () => {
    const [menu] =useMenu();
    const filtered = menu.filter(item=>item.category==='offered')
    const dessert = menu.filter(item=>item.category==='dessert')
    const pizza = menu.filter(item=>item.category==='pizza')
    const salad = menu.filter(item=>item.category==='salad')
    const soup = menu.filter(item=>item.category==='soup')
    return (
        <div>
            <Helmet>
                <title>Noor | Menu</title>
            </Helmet>
            <h1 className="text-center text-3xl font-semibold my-4">--Our Menu--</h1>
            <div className="flex justify-center items-center">

            <h1 className="lg:w-4/5 text-center text-2xl font-semibold text-yellow-300 bg-gray-500 mb-2">Today's Offer</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="md:grid grid-cols-2 gap-5 w-[80vw] ">
                  {
                    filtered.map(filtered=>
                      <div key={filtered._id} className="flex items-center">
                          <div className="flex items-center gap-3">
                          <img className="rounded-full h-20" src={filtered.image} alt="" srcset="" />
                          <div className="">
                          <h1 className="font-bold">{filtered.name}</h1>
                          <h1 className="">{filtered.recipe}</h1>
                          </div>
                          </div>
                          <h1 className="font-semibold text-yellow-600">${filtered.price}</h1>
                      </div>
                    )
                  }
                </div>
                </div>
                <div className="">
                    <div className="flex justify-center items-center">

                <h1 className="lg:w-4/5 text-center text-2xl font-semibold text-yellow-300 bg-gray-500 my-2">Dessert</h1>
                    </div>
            <div className="flex justify-center items-center">
                <div className="md:grid grid-cols-2 gap-5 w-[80vw] ">
                  {
                    dessert.map(filtered=>
                      <div key={filtered._id} className="flex items-center">
                          <div className="flex items-center gap-3">
                          <img className="rounded-full h-20" src={filtered.image} alt="" srcset="" />
                          <div className="">
                          <h1 className="font-bold">{filtered.name}</h1>
                          <h1 className="">{filtered.recipe}</h1>
                          </div>
                          </div>
                          <h1 className="font-semibold text-yellow-600">${filtered.price}</h1>
                      </div>
                    )
                  }
                </div>
                </div>
                </div>
                <div>
                    <div className="flex justify-center items-center">

                <h1 className="lg:w-4/5 text-center text-2xl font-semibold text-yellow-300 bg-gray-500 my-2">Pizza</h1>
                    </div>
            <div className="flex justify-center items-center">
                <div className="md:grid grid-cols-2 gap-5 w-[80vw] ">
                  {
                    pizza.map(filtered=>
                      <div key={filtered._id} className="flex items-center">
                          <div className="flex items-center gap-3">
                          <img className="rounded-full h-20" src={filtered.image} alt="" srcset="" />
                          <div className="">
                          <h1 className="font-bold">{filtered.name}</h1>
                          <h1 className="">{filtered.recipe}</h1>
                          </div>
                          </div>
                          <h1 className="font-semibold text-yellow-600">${filtered.price}</h1>
                      </div>
                    )
                  }
                </div>
                </div>
                </div>
                <div>
                    <div className="flex justify-center items-center">

                <h1 className="lg:w-4/5 text-center text-2xl font-semibold text-yellow-300 bg-gray-500 my-2">Salad</h1>
                    </div>
            <div className="flex justify-center items-center">
                <div className="md:grid grid-cols-2 gap-5 w-[80vw] ">
                  {
                    salad.map(filtered=>
                      <div key={filtered._id} className="flex items-center">
                          <div className="flex items-center gap-3">
                          <img className="rounded-full h-20" src={filtered.image} alt="" srcset="" />
                          <div className="">
                          <h1 className="font-bold">{filtered.name}</h1>
                          <h1 className="">{filtered.recipe}</h1>
                          </div>
                          </div>
                          <h1 className="font-semibold text-yellow-600">${filtered.price}</h1>
                      </div>
                    )
                  }
                </div>
                </div>
                </div>
                <div>
                    <div className=' flex justify-center items-center'>

                <h1 className=" lg:w-4/5 text-center text-2xl font-semibold text-yellow-300 bg-gray-500 my-2">Soup</h1>
                    </div>
            <div className="flex justify-center items-center">
                <div className="md:grid grid-cols-2 gap-5 w-[80vw] ">
                  {
                    soup.map(filtered=>
                      <div key={filtered._id} className="flex items-center">
                          <div className="flex items-center gap-3">
                          <img className="rounded-full h-20" src={filtered.image} alt="" srcset="" />
                          <div className="">
                          <h1 className="font-bold">{filtered.name}</h1>
                          <h1 className="">{filtered.recipe}</h1>
                          </div>
                          </div>
                          <h1 className="font-semibold text-yellow-600">${filtered.price}</h1>
                      </div>
                    )
                  }
                </div>
                </div>
                </div>
        </div>
    );
};

export default Menu;