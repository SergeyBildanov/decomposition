export default function Map({country}){
    return(
        <div className="map-wrapper">
            <h2 className="map-header header">{`Карта ${country}`}</h2>
            <div className="map-text">Расписание</div>
        </div>
    )
}