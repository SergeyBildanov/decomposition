export default function Weather({icon, valueNow, info}){
    return(
        <>
            <h3 className="header weather-header">Погода</h3>
            <div className="weather-wrapper">
            <img src={icon} alt="wearher-icon" className="weather-icon" />
                <div className="weather-now">{valueNow}</div>
                <div className="weather-info">{info}</div>
            </div>
        </>
    )
}