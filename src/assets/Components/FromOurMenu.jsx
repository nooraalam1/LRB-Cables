import { useEffect, useState } from "react";

const FromOurMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(() => {
        fetch('../../../public/menu.json')
            .then(res => res.json())
            .then(data => setMenu(data.slice(0,6)))
    }, []);
    return (
        <div>
            <div className="">
                <h2 className="text-yellow-600 text-center text-2xl my-8">--Check It Out--</h2>
                <h2 className="text-center text-2xl mb-4">From Our Menu</h2>
                <div className="flex justify-center items-center">
                <div className="md:grid grid-cols-2 gap-5 w-[80vw] ">
                  {
                    menu.map(menu=>
                      <div key={menu._id} className="flex items-center">
                          <div className="flex items-center gap-3">
                          <img className="rounded-full h-20" src={menu.image} alt="" srcset="" />
                          <div className="">
                          <h1 className="font-bold">{menu.name}</h1>
                          <h1 className="sm:{menu.slice(0,10)}">{menu.recipe}</h1>
                          </div>
                          </div>
                          <h1 className="font-semibold text-yellow-600">${menu.price}</h1>
                      </div>
                    )
                  }
                </div>
                </div>
            </div>
        </div>
    );
};

export default FromOurMenu;