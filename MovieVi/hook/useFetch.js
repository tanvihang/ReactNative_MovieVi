import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //an axios request, but not the execute ones
    const options = {
        method: 'GET',
        url: 'https://moviesminidatabase.p.rapidapi.com/movie/order/byRating/',
        headers: {
          'X-RapidAPI-Key': '141cd77e20msh80334b8d5bbbee1p17b737jsn63b052da3a55',
          'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
      };
      

    const fetchData = async()=>{
        setIsLoading(true);
  
        try{
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        }catch(error){
            setError(error);
            alert("There is an error while fetching url!");
        }finally{
            setIsLoading(false);
        }

    }

    useEffect(()=>{
        fetchData();
    },[])

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return{data,isLoading,error,refetch};
}

export default useFetch;