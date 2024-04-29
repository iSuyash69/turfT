import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useRouter } from "next/navigation";

const Card=({card})=>{

    const router=useRouter();

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
        <div onClick={()=>{router.push(`/turf/${card?.turf_Id}`)}} className="mt-7 relative max-h-[290px] max-w-[320px] min-h-[290px] min-w-[320px] cursor-pointer bg-gray-200 mb-5 overflow-hidden rounded-3xl shadow-gray-400 shadow-lg ">
            <div className="w-full h-full overflow-hidden">
                <img className="w-full h-full object-cover hover:transform hover:scale-110 transition-transform duration-300" src={card?.src}></img>
            </div>
            <div className="bg-white absolute bottom-0 p-2 px-4 rounded-3xl w-full ">
                <h1 className="font-medium leading-tight">{card?.turf_Name}</h1>
                <h3 className="text-sm text-gray-400">{card?.Amenities}</h3>
                <div className="w-full mt-0.5 py-1 flex justify-between">
                    <div className="flex gap-1.5 items-center">
                        <FaLocationDot className="text-lg text-gray-300"/>
                        <h1 className="text-gray-500 text-sm line-clamp-1 mr-8 font-light">{card?.location}</h1>
                    </div>
                    <div className="flex items-center gap-1">
                        <h1 className="text-gray-400 text-sm font-light">{"("+card?.no_of_ratings+")"}</h1>
                        <div className="flex">
                            {renderStars(card?.ratings)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;