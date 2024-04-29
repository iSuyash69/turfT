"use client"
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Carousal from "@itseasy21/react-elastic-carousel";
import Card from './Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '@/config';


const CardContainer=({type})=> {
    
    const [popularCardsData,setPopularCardsData]=useState([]);
    const [topRatedCardsData,setTopRatedCardsData]=useState([]);

    console.log(type);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        try{
            const response=await axios.get(`${baseUrl}/turf`);
            if(response){
                console.log(response.data.data);
                if(type=="popular"){
                    const sortedData = response.data.data.sort((a, b) => b.no_of_ratings - a.no_of_ratings);
                    setPopularCardsData(sortedData);
                }
                else if(type=="topRated"){
                    const sortedData = response.data.data.sort((a, b) => b.ratings - a.ratings).slice(0,7);
                    setTopRatedCardsData(sortedData);
                }
            }
        }
        catch(err){
            console.log("something went wrong "+err);
        } 
    }

    const CustomArrow = ({ type, onClick, isEdge}) => {
        const icon = type === 'PREV' ? <BsChevronLeft /> : <BsChevronRight />;
        return (
            <div className=''>
                <button onClick={onClick} disabled={isEdge} className="bg-gray-200 hover:bg-green-500 hover:text-white mt-[140px] text-xl rounded-full p-3"> {icon}</button>
            </div>
        );
      };

    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3, itemsToScroll: 3 },
        { width: 1200, itemsToShow: 4, itemsToScroll: 1 },
      ];

      return (
        <div>
            {type === "popular" ? (
                popularCardsData.length === 0 ? (
                    <div className='w-full py-20 text-center text-xl text-blue-300'>Loading...</div>
                ) : (
                    <Carousal className="px-4" breakPoints={breakPoints} easing="cubic-bezier(1,.15,.55,1)" renderArrow={CustomArrow} pagination={false} transitionMs={700}>
                        {popularCardsData.map((card, key) => (
                            <Card key={key} card={card}/>
                        ))}
                    </Carousal>
                )
            ) : type === "topRated" ? (
                topRatedCardsData.length === 0 ? (
                    <div className='w-full py-20 text-center text-xl text-blue-300'>Loading...</div>
                ) : (
                    <Carousal className="px-4" breakPoints={breakPoints} easing="cubic-bezier(1,.15,.55,1)" renderArrow={CustomArrow} pagination={false} transitionMs={700}>
                        {topRatedCardsData.map((card, key) => (
                            <Card key={key} card={card}/>
                        ))}
                    </Carousal>
                )
            ) : (
                <div className='w-full py-20 text-center text-xl text-red-300'>Invalid type</div>
            )}
        </div>
    );
    
}

export default CardContainer;