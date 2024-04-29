import Image from "next/image";
import turfImg from "../../assests/images/istockphoto-1454696283-170667a.webp";

const Header=()=>{

    return(
        <div className="flex w-full pt-10 px-20"> 
            <div className="relative overflow-hidden rounded-3xl w-full h-80 ">
                <div className="absolute flex flex-col gap-2 items-center justify-center z-10 top-0 left-0 w-full h-full bg-gray-400 bg-opacity-20 backdrop-blur-[2px]">
                    <p className="text-[32px] text-gray-800 font-bold">Book Your turf slot with FieldFiesta</p>
                    <p className="font-semibold text-lg text-gray-800">20+ turfs available for booking worldwide!</p>
                </div>
                <Image className="w-full h-full object-fill" src={turfImg}></Image>
            </div>
        </div>
    );
}

export default Header;
