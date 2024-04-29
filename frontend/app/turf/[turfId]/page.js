"use client"
import TurfCollage from "@/components/TurfDetailsPage/TurfCollage";
import TurfDetails from "@/components/TurfDetailsPage/TurfDetails";
import TurfMap from "@/components/TurfDetailsPage/TurfMap";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from '@/config';

const Page=({params})=>{
    
    const [turfData,setTurfData]=useState({});

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        try{
            const response=await axios.get(`${baseUrl}/home/${params.turfId}`);
            if(response){
                setTurfData(response.data.data);
            }
        }
        catch(err){
            console.log("Something went wrong"+err);
        }
    }

    console.log(turfData);

    return(
        <div className="flex flex-col w-full mt-20">
            <TurfCollage turfData={turfData}/>
            <TurfDetails turfData={turfData}/>
            <TurfMap/>
        </div>
    );
}

export default Page;