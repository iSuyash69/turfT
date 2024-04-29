"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { baseUrl } from '@/config';

const MyBookingsPopUp=({setMyBookingsPopUp})=>{

    const [bookingData,setBookingData]=useState({});
    const booking_id=localStorage.getItem("booking_id");
    const router=useRouter();

    const renderStars = (ratings) => {
        const stars = [];
        for (let i = 0; i < ratings; i++) {
          stars.push(<MdOutlineStarPurple500 key={i} className="text-2xl text-yellow-400" />);
        }
        for (let i = ratings; i < 5; i++) {
          stars.push(<MdOutlineStarPurple500 key={i} className="text-2xl text-gray-300" />);
        }
        return stars;
      };

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        try{
            const response=await axios.get(`${baseUrl}/booking/${booking_id}`);
            if(response){
                setBookingData(response?.data?.data);
            }
        }
        catch(err){
            console.log("something went wrong"+err);
        }

    }

    const closeClickHandler=()=>{
        setMyBookingsPopUp(false);
        document.body.style.overflow='';
    }

    console.log(booking_id);
    console.log(bookingData);

    return(
        <div className="fixed z-30 w-screen bg-black bg-opacity-35 backdrop-blur-xl h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <div style={{minWidth:'55vw',minHeight:'500px', maxHeight:'80vh',overflowY:'auto',overflowX:'hidden'}} className="flex shadow-md shadow-blue-300/50 text-black scrollbar-style relative py-5 px-16 bg-white bg-opacity-90 rounded-xl flex-col">
                <RxCross2 onClick={closeClickHandler} className="text-3xl absolute rounded-full  top-2 right-3 cursor-pointer"/>
                {(!bookingData || !booking_id) && <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl">No Bookings Made Yet </div>}
                {(bookingData && booking_id) && 
                    <div className="mt-16 items-center flex justify-between px-3">
                        <div className="flex flex-col pl-3">
                            <p className="font-medium text-lg">{bookingData?.turf_Name}</p>
                            <p className="text-sm">{bookingData?.location}, Nashik</p>
                            <p className="font-medium mt-3 mb-2 ">Booking Details: </p>
                            <div className="flex flex-col gap-1">
                            <p>Date Booked - {bookingData?.Date}</p>
                            <p>Time Slot - {bookingData?.time_Slot}</p>
                            <p>Cost - Rs {bookingData?.Rate_Night}</p>
                            <p>Leader - {bookingData?.user_Name}</p>
                            <p>Leader Email - {bookingData?.user_email}</p>
                            <p>No. of Players - {bookingData?.no_of_players}</p>
                            <p>Payment Method - {bookingData?.payment_method}</p>
                            </div>
                        </div>
                        <div className="pr-5 mt-12">
                            <div onClick={()=>{router.push(`/turf/${bookingData?.turf_Id}`);setMyBookingsPopUp(false)}} className="w-[242px] cursor-pointer h-[191px] overflow-hidden rounded-xl shadow-lg shadow-blue-200 ">
                                <img className="w-full h-full object-cover" src={bookingData?.src}></img>
                            </div>
                            <div className="flex items-center gap-1 justify-center mt-4">
                                <p>{"("+bookingData?.no_of_ratings+")"}</p>
                                <div className="flex ">
                                    {renderStars(bookingData?.ratings)}
                                </div>
                            </div>

                        </div>
                    </div>
                    
                }
            </div>
        </div>
    );
}

export default MyBookingsPopUp;