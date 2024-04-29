import Body from "../components/HomePage/Body";
import Footer from "../components/HomePage/Footer";
import Header from "../components/HomePage/Header";

const Page=()=>{

  return(
    <div className="flex flex-col w-full mt-20">
        <Header/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default Page;