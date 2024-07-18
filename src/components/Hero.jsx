import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
const Hero = () => {
    const imgData=[
        {
            url:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url:'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D' },
        {
           url:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D'
        },
    ]
    const [slider,setslider]=useState(0)
    const handlePlus=()=>{
        setslider(slider==2?0:slider+1)
    }
    useEffect(()=>{
        const sliderC=setInterval(()=>{
            handlePlus();
        },2000)
        return ()=>clearInterval(sliderC)
    },[slider]

    )
  return (
    <>
    <div className='w-[100%] h-[80vh] mx-auto z-0 '>
    <div className="flex w-[100%] h-[80vh]  mx-auto  items-center justify-between  ">
    <FaAngleLeft size={60}
    onClick={()=>setslider(slider==0?2:slider-1)}/>
    <FaAngleRight    size={60}
    onClick={handlePlus}/>
    </div>
    <div className="w-[85%] h-[80vh] bg-slate-500 mx-auto relative sm:my-10  my-10 bottom-[583px] rounded-3xl">
         
         <img src={imgData[slider].url} height="200px" width="100%"  className="h-[80vh] rounded-3xl "alt="" />
    </div>
</div>

    
    </>
  )
}

export default Hero
