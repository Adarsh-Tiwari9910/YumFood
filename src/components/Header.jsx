import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

const Header = () => {
    const [a,seta]=useState(false);
  return (
     <div className="s flex justify-between py-[20px] px-[20px] text-[20px] font-semibold shadow">
        <div>
            <p>Yummy<span className="text-[#F4CE14]">Food</span></p>
        </div>
        <div>
            <ul className="gap-4 sm:flex hidden">
                <li>Home</li>
                <li>About Us</li>
                <li>Offers</li>
                <li>Sign In</li>
            </ul>
        </div>
        { a?(
            

            <div className="bg-slate-400 flex absolute right-0 top-0 h-[100vh] w-[200px] z-20">
            <RxCross1 className="absolute right-2 top-2"
            onClick={()=>seta(!a)}/>
            <ul className=" py-10 px-10 ">
                <li className="py-5">Home</li>
                <li className="py-5">About Us</li>
                <li className="py-5">Offers</li>
                <li className="py-5">Sign In</li>
            </ul>
        </div>
        )
:("")
        }
        <div>
            <p><GiHamburgerMenu
            onClick={()=>seta(!a)}
            className="sm:hidden block"
            
            /></p>
            <p><FaShoppingCart size={30}
             className="sm:block hidden"/></p>
        </div>
     </div>
  )
}

export default Header
