import CardContainer from "./CardContainer";

const Body=()=>{

    return(
        <div className="flex flex-col px-0">
            <div className="mt-10">
                <h1 className="text-[24px]  text-center">Popular Turfs</h1>
                <CardContainer type={"popular"}/>
            </div>
            <div className="mt-10">
                <h1 className="text-[24px] text-center">Top Rated Turfs</h1>
                <CardContainer type={"topRated"}/>
            </div>
        </div>
    );
}

export default Body;