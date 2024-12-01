import Program from "./Program"

export default function TVProgramms({programmsArray}){
    return(
        <>
            <h2 className="header popular-header">Телепрограмма</h2>
            <div className="programms-wrapper">
                {
                    programmsArray.map((item, index) =>{
                        return <Program time={item.time} name={item.name} channel={item.channel} key={index}/>
                    })
                }
            </div>
        </>
    )
}