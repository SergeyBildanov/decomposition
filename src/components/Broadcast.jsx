export default function Broadcast({name, channel}){
    return(
        <div className="broadcast-item">
            <span className="broadcast-name">{name}</span>
            <span className="broadcast-channel">{channel}</span>
        </div>   
    )
}