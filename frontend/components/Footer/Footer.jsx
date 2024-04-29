import Image from "next/image";
import playstore from "../../assests/images/app-store-and-google-play 1.png";
import appstore from "../../assests/images/app-store-and-google-play 2.png";

const Footer=()=>{

    return(
        <div className="mt-24 bg-blue-100 bg-opacity-80 w-full px-20 pt-14">
            <div className="group text-black flex justify-between ">
                <ul className="flex flex-col font-medium gap-0.5 ">
                    <li className="text-lg">Contact Us</li>
                    <li>Official Address: Mohan Residency, Amrutdham</li>
                    <li>India Official</li>
                    <li>Phone Number: +971 58 125 7790</li>
                    <li>WhatsApp: +971 58 125 7790</li>
                </ul>
                <ul className="flex flex-col gap-2 font-semibold">
                    <li>Privacy Policy</li>
                    <li>Payment Policy</li>
                    <li>Terms of use</li>
                </ul>
                </div>
                <div className="mt-14 pb-10 gap-2 flex flex-col ">
                <h1 className="">Available Soon</h1>
                <div className="flex gap-3">
                    <Image className="w-28 h-10" src={appstore}></Image>
                    <Image className="w-28 h-10" src={playstore}></Image>
                </div>
            </div>
        </div>    
    );
}

export default Footer;