import Popular from "./Popular"

export default function PopularList({popularArray}){
    return(
        <>
            <h2 className="header popular-header">Посещаемое</h2>
            <div className="popular-wrapper">
                {
                    popularArray.map((item,index) => {
                        return <Popular category={item.category} text={item.text} key={index}/>
                    })
                }
            </div>
        </>
    )
}