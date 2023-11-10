import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

// Accesing the the api key from env

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
  // const [gif,setGif]=useState('');
  // const [loading,setLoading]=useState(false);
  const {gif,loading,fetchData}=useGif();
 
  return(<div className='lg:w-1/2 w-full bg-green-500 rounded-xl border border-black 
  flex flex-col items-center gap-y-5 mt-[15px]'>
    <h1 className='mt-[15px] text-xl md:text-2xl underline uppercase font-bold'>
      A RANDOM GIF
    </h1>
      {
        loading ?(<Spinner/>):(<img src={gif} width="450"></img>)
      }
      
      <button onClick={()=>fetchData()} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] uppercase  font-medium tracking-wide">Generate</button>
    
  </div>
  )

};

export default Random;  
