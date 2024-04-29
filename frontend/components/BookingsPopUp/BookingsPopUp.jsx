"use client"
import { useFormik} from "formik";
import { RxCross2 } from "react-icons/rx";
import { validationSchema } from "./FormValidation";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import { baseUrl } from '@/config';

const BookingsPopUp=({turfData,setBookingsPopUp})=>{

    const router=useRouter();
    const [loading,setLoading]=useState(false);

    const initialValues={
        user_Name:"",
        contact_No:"",
        turf_Id:turfData?._id,
        Date:"",
        time_slot:"",
        user_email:"",
        no_of_players:"",
        payment_method:"COD",
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, handleReset } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values, action) => {
          setLoading(true); // Set loading state to true
    
          try {
            // Display confirmation dialog
            const confirmationResult = await Swal.fire({
              title: 'Are you sure?',
              text: 'You will not be able to revert this!',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#38a169',
              cancelButtonColor: 'black',
              confirmButtonText: 'Yes, confirm it!'
            });
    
            if (confirmationResult.isConfirmed) {
              // Send booking data to backend
              const response = await axios.post(`${baseUrl}/booking`, values);
              // Display success dialog
                if(response){
                    console.log(response);
                    localStorage.setItem("booking_id", response?.data?.data);
                    localStorage.setItem("turf_Name",turfData?.turf_Name);
                    localStorage.setItem("turf_location",turfData?.location);
                    localStorage.setItem("turf_cost",turfData?.Rate_Night);
                    await Swal.fire({
                        title: 'Booked!',
                        text: 'Your turf booking has been successfully done',
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK'
                      });
            
                      // Redirect after success
                      setTimeout(() => {
                        document.body.style.overflow='';
                        router.push(`/`);
                      }, 1500); // 1.5 seconds
                }
            }
          } catch (err) {
            console.log("Something went wrong" + err);
            await Swal.fire({
                title: 'Error!',
                text: 'Time Slot already booked',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
              });
          } finally {
            setLoading(false); // Reset loading state
          }
        },
      });

    const closeClickHandler=()=>{
        setBookingsPopUp(false);
        document.body.style.overflow='';
    }

    const resetClickHandler=()=>{
        handleReset();
    }
    
    return(
        <div className="fixed w-full bg-black bg-opacity-35 backdrop-blur-xl z-30 min-h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <form onSubmit={handleSubmit} style={{maxHeight:'90vh',overflowY:'auto',overflowX:'hidden'}} className="flex shadow-md shadow-blue-300/50 text-black scrollbar-style relative py-5 px-16 bg-white bg-opacity-75 rounded-xl flex-col">
                <h3 className="text-2xl m-auto font-semibold mb-9">Add Booking Details</h3>
                <RxCross2 onClick={closeClickHandler} className="text-3xl absolute  rounded-full  top-2 right-3 cursor-pointer"/>
                <div className="mb-4 flex gap-8">
                    <div>
                        <label for="website-admin" class="block mb-2 text-md font-medium text-gray-900">Full Name</label>
                        <div class="flex">
                            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
                                <svg class="w-10 h-4  text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                </svg>
                            </span>
                            <input type="text"  name="user_Name" value={values.user_Name} onChange={handleChange} onBlur={handleBlur} id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-80 text-sm  p-2.5" placeholder="Bonnie Green" required/>
                        </div>
                        {errors.user_Name && touched.user_Name ?(
                            <p className="text-sm mt-1 text-red-600 font-medium">{errors.user_Name}</p>
                        ):(null)}
                    </div>
                    <div>
                        <label for="first_name" className="block mb-2 text-md font-medium text-gray-900 ">Email ID<span className="text-sm font-normal"></span></label>
                        <input  name="user_email" value={values.user_email} onChange={handleChange} onBlur={handleBlur} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5" placeholder="example@gmail.com" required/>
                        {errors.user_email && touched.user_email ?(
                            <p className="text-sm mt-1 text-red-600 font-medium">{errors.user_email}</p>
                        ):(null)}
                    </div>
                </div>
                <div className="mb-4 flex gap-8">
                    <div>
                        <label for="first_name" className="block mb-2 text-md font-medium text-gray-900 ">Phone No.<span className="text-sm font-normal"></span></label>
                        <input  name="contact_No" value={values.contact_No} onChange={handleChange} onBlur={handleBlur} type="tel" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5" placeholder="Phone No." required/>
                        {errors.contact_No && touched.contact_No ?(
                            <p className="text-sm mt-1 text-red-600 font-medium">{errors.contact_No}</p>
                        ):(null)}
                    </div>
                    <div>
                        <label for="first_name" className="block mb-2 text-md font-medium text-gray-900 ">Select Booking Date<span className="text-sm font-normal"></span></label>
                        <input  name="Date" value={values.Date} onChange={handleChange} onBlur={handleBlur} type="date" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5" required/>
                        {errors.Date && touched.Date ?(
                            <p className="text-sm mt-1 text-red-600 font-medium">{errors.Date}</p>
                        ):(null)}
                    </div>
                </div>
                <div className="mb-4 flex gap-8 m-auto">
                    <div>
                        <label htmlFor="time_slot" className="block mb-2 text-md font-medium text-gray-900">Select Slot</label>
                        <select name="time_slot" value={values.time_slot} onChange={handleChange} onBlur={handleBlur} id="time_slot" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5" required>
                            <option className="hidden" value="">Select a slot</option>
                            <option value="10:00am - 1:00pm">10:00am - 1:00pm</option>
                            <option value="2:00pm - 5:00pm">2:00pm - 5:00pm</option>
                            <option value="6:00pm - 9:00pm">6:00pm - 9:00pm</option>
                        </select>
                        {errors.time_slot && touched.time_slot ? (
                        <p className="text-sm mt-1 text-red-600 font-medium">{errors.time_slot}</p>
                        ) : (null)}
                    </div>
                    <div>
                        <label htmlFor="no_of_players" className="block mb-2 text-md font-medium text-gray-900">No. of Players</label>
                        <select name="no_of_players" value={values.no_of_players} onChange={handleChange} onBlur={handleBlur} id="no_of_players" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5" required>
                            <option className="hidden" value="">Select number of players</option>
                            <option value="0-5">0-5</option>
                            <option value="5-10">5-10</option>
                            <option value="10-15">10-15</option>
                            <option value="15-20">15-20</option>
                        </select>
                        {errors.no_of_players && touched.no_of_players ? (
                        <p className="text-sm mt-1 text-red-600 font-medium">{errors.no_of_players}</p>
                        ) : (null)}
                    </div>
                </div>
                <div className="mb-4 flex gap-8 m-auto">
                    <div>
                        <label for="first_name" className="block mb-2 text-md font-medium text-gray-900 ">Payment Method</label>
                        <input name="map" disabled value={"COD - Cash on Delivery"} onChange={handleChange} onBlur={handleBlur} type="text" id="first_name" className="bg-gray-50 border  border-gray-300 cursor-not-allowed text-gray-400 font-medium text-sm rounded-lg focus focus:border-blue-400 w-[52vw] p-2.5" required/>
                    </div>
                  
                </div>
                <div className="m-auto mt-3 flex gap-3 ">
                    <button type="submit" className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-2  font-medium rounded-lg text-sm px-7 py-2.5 mb-2">Proceed</button>
                    <button onClick={resetClickHandler} type="button" className="text-white bg-black hover:bg-gray-800  font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2">Reset</button>
                </div>
            </form>
        </div>
    );
}

export default BookingsPopUp;