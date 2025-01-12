import { Helmet } from 'react-helmet-async';
import useMenu from './CustomHooks/useMenu';

const Menu = () => {
    const [menu] =useMenu();
    const filtered = menu.filter(item=>item.category==='popular')
    const dessert = menu.filter(item=>item.category==='dessert')
    const pizza = menu.filter(item=>item.category==='pizza')
    const salad = menu.filter(item=>item.category==='salad')
    const soup = menu.filter(item=>item.category==='soup')
    return (
        <div>
            <Helmet>
                <title>Noor | Menu</title>
            </Helmet>
            <h1 className="text-center text-3xl font-semibold">Our Menu</h1>
            <h1 className="text-center text-2xl font-semibold text-blue-400">Today's Offer</h1>
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
                <h1 className="text-center text-2xl font-semibold text-blue-400">Dessert</h1>
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
                <h1 className="text-center text-2xl font-semibold text-blue-400">Pizza</h1>
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
                <h1 className="text-center text-2xl font-semibold text-blue-400">Salad</h1>
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
                <h1 className="text-center text-2xl font-semibold text-blue-400">Soup</h1>
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