export default function Currency({text, rising}){
    return(
        <div className="currency">
            <span className="currency-text">{text}</span>
            <span className="currency rising">{rising}</span>
        </div>
    )
}