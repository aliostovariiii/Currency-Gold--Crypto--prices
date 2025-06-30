import { useContext } from "react"
import { CurrencyContext } from "../CurrenContext"


export default function CurrencyButtons() {

  let { currencies, toggleCurrency } = useContext(CurrencyContext)
  return (
    <>
      <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 p-4 mb-6 overflow-x-auto md:overflow-visible">
        {currencies.map((item) =>

          <button
            key={item.symbol}
            onClick={() => toggleCurrency(item.symbol)}
            className={`px-4 py-1 rounded border transition-colors
            ${item.active
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-300 hover:text-white"
              }`}
          >
            {item.symbol}
          </button>

        )}

      </div>
    </>

  )
}