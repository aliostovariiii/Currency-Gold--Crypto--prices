import { useContext } from "react";
import { CurrencyContext} from "../CurrenContext"
import CurrencyCard from './CurrencyCard'
export default function CurrencyCardList() {

    const { currencies } = useContext(CurrencyContext); // گرفتن لیست ارزها از context

    const activeCurrencies = currencies.filter((item) => item.active); // فقط ارزهای فعال
    return (
        <>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
               {activeCurrencies.map((item)=>(
                  <CurrencyCard  key={item.symbol} item={item}/>

               ))}
            </div>
        </>

    )
}
