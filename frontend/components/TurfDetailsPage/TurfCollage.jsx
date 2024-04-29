import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import collage1 from "../../assests/images/240_F_424424973_gbWTLm4RkYpRPrKpWxf77X2GvJUzdUWA.jpg"
import collage2 from "../../assests/images/DSC_1288-scaled.jpg";
import collage3 from "../../assests/images/indoor-stadium-view-behind-wicket-cricket-160851985.webp";
import collage4 from "../../assests/images/synthetic-grass-volleyball-Watersavers-Turf-Blog-February-19.jpg";
import Image from "next/image";

const TurfCollage=({turfData})=>{
    
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

    return(
        <div className=" flex flex-col w-full gap-5">
            <div className="flex justify-between mt-10 w-[75%] self-center">
                <div className= "w-2/3">
                 <h1 className="text-3xl font-medium">{turfData?.turf_Name}</h1>
                </div>
                <div className="flex flex-col self-end">
                    <div className="flex gap-1 items-center">
                        <FaLocationDot className="text-xl text-gray-500"/>
                        <h1 className="text-gray-500 font-light">{turfData?.location}</h1>
                    </div>
                    <div className="flex items-center gap-1">
                        <h1 className="text-gray-400  font-light">{"("+turfData?.no_of_ratings+")"}</h1>
                        <div className="flex">
                            {renderStars(turfData?.ratings)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[80%] self-center flex flex-col gap-1">
                <div className="flex items-center gap-1">
                    <div className="bg-gray-200 rounded-3xl overflow-hidden w-[590px] h-[483px] cursor-pointer relative">
                        <img className="w-full h-full object-cover" src={turfData?.src}></img>
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 hover:opacity-20"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-1">
                            <div className="w-[313px] h-[237px] rounded-3xl overflow-hidden bg-gray-200 cursor-pointer relative">
                                <Image className="w-full h-full  object-cover" src={collage1}></Image>
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 hover:opacity-20"></div>
                            </div>
                            <div className="w-[313px] h-[237px] rounded-3xl overflow-hidden bg-gray-200 cursor-pointer relative">
                                <Image className="w-full h-full object-cover" src={collage2}></Image>
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 hover:opacity-20"></div>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <div className="w-[313px] h-[237px] rounded-3xl overflow-hidden bg-gray-200 cursor-pointer relative">
                                 <Image className="w-full h-full object-cover" src={collage3}></Image>
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 hover:opacity-20"></div>
                            </div>
                            <div className="w-[313px] h-[237px] rounded-3xl overflow-hidden bg-gray-200 cursor-pointer relative">
                                <Image className="w-full h-full object-cover" src={collage4}></Image>
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 hover:opacity-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TurfCollage;