export default function Program({time, name, channel}){
    return(
        <div className="programm">
            <span className="programm-time">{time}</span>
            <span className="programm-name">{name}</span>
            <span className="programm-channel">{channel}</span>
        </div>
    )
} 