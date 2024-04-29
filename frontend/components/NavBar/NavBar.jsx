"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import MyBookingsPopUp from "../MyBookingsPopUp/MyBookingsPopUp";

const NavBar=()=>{

    const [myBookingsPopUp,setMyBookingsPopUp]=useState(false);
    const router=useRouter();

    if(myBookingsPopUp){
        document.body.style.overflow='hidden';
    }
    else{
        document.body.style.overflow='auto';
    }

    return(
        <div>
            <div className="fixed z-20 top-0 flex w-full items-center bg-opacity-90 backdrop-blur-sm justify-between bg-blue-100 py-5 px-10">
                <div onClick={()=>{router.push("/")}} className="text-xl font-[600] cursor-pointer">TurfTime</div>
                <div className="flex gap-5 list-none items-center">
                <button onClick={()=>setMyBookingsPopUp(true)} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-4 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 ">My Bookings</button>
                <li className="cursor-pointer font-medium">About Us</li>
            </div>
        </div>
            {myBookingsPopUp && <MyBookingsPopUp setMyBookingsPopUp = {setMyBookingsPopUp}/>}
        </div>
    );
}

export default NavBar;
