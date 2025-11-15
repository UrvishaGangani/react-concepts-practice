import { useEffect, useState } from "react"; 

function useCurrencyInfo(currency) {
    let ReqURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
     const [data,setData] = useState({})

    useEffect(() => {
        fetch(ReqURL)
            .then((res) => res.json())            
            .then((res) => setData(res[currency]))        
    },[])
  return (
    <div>useCurrencyInfo</div>
  )
}

export default useCurrencyInfo