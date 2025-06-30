import { createContext, useEffect, useState } from "react";
import { fetchAllData } from"../currency/shared/apiserves"



export const CurrencyContext  = createContext()


export default function CurrencyProvider({ children }) {


    const [currencies, setCurrencies] = useState([]);
    
    const getData=async()=>{
      try{
      const data = await fetchAllData(); // تمام دیتاها: currency, gold, ...
      const currencyList = data.currency.map((item) => ({
        ...item,
        active:false,
      }));
      setCurrencies(currencyList);
      }catch(error){
        console.log('خطا در گرفتن دیتا',error)

      }
      
    };


    useEffect (()=>{
      getData();
      
      const interval = setInterval(() => {
        getData(); // هر ساعت یک بار
      }, 60 * 60 * 1000); // 1 ساعت = 3600000 میلی‌ثانیه
    
      return () => clearInterval(interval); // پاکسازی در unmount
    },[]);


      const toggleCurrency = (symbol) => {
        setCurrencies((prev) =>
          prev.map((item) =>
            item.symbol === symbol ? { ...item, active: !item.active } : item
          )
        );
      };

    
        return (
            <CurrencyContext.Provider  value={{ currencies, toggleCurrency }}>
                {children}
    
            </CurrencyContext.Provider>
        )
    }