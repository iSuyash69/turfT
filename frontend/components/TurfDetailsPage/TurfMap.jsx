const TurfMap=()=>{

    return(
        <div  className="mt-10 h-[470px] bg-gray-300 border shadow-gray-400 shadow-md overflow-hidden rounded-3xl w-[80%] self-center">
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d947126.5829208362!2d79.4712759!3d21.9839672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd95dab0197f3b%3A0xc0fbe4255bc506e3!2sGarden%20estate%20society!5e0!3m2!1smr!2sin!4v1706793535848!5m2!1smr!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default TurfMap;