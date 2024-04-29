"use client"
import TurfCollage from "@/components/TurfDetailsPage/TurfCollage";
import TurfDetails from "@/components/TurfDetailsPage/TurfDetails";
import TurfMap from "@/components/TurfDetailsPage/TurfMap";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from '@/config';

const Page=({params})=>{
    
    const [turfData,setTurfData]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        try{
            const response=await axios.get(`${baseUrl}/turf/${params.turfId}`);
            if(response){
                setTurfData(response?.data?.data);
            }
        }
        catch(err){
            console.log("Something went wrong"+err);
        }
    }

    console.log(turfData);

    return(
        <div>
            {!turfData && <div className="w-full h-screen flex justify-center items-center text-xl text-blue-400">Loading...</div>}
            {turfData &&
            <div className="flex flex-col w-full mt-20">
                <TurfCollage turfData={turfData}/>
                <TurfDetails turfData={turfData}/>
                <TurfMap/>
            </div>
            }
        </div>
    );
}

export default Page;