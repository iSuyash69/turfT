"use client"
import MyBookingsPopUp from "@/components/MyBookingsPopUp/MyBookingsPopUp";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { baseUrl } from '@/config';

const Page=()=>{

    const router=useRouter();
    const [bookingsData,setBookingsData]=useState([]);
    const [view,setView]=useState(false);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        try{
            const response=await axios.get(`${baseUrl}/admin`);
            if(response){
                setBookingsData(response?.data);
            }
        }
        catch(err){
            console.log("something went wrong"+err);
        }
    }

    console.log(bookingsData);

    return(
        <div className="flex flex-col">
            <div className="flex fixed top-0 w-full">
                <div className="flex justify-between bg-blue-100 items-center w-full px-10 py-4">
                    <h1 className="text-lg font-medium">Admin Panel</h1>
                    <button onClick={()=>router.push("/")} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-4 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 ">Go to Website</button>
                </div>
            </div>
            <div className="flex flex-col pt-24 w-full  border  px-5 h-[95vh] border-b overflow-auto  ">
                <table class="w-full text-sm  text-center rtl:text-right text-gray-500 ">
                    <thead class="text-xs bg-blue-200 text-black uppercase">
                        <tr>
                            <th scope="col" class="px-6 py-3">Turf</th>
                            <th scope="col" class="px-3 py-3">Leader Name</th>
                            <th scope="col" class="px-3 py-3">Leader Contact No</th>
                            <th scope="col" class="px-3 py-3">Booked on</th>
                            <th scope="col" class="px-3 py-3">Booked Date</th>
                            <th scope="col" class="px-3 py-3">Time SLOT</th>
                            <th scope="col" class="px-3 py-3">Payment Method</th>
                            <th scope="col" class="px-3 py-3">More Details</th>
                        </tr>
                    </thead>
                <tbody>
                    {bookingsData?.map((item,i)=>{return(
                        <tr key={i} class="bg-[#ffffffcb] border-b font-medium text-gray-900 whitespace-nowrap ">
                            <th scope="row" class="px-6 py-4  ">
                                {item?.turf_Name}
                            </th>
                            <td class="px-3 py-4">
                                {item?.user_Name}
                            </td>
                            <td class="px-3 py-4">
                                {item?.contact_No}
                            </td>
                            <td class="px-3 py-4">
                                {new Date(item?.currentDate).toLocaleString()}
                            </td>
                            <td class="px-3 py-4">
                                {new Date(item?.Date).toLocaleDateString()}
                            </td>
                            <td class="px-3 py-4">
                                {item?.time_Slot}
                            </td>
                            <td class="px-3 py-4">
                                {item?.payment_method}
                            </td>
                            <td class="px-3 py-4">
                                <button onClick={()=>setView(true)} type="button" class="focus:outline-none text-white text-xs bg-green-700 hover:bg-green-800 font-medium rounded-lg px-5 py-2  dark:bg-green-600 dark:hover:bg-green-700 ">View</button>
                            </td>
                        </tr>
                        )}
                    )}
                </tbody>
            </table>
            {view && <MyBookingsPopUp setMyBookingsPopUp={setView}/>}

        </div>
        </div>
    );
}

export default Page;