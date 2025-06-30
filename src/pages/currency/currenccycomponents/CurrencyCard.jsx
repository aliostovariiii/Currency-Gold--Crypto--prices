import Icon from '../../../components/Icon';
export default function CurrencyCard( { item }) {
    return (
        <>
            <div className="bg-white p-4 rounded-2xl shadow-xl flex  justify-end gap-2 w-70 flex-row-reverse md:flex-col md:w-62  ">
                <div className=" w-1/3  flex flex-col-reverse items-center justify-around mb-2 md:justify-between md:w-full">
                    <h3 className=" text-lg font-bold text-center">   ({item.symbol.toUpperCase()}) {item.name}</h3>
                    <img src="https://flagcdn.com/gb.svg" alt="GBP" className=" w-10 h-10 rounded-full md:w-8 md:h-6" />
                </div>

                <div className="flex flex-col items-end space-y-1 w-2/3 md:w-full ">
                <div className="flex flex-row-reverse items-center gap-1">
                        
                         <Icon name="rate" size={16} />
                        <span className="font-semibold">:نرخ </span>
                        <span className="text-gray-600">{item.price || "0"}</span>
                    </div>

                    <div className="flex flex-row-reverse items-center gap-1">
                    <Icon name="clock" size={16} />
                        <span className="font-semibold">:ساعت</span>
                        <span className="text-gray-600">{item.time || "00:00"}</span>
                    </div>

                    <div className="flex flex-row-reverse items-center gap-1">
                    <Icon name="trending-up" size={16} />
                        <span className="font-semibold">:سعود</span>
                        <span className="text-gray-600">{item.change_value || "(0%)"}</span>
                    </div>


                    <div className="flex flex-row-reverse  items-center gap-1">
                    <Icon name="trending-down" size={16} />
                        <span className="font-semibold">:تغییر</span>
                        <span className="text-red-500">{item.change_percent ||"(0.0%)"}</span>
                    </div>

                </div>



            </div>
        </>
    )
}
