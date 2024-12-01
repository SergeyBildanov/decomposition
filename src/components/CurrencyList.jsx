import Currency from "./Currency"

export default function CurrencyList({currencyArray}){
    return(
        <div className="currency-wrapper">
            {
                currencyArray.map((item,index) => {
                    return <Currency text={item.text} rising={item.rising} key={index}/>
                })
            }
        </div>
    )
}