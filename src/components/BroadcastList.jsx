import Broadcast from "./Broadcast"

export default function BroadcastList({broadcastArray}){
    return(
        <>
            <h2 className="header popular-header">Эфир</h2>
            <div className="broadcast-wrapper">
                {
                    broadcastArray.map((item, index)=>{
                        return <Broadcast name={item.name} channel={item.channel} key={index}/>
                    })
                }
            </div>
        </>
    )
}