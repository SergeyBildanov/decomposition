import NewsItem from "./NewsItem"

export default function News({newsArray}){
    return(
        <div className="news-wrapper">
            {
                newsArray.map((item, index)=>{
                    return (
                        <NewsItem icon={item.icon} text={item.text} link={item.link} key={index}/>
                    )
                })
            }
        </div>
    )
}