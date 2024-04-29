import { useState } from "react";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import BookingsPopUp from "../BookingsPopUp/BookingsPopUp";

const TurfDetails=({turfData})=>{

    const [bookingsPopUp,setBookingsPopUp]=useState(false);

    if(bookingsPopUp){
        document.body.style.overflow='hidden';
    }
    else{
        document.body.style.overflow='auto';
    }

    const renderStars = (ratings) => {
        const stars = [];
        for (let i = 0; i < ratings; i++) {
          stars.push(<MdOutlineStarPurple500 key={i} className="text-xl text-yellow-400" />);
        }
        for (let i = ratings; i < 5; i++) {
          stars.push(<MdOutlineStarPurple500 key={i} className="text-xl text-gray-300" />);
        }
        return stars;
    };

    const amenitiesArray = turfData.Amenities?.split(", ").map(item => item.trim());
    console.log(amenitiesArray);

    return(
        <div className="w-full mt-6 flex flex-col">
            <div className="w-[80%] flex self-center">
                <div className="w-[70%] flex shadow-md border shadow-gray-400 flex-col py-8 rounded-2xl">
                    <div className="flex flex-col w-full px-[5%]">
                        <span className="w-full border-blue-300 border-b-2"></span>
                        <h1 className="pl-2 mt-4  text-green-600 text-lg font-semibold">Description</h1>
                        <p className="pl-2 mt-5 mb-5 font-medium overflow-hidden max-h-[188px]">{`In ${turfData?.location} in Nashik, you'll find a mix of residential areas, commercial establishments, and recreational spaces. While the specifics of a turf might vary, you can expect a well-maintained green area suitable for outdoor activities. This could include amenities like a playground for children, open spaces for picnics or leisurely walks, and possibly designated areas for sports like cricket or football. Depending on the location and management, the turf might also host community events or sports tournaments. Overall, a turf on Gangapur Road provides a green escape within the urban landscape of Nashik, offering residents and visitors a place to unwind and engage in various outdoor activities.`}</p>
                        <span className="w-full mt-1 border-blue-300 border-b-2"></span>
                    </div>
                    <div className="flex flex-col w-full px-[5%]">
                        <h1 className="pl-2 mt-4  text-green-600 text-lg font-semibold">Pricing</h1>
                        <div className="flex items-center w-full justify-between pt-2 pl-3 ">
                            <h1 className="">Rs {turfData?.Rate_Night} for 3 hours</h1>
                            <h1 className="pr-10">Max Capacity - 15 Persons</h1>
                        </div>
                        <span className="w-full mt-6 border-blue-300 border-b-2"></span>
                    </div>
                    <div className="flex flex-col w-full px-[5%]">
                        <h1 className="pl-2 mt-4  text-green-600 text-lg font-semibold">Amenities</h1>
                        <div className="flex flex-col pl-3 pt-3 gap-2">
                            <li>Cricket Pitch</li>
                            <li>volleyball Court</li>
                            <li>Badminton Court</li>
                            {amenitiesArray?.map((amenity,index)=>{
                                return(
                                    <li>{amenity}</li>
                                );
                            })}
                        </div>
                        <span className="w-full mt-6 border-blue-300 border-b-2"></span>
                    </div>
                    <div className="flex flex-col w-full px-[5%]">
                        <h1 className="pl-2 mt-4 text-green-600 text-lg font-semibold">Contact</h1>
                        <div className="flex flex-col w-full justify pt-2 pl-3 ">
                            <h1 className="">{turfData?.owner_info}</h1>
                            <h1 className="">Ph. +910123456789</h1>
                        </div>
                        <span className="w-full mt-6 border-blue-300 border-b-2"></span>
                    </div>

                </div>
                <div className="w-[30%] ">
                    <div className="w-full flex-col sticky top-20 flex">        
                        <div className="flex flex-col bg-gray-100 self-end mt-2 border w-[90%] px-7 shadow-md rounded-2xl shadow-gray-300 py-14"> 
                            <div className="flex justify-center gap-1 items-center">
                                <FaLocationDot className="text-xl text-gray-500"/>
                                <h1 className="text-gray-500 text-xl font-light">{turfData?.location}</h1>
                            </div>
                            <div className="flex justify-center mt-3 items-center gap-1">
                                <h1 className="text-gray-400 font-light">{"("+turfData?.no_of_ratings+")"}</h1>
                                <div className="flex">
                                    {renderStars(turfData?.ratings)}
                                </div>
                            </div>
                            <h1 className="text-center mt-2 leading-tight font-semibold text-lg">{turfData?.turf_Name}</h1>
                            <div className="flex gap-1 items-center mt-4 justify-center">
                                <FaClock className="bg-white text-lg text-blue-300 rounded-full"/>
                                <p className="text-sm font-medium">Open until 9:00pm</p>
                            </div>
                            <div className="mt-5 self-center">
                                <button onClick={()=>{setBookingsPopUp(true)}} className="bg-green-600 hover:bg-green-700 text-lg font-semibold py-3 rounded-xl shadow-md shadow-gray-400 px-8 text-white">Book Now</button>
                            </div> 
                        </div>
                        <div className="pl-8 w-[90%] flex self-end  flex-col mt-8">
                            <h1 className="text-lg text-blue-300 font-semibold">Opening times</h1>
                            <div className="flex gap-16 mt-7">
                                <ul className="flex text-blue-300 font-semibold flex-col gap-3">
                                    <li>Monday</li>
                                    <li>Tuesday</li>
                                    <li>Wednesday</li>
                                    <li>Thursday</li>
                                    <li>Friday</li>
                                    <li>Saturday</li>
                                    <li>Sunday</li>
                                </ul>
                                <ul className="flex flex-col font-medium gap-3">
                                    <li>10am-9pm</li>
                                    <li>10am-9pm</li>
                                    <li>10am-9pm</li>
                                    <li>10am-9pm</li>
                                    <li>10am-9pm</li>
                                    <li>10am-9pm</li>
                                    <li>Closed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {bookingsPopUp && <BookingsPopUp turfData={turfData} setBookingsPopUp={setBookingsPopUp}/>}
        </div>
    );
}

export default TurfDetails;